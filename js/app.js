var pics = [
  "images/1.jpg",
  "images/2.jpg",
  "images/5.jpg",
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
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var cnt = 1;

btn.addEventListener("click", function () {
  if (cnt == 15) cnt = 0;
  img.src = pics[cnt];
  cnt = cnt + 1;
});
