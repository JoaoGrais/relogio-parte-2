function relogio() {

    var img = document.getElementById("Imagem")
    const espacoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    // const formatoHora = horas.toString().padStart(2, "0");
    const formatoHora = 10


    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector('.frase')
    dia = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de${hoje.getFullYear()}`

    if (formatoHora >= 00 && formatoHora < 12) {
        document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg)'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.color = 'white'
        img.src = "https://cdn.pixabay.com/photo/2013/07/13/10/43/migratory-birds-157638_960_720.png"
    }
    else if (formatoHora >= 12 && formatoHora < 18) {
        document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2020/05/26/10/41/sunset-5222626_960_720.jpg)'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.color = 'white'
    }

    else {
        document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg)'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.color = 'white' 
    }


    // if (formatoHora >= 00 && formatoHora < 12) {
    //     document.body.relogio.style.backgroundColor = 'rgb(108, 255, 3)'
    // }

    // if (formatoHora >= 12 && formatoHora < 18) {
    //         document.body.style.backgroundColor = ''
    //         document.body.style.color = 'white'
    // }

    // else {
    //     document.body.style.backgroundColor = ''
    //     document.body.style.backgroundSize = 'cover'
    //     document.body.style.backgroundRepeat = 'no-repeat'
    //     document.body.style.color = 'white'
    //  ideia de alternar de cor}

}

setInterval(relogio, 1000)
