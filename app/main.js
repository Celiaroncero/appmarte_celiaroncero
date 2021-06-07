window.addEventListener('load', () => {
    setInterval(getTime, 1000);
    startTime()
    checkTime()
});



function startTime() {
    let hoy = new Date();
    let horas = hoy.getHours();
    let min = hoy.getMinutes();
    let sec = hoy.getSeconds();
    ap = (horas < 12);
    horas = (horas == 0) ? 12 : horas;
    horas = (horas > 12) ? horas - 12 : horas;


    horas = checkTime(horas);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("hora").innerHTML = horas + ":" + min + ":" + sec + " ";


    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'];
    let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
    let fechaDiaSemana = dias[hoy.getDay()];
    let fechaDia = hoy.getDate();
    let fechaMes = months[hoy.getMonth()];
    let fechaAño = hoy.getFullYear();
    let date = fechaDiaSemana+", "+fechaDia+" "+fechaMes+" "+fechaAño;
    document.getElementById("fecha").innerHTML = date;
    
    let time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTime(){
	const secondHand = document.querySelector('.manecillaSeg');
	const minuteHand = document.querySelector('.manecillaMin');
	const hourHand = document.querySelector('.manecillaSeg');

	const now = new Date();
   
	/** SECONDS */
  	const seconds = now.getSeconds();
	/** Get seconds degrees from date */
  	const secondsDegrees = ((seconds / 60) * 360) + 90;
  
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	if (secondsDegrees === 90) {
		secondHand.style.transition = 'none';
	} else if (secondsDegrees >= 91) {
		secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
	}

   	/** MINUTES */
  	const minutes = now.getMinutes();
  	/** Get minutes degrees from date */
	const minutesDegrees = ((minutes / 60) * 360) + 90;
  	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
   
	/** HOURS */
  	const hours = now.getHours();
  	/** Get hours degrees from date */
  	const hoursDegrees = ((hours / 12) * 360) + 90;
  	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


window.addEventListener ( 'load', () => {
    fetch('https://mars-weather-rems.netlify.app/rems.json')
    .then(dat => dat .json())
    .then(dat => {

        /////// DATOS TEMPERATURA AIRE ////////
        let aireMinima = document.getElementById("aireminima");
        let itemOne= `${dat .weather_report.magnitudes[0].min_temp}ºC`   
        aireMinima.innerHTML += itemOne;

        let aireMaxima = document.getElementById("airemaxima");
        let itemTwo= `${dat .weather_report.magnitudes[0].max_temp}ºC`  
        aireMaxima.innerHTML += itemTwo;

        /////// DATOS PRESIÓN ////////
        let presionDato = document.getElementById("valorpresion");
        let itemThree= `${dat .weather_report.magnitudes[0].pressure}Pa`
        presionDato.innerHTML += itemThree;

         /////// DATOS TEMPERATURA SUELO ////////
        let sueloMinima = document.getElementById("suelominima");
        let itemFour= `${dat .weather_report.magnitudes[0].min_gts_temp}ºC`   
        sueloMinima.innerHTML += itemFour;

        let sueloMaxima = document.getElementById("suelomaxima");
        let itemFive= `${dat .weather_report.magnitudes[0].max_gts_temp}ºC`   
        sueloMaxima.innerHTML += itemFive;
    });   
});

   












