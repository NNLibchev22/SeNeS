document.addEventListener("DOMContentLoaded", () => {
    console.log("loads");

    const imageList = document.querySelector(".bio-items");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentPosition = 0;
    const step = 25; 
    const maxLeftPosition = 0; 
    const maxRightPosition = -25;

    prevButton.addEventListener("click", () => {
        console.log("loads - prev button clicked");
        if (currentPosition < maxLeftPosition) {
            currentPosition += step;
            currentPosition = Math.min(currentPosition, maxLeftPosition);
            imageList.style.transition = "transform 0.3s ease-in-out";
            imageList.style.transform = `translateX(${currentPosition}%)`;
        }
    });

    nextButton.addEventListener("click", () => {
        console.log("loads - next button clicked");
        if (currentPosition > maxRightPosition) {
            currentPosition -= step;
            currentPosition = Math.max(currentPosition, maxRightPosition);
            imageList.style.transition = "transform 0.3s ease-in-out";
            imageList.style.transform = `translateX(${currentPosition}%)`;
        }
    });
});

