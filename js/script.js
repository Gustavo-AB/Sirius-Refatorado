
const mobileButton = document.querySelector('button.mobile-button');
const navbar = document.querySelector('header.container nav ul');
const img = document.querySelector('button.mobile-button img');

mobileButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
  img.classList.toggle('ba')
  img.src = "./static/assets/icons/x.png"
  
  if(img.className == ''){
    img.src = "./static/assets/icons/menu.png"
  }
});
