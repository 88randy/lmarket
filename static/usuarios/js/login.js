/* metodos de animacion de el formulario de registro*/
const slidePage = document.querySelector(".slidepage");
const firtNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const NextBtnSec = document.querySelector(".next-1");
const prevBtnThirt = document.querySelector(".prev-2");
const NextBtnThirt = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let max = 4;
let current = 1;

/* Funcionalidad de los botones click */


/* mueve hacia la derecha -> el formulario hacia parte 2 con condicion de comprobar las 2 contraseñas de confirmacion */
//

firtNextBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
/* mueve hacia la derecha -> el formulario hacia parte 3 */
NextBtnSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
/* mueve hacia la derecha -> el formulario hacia parte 4 */
NextBtnThirt.addEventListener("click", function() {
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
/* mueve hacia el envio */
submitBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
    setTimeout(function() {
        alert("gracias por registrarte");
        location.reload();
    }, 800)
});

/* mueve hacia la  <- izquierda el formulario hacia parte 1 */
prevBtnSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
/* mueve hacia la  <- izquierda el formulario hacia parte 2 */
prevBtnThirt.addEventListener("click", function() {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
/* mueve hacia la  <- izquierda el formulario hacia parte 3 */
prevBtnFourth.addEventListener("click", function() {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
/* Terminan la Funcionalidad de los botones click en el formulario */