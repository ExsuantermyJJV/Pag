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

