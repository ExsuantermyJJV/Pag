let cabAcordeon = document.getElementsByClassName("cabAcordeon");
let contenido = document.getElementsByClassName("contenido");
let circulo = document.getElementsByClassName("circulo");


for (let i = 0; i < cabAcordeon.length; i++) {
    cabAcordeon[i].addEventListener("click", function () {
        contenido[i].classList.toggle("animacionContenido");
        let alturaContenido = contenido[i].clientHeight;
        if (alturaContenido > 0) {//ff2f2fcb
            circulo[i].style.backgroundColor = "#00d9ff";
        }else {
            circulo[i].style.backgroundColor = "#00d9ff"; 
        }
    });
}


var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});

/* animate */

const $pelota = document.getElementById('pelota');
const animation = $pelota.animate([
   {
  transform: 'translateX(0)'
  },
  {
    transform: 'translateY(100px)'
  }
]
,{ marigin:0,
  duration: 1000,
  direction: 'alternate-reverse',
  easing: 'linear',
  iterations: 8,
  fill: 'forwards',
})

const $playButton = document.getElementById('play');
const $pauseButton = document.getElementById('pause');

$playButton.addEventListener('click', (event) => {
  animation.play();
})
$pauseButton.addEventListener('click', (event) => {
  animation.pause();
})


/* spider */

const $spi = document.getElementById('spi');
const animation1 = $spi.animate(  
  [
 {
   transform: 'translate(-10px) rotate(10deg) '
   }
     
 ],
 
 { 
  duration: 1000,
  direction: 'alternate-reverse',
  easing: 'linear',
  iterations: 9,
  fill: 'forwards',
  interationStart: .5, 
})

const $play1Button = document.getElementById('play1');
const $pause1Button = document.getElementById('pause1');

$play1Button.addEventListener('click', (event) => {
  animation1.play();
})
$pause1Button.addEventListener('click', (event) => {
  animation1.pause();
})



/* run */

