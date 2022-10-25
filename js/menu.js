const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');


btn.addEventListener('click', function () {

    if (menu.style.display === 'grid') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'grid';
    }
});


const controles = document.querySelectorAll(".hamburger-menu");

for (let elements of controles) {
    elements.onclick = function (e) {
        e.preventDefault();
        document.querySelector(".hamburger-menu").classList.toggle("hamburger-menu-open");
    }
}

window.addEventListener('resize', function () {
    //var altura = window.innerHeight;
    var win_width = window.innerWidth;

    if (win_width > 790) {
        menu.style.display = 'grid';
        document.querySelector(".hamburger-menu").classList.remove("hamburger-menu-open");
    } else {
        if (menu.style.display === 'none') {
            document.querySelector(".hamburger-menu").classList.remove("hamburger-menu-open");
        }
        if (menu.style.display === 'grid') {
            document.querySelector(".hamburger-menu").classList.add("hamburger-menu-open");
        }
    }
});