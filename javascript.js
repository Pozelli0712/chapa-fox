let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

var dataFutura = new Date("November 22, 2022 12:00").getTime();
console.log(dataFutura);

var dias, horas, minutos, segundos;


setInterval(function(){
    var dataAtual = new Date().getTime();
   function setValores(e) {
    return document.getElementById(e);
   }
    var segundosTotal = (dataFutura - dataAtual)/1000;
   
    
    dias = parseInt(segundosTotal/86400);
    segundosTotal = segundosTotal%86400;
   
    horas = parseInt(segundosTotal/3600);
    segundosTotal = segundosTotal%3600

    minutos = parseInt(segundosTotal/60);
    segundos = parseInt(segundosTotal%60)
    console.log(dias, horas, minutos, segundos)

    setValores("dias").innerHTML = dias + "D";
    setValores("horas").innerHTML = horas + "H";
    setValores("minutos").innerHTML = minutos + "M";
    setValores("segundos").innerHTML = segundos + "S";
},1000);

const slider = tns({
	container:'.my-slider',
	loop:true,
    margin: 30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
