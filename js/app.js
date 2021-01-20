var pics = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.PNG",
  "images/4.PNG",
  "images/5.jpg",
  "images/6.png",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpg",
  "images/18.jpg",
  "images/19.png",
  "images/20.png",
  "images/21.png",
  "images/22.png",
  "images/23.jpg",
  "images/24.jpg",
  "images/25.jpg",
  "images/26.jpg",
  "images/27.jpg",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var cnt = 1;

btn.addEventListener("click", function () {
  if (cnt == 15) cnt = 0;
  img.src = pics[cnt];
  cnt = cnt + 1;
});
