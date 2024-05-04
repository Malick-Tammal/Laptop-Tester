/*------ Setting up variables ------*/
const runDisTest = document.querySelector(".run-dis-test");
const startDisTest = document.querySelector(".start-test");
const displayTest = document.querySelector(".display-test");
const disTestCol2 = document.querySelector(".dis-test-container .col-2");
const page2 = document.querySelector(".page-2");
const page1 = document.querySelector(".page-1");
const backBtn = document.querySelector(".back");

const track = document.querySelector(".track");
const slides = Array.from(track.children);
const tests = document.querySelectorAll(".test");

/*------ Showing on click how to navigate display tester ------*/
runDisTest.addEventListener("click", () => {
  disTestCol2.classList.add("show");
  page2.classList.add("show");
  page1.classList.add("hide");
});

/*------ On click start test get the app on fullscreen and show the test div ------*/
startDisTest.addEventListener("click", () => {
  ipc.send("get_fullscreen");
  displayTest.classList.add("active");

  /*------ Adding keyboard escape to exit the test ------*/
  document.addEventListener("keydown", (e) => {
    if (displayTest.className.includes("active")) {
      if (e.code === "Escape") {
        ipc.send("restore_screen");
        displayTest.classList.remove("active");
      }
    }
  });
  setTimeout(() => {
    const slideHeight = slides[0].getBoundingClientRect().height;
    const setSlidePosition = (slide, index) => {
      slide.style.top = slideHeight * index + "px";
    };
    slides.forEach(setSlidePosition);
  }, 20);
});

/*------ Adding back button ------*/
backBtn.addEventListener("click", () => {
  page2.classList.remove("show");
  page1.classList.remove("hide");
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  if (track === null || currentSlide === null || targetSlide === null) {
    /*-- just stoping error message --*/
  } else {
    track.style.transform = `translateY(-${targetSlide.style.top})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  }
};

/*------ Adding keyboard arrows to navigate through the tests ------*/
document.addEventListener("keydown", (e) => {
  if (displayTest.className.includes("active")) {
    if (e.code === "ArrowDown") {
      const currentSlide = displayTest.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;

      moveToSlide(track, currentSlide, nextSlide);
    }
    if (e.code === "ArrowUp") {
      const currentSlide = displayTest.querySelector(".current-slide");
      const prevtSlide = currentSlide.previousElementSibling;

      moveToSlide(track, currentSlide, prevtSlide);
    }
  }
});
