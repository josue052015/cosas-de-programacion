window.addEventListener('scroll',function(){
    let animacion = document.getElementById('animado');
    let posicion = animacion.getBoundingClientRect().top
    console.log(posicion);
    let tamañopantalla = window.innerHeight/3;
    if(posicion < tamañopantalla){
        animacion.style.animation = 'mover 1s ease-out'
        animacion.style.opacity = 100
    }
    if(posicion > tamañopantalla){
      /*  animacion.style.animation = 'mover 1s ease-out'*/
        animacion.style.opacity = 0
    }
})