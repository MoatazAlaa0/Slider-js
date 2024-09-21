
let currentslideindex = 0;

const myImages = Array.from(document.querySelectorAll(".item-img"));
const myLayerImg = document.querySelector(".layer-img");
const myLayer = document.querySelector(".layer");
const myPrev = document.querySelector("#prev");
const myNext = document.querySelector("#next");
const myClose = document.querySelector("#close");

myImages.forEach((image, index) => {
    image.addEventListener("click", function (e) {
        currentslideindex = index;
        myLayer.classList.add("active");
        const srcImage = e.target.getAttribute("src");
        myLayerImg.style.backgroundImage = `url(${srcImage})`;
    });
});

myNext.addEventListener("click", nextSlide);
myPrev.addEventListener("click", prevSlide);
myClose.addEventListener("click", closeElement);

document.addEventListener("keydown", function (e) {
    if (myLayer.classList.contains("active")) {
        if (e.key === "ArrowRight") {
            nextSlide();
        } else if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "Escape") {
            closeElement();
        }
    }
});

myLayer.addEventListener("click", closeElement);

myLayerImg.addEventListener("click", function (e) {
    e.stopPropagation(); 
});

function nextSlide() {
    currentslideindex++;
    if (currentslideindex >= myImages.length) {
        currentslideindex = 0;
    }
    const srcImage = myImages[currentslideindex].getAttribute("src");
    myLayerImg.style.backgroundImage = `url(${srcImage})`;
}

function prevSlide() {
    currentslideindex--;
    if (currentslideindex < 0) {
        currentslideindex = myImages.length - 1;
    }
    const srcImage = myImages[currentslideindex].getAttribute("src");
    myLayerImg.style.backgroundImage = `url(${srcImage})`;
}

function closeElement() {
    myLayer.classList.remove("active"); 
}