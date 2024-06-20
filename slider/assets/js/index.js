const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
    alt: "landscape1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    alt: "landscape2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg",
    alt: "landscape3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    alt: "landscape4",
  },
];

//MVVM - Model View ViewModel
class SLider {
  cunstruction(slides, currentIndex) {
    this.slides = slides;
    this.currentIndex = currentIndex;
  }

  decIndex() {
    const {
      currentIndex,
      slides: {length},
    } = this;

    this.currentIndex =
      (currentIndex - 1 + length) % length;
  }
  incIndex() {
    const {
      currentIndex,
      slides: { length },
    } = this;

    this.currentIndex = (currentIndex + 1) % length;
  }
}
const slider = new SLider(slides, 0);
//встановити як початкове нульове зображення
// let currentSlideIndex = 0;
const sliderImg = document.querySelector(".sliderImg");
const [prevBtn, nextBtn] = document.querySelectorAll("button");

// sliderImg.src = slides[currentSlideIndex].src;

// sliderImg.alt = slides[currentSlideIndex].alt;

//при натисканні на некст відобразити наступне зображення

function updateSlider(currentIndex) {
    sliderImg.src = slides[currentIndex].src;
    sliderImg.alt = slides[currentIndex].alt;
  }
  updateSlider(slider.currentIndex);


prevBtn.onclick = () => {
  //1 метод
  //   if (currentSlideIndex > 0) {
  //     currentSlideIndex--;
  //   } else {
  //     currentSlideIndex = slides.length - 1;
  //   }

  //2 метод
  // currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

  slider.decIndex();
  updateSlider(slider.currentIndex);
};

nextBtn.onclick = () => {
  //1 метод
  //   if (currentSlideIndex < slides.length - 1) {
  //     currentSlideIndex++;
  //   } else {
  //     currentSlideIndex = 0;
  //   }
  //   currentSlideIndex++;
  //2 метод
  //   currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  slider.incIndex();
  updateSlider(slider.currentIndex);
};

// function updateSlider(currentIndex) {
//   sliderImg.src = slides[currentIndex].src;
//   sliderImg.alt = slides[currentIndex].alt;
// }
