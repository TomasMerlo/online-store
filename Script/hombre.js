
let botonropas = document.querySelector("#boton-ropa");
botonropas.addEventListener("click", function () {
  let sku3 = document.querySelector("#catropa");
  sku3.classList.toggle("dalee");
})

let botonremeras = document.querySelector("#boton-remeras");
botonremeras.addEventListener("click", function () {
  let sku4 = document.querySelector("#remesmostrar");
  sku4.classList.toggle("mostrarremes");
})

let botonpant = document.querySelector("#boton-pant");
botonpant.addEventListener("click", function () {
  let sku5 = document.querySelector("#mostrarpant");
  sku5.classList.toggle("pantmostrar");
})

let botoncamperas = document.querySelector("#boton-camp");
botoncamperas.addEventListener("click", function () {
  let sku6 = document.querySelector("#mostrarcamperas");
  sku6.classList.toggle("campmostrar");
})

let botonzapas = document.querySelector("#boton-calzado");
botonzapas.addEventListener("click", function () {
  let sku3 = document.querySelector("#cattextiles");
  sku3.classList.toggle("shoes");
})

let botontillas = document.querySelector("#boton-tillas");
botontillas.addEventListener("click", function () {
  let sku10 = document.querySelector("#mostrarzapas");
  sku10.classList.toggle("zapmostrar");
})
let botonsanda = document.querySelector("#botonsandalias");
botonsanda.addEventListener("click", function () {
  let sku11 = document.querySelector("#sandmostrar");
  sku11.classList.toggle("mostrarsand");
})

let botonbotass = document.querySelector("#botonbotas");
botonbotass.addEventListener("click", function () {
  let sku12 = document.querySelector("#mostrarbotas");
  sku12.classList.toggle("botasmostrar");
})



let botonaccesorios = document.querySelector("#boton-accesorios");
botonaccesorios.addEventListener("click", function () {
 let sku3 = document.querySelector("#cataccesorios");
  sku3.classList.toggle("accesorios");
})







var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}