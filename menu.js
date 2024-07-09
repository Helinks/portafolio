const nav = document.querySelector('.nav');
const logo = document.getElementById('logo')

  window.addEventListener('scroll', function(){
    if(window.scrollY >0){
        nav.classList.add('active');
        logo.src ="img/Icon.png";
    }else{
        nav.classList.remove('active');
        logo.src = 'img/Logo.png';
    }
        
  })