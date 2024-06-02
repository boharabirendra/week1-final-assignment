document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("upper__container__navbar__right__toggle__input");
    const body = document.body;
    modeToggle.addEventListener('change', () => {
        body.classList.toggle('dark__mode');
        toggleIconColors(body.classList.contains("dark__mode"));
    });

    function toggleIconColors(isDarkMode) {
        const searchIcon = document.querySelector("#upper__container__navbar__right__item__search");
        const cartIcon = document.querySelector("#upper__container__navbar__right__item__cart");
        const scrollIcon = document.querySelector("#upper__container__bottom__left__scrollbtn");
        const hamburgerIcon = document.querySelector("#upper__container__navbar__left__hamburger");
        if (isDarkMode) {
            searchIcon.style.filter = 'brightness(0) invert(1)';
            cartIcon.style.filter = 'brightness(0) invert(1)';
            scrollIcon.style.filter = 'brightness(0) invert(1)';
            hamburgerIcon.style.filter = 'brightness(0) invert(1)';

        } else {
            searchIcon.style.filter = 'none';
            cartIcon.style.filter = 'none';
            scrollIcon.style.filter = 'none';
            hamburgerIcon.style.filter = 'none';
        }
    }
})