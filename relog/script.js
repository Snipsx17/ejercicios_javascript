const configDigi = numero => numero < 10 ? `0${numero}` : numero;

function setTime(){
    let actualDate = new Date;
    let hora = configDigi(actualDate.getHours());//hora
    let min = configDigi(actualDate.getMinutes());//minuto
    let seg = configDigi(actualDate.getSeconds());//segundo
    let day = actualDate.getDate();
    
    document.getElementById("hora").innerHTML = `${hora}:${min}:${seg}`;
    document.getElementById(day.toString()).classList.add("today");
    console.log(actualDate.getDate());

    let time = setTimeout(function() {//se ejecuta cada 500ml
        setTime();
    }, 500);
}
