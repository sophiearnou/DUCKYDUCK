const topbarToggle = document.querySelector('.topbar__toggle');
const navList = document.querySelector('.nav__list');

topbarToggle.addEventListener('click', () => {
    navList.classList.toggle("show")
})