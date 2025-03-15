let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

let countItems = items.length;
let itemActive = 0;

// next button
next.onclick = () => {
  itemActive++;
  if (itemActive > countItems - 1) {
    itemActive = 0;
  }
  updateSlider();
};

// prev button
prev.onclick = () => {
  itemActive--;
  if (itemActive < 0) {
    itemActive = countItems - 1;
  }
  updateSlider();
};

// auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);

function updateSlider() {
  // remove active class from all items
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  itemActiveOld.classList.remove("active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  thumbnailActiveOld.classList.remove("active");

  //active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

// click on thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.onclick = () => {
    itemActive = index;
    updateSlider();
  };
});
