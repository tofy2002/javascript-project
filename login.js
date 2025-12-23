
function getCookie(cookiename) {
  var cookiesArr = allCookiesList();
  return cookiesArr[cookiename];
}

function hasCookie(cookiename) {
  if (getCookie(cookiename) != undefined) {
    return true;
  } else {
    return false;
  }
}
function allCookiesList() {
  var cookiesArr = []; 
  var cookies = document.cookie.split(";"); 
  for (
    var i = 0;
    i < cookies.length;
    i++ 
  ) {
    var key = cookies[i].split("=")[0].trim();
    var value = cookies[i].split("=")[1];
    cookiesArr[key] = value;
  }
  return cookiesArr;
}
let username = document.getElementById("username")
let password = document.getElementById("password")
let win_h;
let win_s;
document.getElementById("liginform").addEventListener("submit", function (e) {
  e.preventDefault();
  sumbit();
});
function sumbit(){
        if(getCookie(username.value) == username.value && getCookie(password.value) == password.value){
           win_h=window.open("home.html"); 
        }
        else{
            win_s=window.open("signup.html");
        }
    }
function signup(){
            win_s=window.open("signup.html");
    }   
