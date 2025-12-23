
let id=window.location
console.log(id);
id = window.location.search; 
console.log(id);
id = id.split("=")[1];           

let url = "https://fakestoreapi.com/products/" + id;
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send("");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let product = JSON.parse(xhr.responseText);

    document.getElementById("details").innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.image}" width="250" />
      <p><Price:$${product.price}</p>
      <p>Category: ${product.category}</p>
      <p>Description: ${product.description}</p>
    `;
  }
};
let backBtn = document.getElementById("back");
backBtn.addEventListener("click", function () {
  window.open("home.html", "_self");
});