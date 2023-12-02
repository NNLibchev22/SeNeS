const initSlider = () => {
    const imageList = document.querySelector(".bio-items");
    const slideButtons = document.querySelectorAll(".bio-items #buttons");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"})
        })
    })
}

window.addEventListener("load", initSlider)