const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");
const imagesContainer = document.querySelector(".carousel-images");

let currentIndex = 0;

const updateCarousel = () => {
  const width = window.innerWidth;
  imagesContainer.style.transform = `translateX(-${currentIndex * width}px)`;
};

const goToNext = () => {
  currentIndex = (currentIndex + 1) % imagesContainer.children.length;
  updateCarousel();
};

const geToPrevious = () => {
  currentIndex =
    (currentIndex - 1 + imagesContainer.children.length) %
    imagesContainer.children.length;
  updateCarousel();
};

nextButton.addEventListener("click", goToNext);
prevButton.addEventListener("click", geToPrevious);

window.addEventListener("keydown", (event) =>{
    if(event.key === "ArrowRight"){
        goToNext();
    }else if(event.key === "ArrowLeft"){
        geToPrevious();
    }
});

window.addEventListener("resize",updateCarousel);
window.addEventListener("load",updateCarousel);