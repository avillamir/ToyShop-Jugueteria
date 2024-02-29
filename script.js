

let icons = document.querySelectorAll(".navigation .icon");
let activeIcon = null; // Variable para rastrear el icono activo
let clicks = 0; // Variable para rastrear los clics en el icono

function activateIcon(e) {
  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
  const clickedIcon = e.currentTarget;

  if (clickedIcon === activeIcon) {
    // Si se hace clic en el mismo icono
    clicks++;

    if (clicks === 2) {
      // Después del segundo clic en el mismo icono
      clicks = 0; // Reinicia el contador
      // Agrega aquí el código para redirigir o realizar alguna otra acción
      // Por ejemplo, redirige a la URL del enlace del icono
      const link = clickedIcon.parentElement.getAttribute("href");
      window.location.href = link;
    }
  } else {
    // Si se hace clic en un icono diferente
    activeIcon = clickedIcon;
    clicks = 1; // Reinicia el contador
  }
}

icons.forEach((icon) => {
  icon.addEventListener("click", activateIcon);
});



let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));



/*********************************************************** */

  //toggle 
  const menutoggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
  }

  
    //slider
    const slides = document.querySelectorAll('.slides');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    i = 0;
    
    function ActiveSlide(n){
      for(slide of slides)
      slide.classList.remove('active');
      slides[n].classList.add('active');
    }

    // function for next btn
    next.addEventListener('click', function(){
      if(i == slides.length - 1){
        i = 0;
        ActiveSlide(i);
      }
      else 
      {
        i++;
        ActiveSlide(i);
      }
    })

     // function for prev btn
     prev.addEventListener('click', function(){
      if(i == 0){
        i = slides.length - 1;
        ActiveSlide(i);
      }
      else 
      {
        i--;
        ActiveSlide(i);
      }
    })

