function relogio() {

    // var img = document.getElementById("Imagem")
    const espacoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    const formatoHora = horas.toString().padStart(2, "0");
    // const formatoHora = 10;

    const formatoMinutos = minutos.toString().padStart(2, "0");

    const formatoSegundos = segundos.toString().padStart(2, "0");
    // const formatoSegundos = 3

    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector('.frase')
    dia = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de${hoje.getFullYear()}`

    if (formatoSegundos > 0 && formatoSegundos < 2) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
        img.src = "https://cdn.pixabay.com/photo/2013/07/13/10/43/migratory-birds-157638_960_720.png"
    }

    else if (formatoSegundos > 2 && formatoSegundos < 4) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 4 && formatoSegundos < 6) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 6 && formatoSegundos < 8) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 8 && formatoSegundos < 10) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 10 && formatoSegundos < 12) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 12 && formatoSegundos < 14) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 14 && formatoSegundos < 16) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 16 && formatoSegundos < 18) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 18 && formatoSegundos < 20) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 20 && formatoSegundos < 22) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 22 && formatoSegundos < 24) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 24 && formatoSegundos < 26) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 26 && formatoSegundos < 28) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 28 && formatoSegundos < 30) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 30 && formatoSegundos < 32) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 32 && formatoSegundos < 34) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 34 && formatoSegundos < 36) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 36 && formatoSegundos < 38) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 38 && formatoSegundos < 40) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 40 && formatoSegundos < 42) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 42 && formatoSegundos < 44) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 44 && formatoSegundos < 46) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 46 && formatoSegundos < 48) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 48 && formatoSegundos < 50) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 50 && formatoSegundos < 52) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 52 && formatoSegundos < 54) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 54 && formatoSegundos < 56) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 56 && formatoSegundos < 58) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else if (formatoSegundos > 58 && formatoSegundos < 60) {
        document.querySelector(".relogio").style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }

    else {
        document.querySelector(".relogio").style.backgroundColor = 'red'
        document.body.style.color = 'white'
    }




    // código da aula do joão

    // if (formatoHora >= 00 && formatoHora < 12) {
    //     document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg)'
    //     document.body.style.backgroundSize = 'cover'
    //     document.body.style.backgroundRepeat = 'no-repeat'
    //     document.body.style.color = 'white'
    //     img.src = "https://cdn.pixabay.com/photo/2013/07/13/10/43/migratory-birds-157638_960_720.png"
    // }
    // else if (formatoHora >= 12 && formatoHora < 18) {
    //     document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2020/05/26/10/41/sunset-5222626_960_720.jpg)'
    //     document.body.style.backgroundSize = 'cover'
    //     document.body.style.backgroundRepeat = 'no-repeat'
    //     document.body.style.color = 'white'
    // }

    // else {
    //     document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg)'
    //     document.body.style.backgroundSize = 'cover'
    //     document.body.style.backgroundRepeat = 'no-repeat'
    //     document.body.style.color = 'white' 
    // }

}

setInterval(relogio, 1000)  