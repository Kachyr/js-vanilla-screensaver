let mouseTimeout;
let screensaverActive = false;
const imagesArr = [
  "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060",
  "https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560",
  "https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200",
  "https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
  "https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400",
  "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260",
  "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

let img = document.createElement("img");

img.classList.add("imageblock");
document.getElementById("screensaver").append(img);

let imgHeight = document.querySelector("img").height;
let imgWidth = document.querySelector("img").width;

function setPosition() {
  //SETTING RANDOM X AND Y

  let posHeigt = (
    Math.random() *
    (document.getElementById("screensaver").offsetHeight - imgHeight)
  ).toFixed();
  let posWidth = (
    Math.random() *
    (document.getElementById("screensaver").offsetWidth - imgWidth)
  ).toFixed();
  img.style.top = posHeigt + "px";
  img.style.left = posWidth + "px";
}

function showScreensaver() {
  setPosition();
  img.src = imagesArr[Math.floor(Math.random() * imagesArr.length)];
  img.classList.add("show");
  img.classList.remove("hide");
  screensaverActive = true;
  document.getElementById("screensaver").append(img);

  imgHeight = document.querySelector("img").height;
  imgWidth = document.querySelector("img").width;
  // There is interval of screen chenge
  setTimeout(null, 2000);
}

function stopScreensaver() {
  img.classList.add("hide");
  img.classList.remove("show");
  document.querySelector("img").remove();
  screensaverActive = false;
}

document.onmousemove = (e) => {
  clearTimeout(mouseTimeout);
  if (screensaverActive) {
    stopScreensaver();
  }
  // there is time to start screensaver
  mouseTimeout = setInterval(showScreensaver, 2000);
};


