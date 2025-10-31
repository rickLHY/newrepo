window.addEventListener('scroll', function() {
  const header = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const menuBtn = document.getElementById('menuIcon');
const menu = document.querySelector('.nav-links')

menuBtn.addEventListener('click', ()=>{
  open = !open;
  if(open){
    menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    menu.classList.add('show');
    document.body.classList.add('no-scroll');
  }
  else{
    menuBtn.innerHTML =  '<i class="fas fa-bars"></i>';
    menu.classList.remove('show');
    document.body.classList.remove('no-scroll')
  }

});