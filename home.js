//css
document.body.style.opacity = "1";
document.getElementById("header").textContent = "PrimeMart";

let footer = document.getElementById("footer");
let footerCards = footer.querySelectorAll("div");
for (let k = 0; k < footerCards.length; k++) {
  footerCards[k].style.cursor = "default";
}
//code
let img = document.getElementById("slider");
let img_a = [];
let timer;
let i = 0;

function getPosts() {
  let url = "https://fakestoreapi.com/products";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send("");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = xhr.responseText;
      data = JSON.parse(data);

      for (let i = 0; i < data.length; i++) {
        img_a.push(data[i].image);
      }

      img.src = img_a[0];
      i = 1;

      timer = setInterval(() => {
        img.src = img_a[i];
        i++;
        if (i == img_a.length) {
          i = 0;
        }
      }, 2000);
    }
  };
}

getPosts();

let title = [];
let img_card = [];
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let img1;
let img2;
let img3;

function getcards() {
  let url = "https://fakestoreapi.com/products";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send("");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = xhr.responseText;
      data = JSON.parse(data);

      for (let i = 0; i < data.length; i++) {
        img_card.push(data[i].image);
      }
      for (let i = 0; i < data.length; i++) {
        title.push(data[i].title);
      }
      card1.src = img_card[0];
      text1.innerText = title[0];
      card2.src = img_card[1];
      text2.innerText = title[1];
      card3.src = img_card[2];
      text3.innerText = title[2];

      card1.setAttribute("data-id", data[0].id);
      card2.setAttribute("data-id", data[1].id);
      card3.setAttribute("data-id", data[2].id);
      card1.addEventListener("click", function () {
        window.open("description.html?id=" + card1.getAttribute("data-id"), "_self");
      });
      card2.addEventListener("click", function () {
        window.open("description.html?id=" + card2.getAttribute("data-id"), "_self");
      });
      card3.addEventListener("click", function () {
        window.open("description.html?id=" + card3.getAttribute("data-id"), "_self");
      });
  
      i = 1;
      img1 = setInterval(() => {
        card1.src = img_card[i];
        text1.innerText = title[i];
        card1.setAttribute("data-id", data[i].id);
        i++;
        if (i == img_card.length) {
          i = 0;
        }
      }, 2000);
      i=2
      img2 = setInterval(() => {
        card2.src = img_card[i];
        text2.innerText = title[i];
        card2.setAttribute("data-id", data[i].id);
        i++;
        if (i == img_card.length) {
          i = 0;
        }
      }, 2000);
      i=3
      img3 = setInterval(() => {
        card3.src = img_card[i];
        text3.innerText = title[i];
        card3.setAttribute("data-id", data[i].id);
        i++;
        if (i == img_card.length) {
          i = 0;
        }
      }, 2000);
    }
  };
}

getcards();



