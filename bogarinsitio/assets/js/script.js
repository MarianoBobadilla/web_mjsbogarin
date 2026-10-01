document.addEventListener("DOMContentLoaded",function(){
const menuToggle=document.getElementById("menuToggle");
const navbar=document.getElementById("navbar");
if(menuToggle&&navbar)menuToggle.addEventListener("click",function(){navbar.classList.toggle("active")});
const slides=document.querySelectorAll(".hero-slide");
const indicators=document.querySelectorAll(".hero-indicator");
const prev=document.getElementById("heroPrev");
const next=document.getElementById("heroNext");
if(!slides.length)return;
let actual=0;
let tiempo;
function mostrar(n){
slides.forEach(function(slide){slide.classList.remove("active")});
indicators.forEach(function(ind){ind.classList.remove("active")});
actual=(n+slides.length)%slides.length;
slides[actual].classList.add("active");
if(indicators[actual])indicators[actual].classList.add("active");
}
function iniciar(){
clearInterval(tiempo);
tiempo=setInterval(function(){mostrar(actual+1)},5000);
}
if(next)next.addEventListener("click",function(){mostrar(actual+1);iniciar()});
if(prev)prev.addEventListener("click",function(){mostrar(actual-1);iniciar()});
indicators.forEach(function(ind,index){ind.addEventListener("click",function(){mostrar(index);iniciar()})});
mostrar(0);
iniciar();
});
document.addEventListener("DOMContentLoaded",function(){const f=document.getElementById("contactForm");if(f)f.addEventListener("submit",function(e){e.preventDefault();const n=document.getElementById("nombre").value.trim(),m=document.getElementById("email").value.trim(),t=document.getElementById("mensaje").value.trim();location.href="mailto:info@institucion.edu.py?subject="+encodeURIComponent("Consulta desde el sitio web - "+n)+"&body="+encodeURIComponent("Nombre: "+n+"\nCorreo: "+m+"\n\nMensaje:\n"+t)})});
