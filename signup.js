
function setCookie(cookiename, cookieval, expdays) {
  if (expdays) {
    var date = new Date();
    date.setTime(date.getTime() + expdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + date.toUTCString();
    document.cookie =
      encodeURIComponent(cookiename) +  //~ method encodes special characters including: , / ? : @ & = + $ #
      "=" +
      encodeURIComponent(cookieval) +
      ";" +
      expires; //persistant cookie
  } else {
    document.cookie =
      encodeURIComponent(cookiename) + "=" + encodeURIComponent(cookieval); //session cookie
  }
}

function allCookiesList() {
  var cookiesArr = []; // an empty array for pushing on it keys and values
  var cookies = document.cookie.split(";"); //array for spliting cookies at semicolon , cookies is not collection like images[] and forms[]
  for (
    var i = 0;
    i < cookies.length;
    i++ //this loop for pushing cookies into cookies array by spliting before and after assignment operator
  ) {
    var key = cookies[i].split("=")[0].trim();
    var value = cookies[i].split("=")[1];
    cookiesArr[key] = value;
  }
  return cookiesArr;
}

function getCookie(cookiename) {
  //as the previous function but with (cookiename) parameter to return one by name
  var cookiesArr = allCookiesList();
  return cookiesArr[cookiename]; //return from array after we pushed on it all cookies the wanted cookie by its name
}

function hasCookie(cookiename) {
  if (getCookie(cookiename) != undefined) {
    return true;
  } else {
    return false;
  }
}



let username=document.getElementById("username");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");
let nameError=document.getElementById("nameError");
let passwordError=document.getElementById("passwordError");
let passrequired=document.getElementById("passrequired");
function validatename(){
    let value1=username.value
    let nameRegex=/^[A-Za-z ]+$/
    if(value1.length > 3 && nameRegex.test(value1)){
        nameError.style.display="none";
        username.style.border="1.5px solid green"
        return true;
    }
    else {
        nameError.style.display="inline"
        username.style.border="1.5px solid red"
        username.select()
        username.focus()
        return false;
    }
}
username.addEventListener("blur",validatename);
username.addEventListener("focus",()=>{
    username.style.border="2px solid blue"
});
function validatepass(){
    let pass=password.value
    let conpass=confirmPassword.value
    if(pass !== conpass || pass.length===0 || conpass.length===0 ){
        passwordError.style.display="inline"
        confirmPassword.style.border="1.5px solid red" 
        return false;
    }
    else{
        passwordError.style.display="none"
        confirmPassword.style.border="1.5px solid green"
        return true;
    }


}
function validateregex(){
    let pass=password.value
    let passval=/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/
    let passtest=passval.test(pass)
    if(!passtest){
        passrequired.style.display="inline"
         password.style.border="1.5px solid red" 
        password.select()
        return false;
    }else{
         passrequired.style.display="none"
         password.style.border="1.5px solid green" 
        return true;
    }
}
password.addEventListener("blur",validateregex)
confirmPassword.addEventListener("blur",validatepass)
let invalid=document.getElementById("invalid")
let signup=document.getElementById("signupForm")
let register=document.getElementById("register")
console.log(getCookie("username"))
let i=0
signup.addEventListener("submit",function(e){
  
  // e.preventdeafult();
   if (hasCookie(username.value)) {
    alert("This username is already taked. Please use other.");
    return;
  }
   let nameval=validatename();
    let passval=validatepass();
    let regexval=validateregex();
    if(!nameval || !passval || !regexval){
      e.preventDefault();
      invalid.style.display="inline"
      return;
    }
    else{
     
      invalid.style.display="none"
      setCookie(username.value, username.value, 1)                 
      setCookie(username.value + "_pass", password.value, 1)        

      alert("Registration successful!");
      window.open("login.html")
    }
})
// function registertion(){
//   let ok1=validatename();
//     let ok2=validatepass();
//     let ok3=validateregex();
//     if(!ok1 || !ok2 || !ok3){
//       invalid.style.display="inline"
//       return;
//     }
//     else{
//       invalid.style.display="none"
//       setCookie("username",username.value,1)
//       setCookie("password",password.value,1)
//       alert("Registration successful!");
//     }
// }