const vietos = document.querySelector('ul');

const button1 = document.querySelector('#rodyti');
button1.addEventListener('click', RodykFoto)

const button2 = document.querySelector('#maisyti');
button2.addEventListener('click', MaisykFoto)

let foto = ['Overlay', 'Overlay1', 'Overlay2', 'Overlay3', 'Overlay4', 'Overlay5', 'team1', 'team2', 'team3', 'team4' ];

function RodykFoto() {

    for (let i = 0; i < foto.length; i++) {

        const vieta = document.createElement('li');
        const fotos = document.createElement("img");
        fotos.src='img/'+foto[i]+'.png';
        vietos.appendChild(vieta);
        vieta.appendChild(fotos);

    }


}
function displayNone() {
    let x = document.getElementById("rodyti");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
function MaisykFoto() {

    // foto.sort();
    // for (let i = 0; i < foto.length; i++) {
    //     console.log(foto[i])
    // }

    foto.reverse();
    for (let i = 0; i < foto.length; i++) {
        console.log(foto[i])
    }
    
}