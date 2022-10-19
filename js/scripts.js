const btnMenu = document.querySelector('button#menu-button') ;


function toggleMenu(){
    const nav = document.querySelector('nav#nav');
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu);