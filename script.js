const navbarToggle = document.querySelector(".nav-toggle");
const navItem = document.querySelector(".nav-item");

const navbarToggleFun = () => {
    navbarToggle.classList.toggle('active');
    navItem.classList.toggle('active');
}

navbarToggle.addEventListener('click', navbarToggleFun);