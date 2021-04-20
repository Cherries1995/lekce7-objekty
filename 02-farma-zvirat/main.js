/*

let krava = {
    jmeno: 'Kravicka',
    foto: 'obrazky/krava.jpg'
};

let ovecka = {
    jmeno: 'Ovecka',
    foto: 'obrazky/ovce.jpg'
};

// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

    //let zvire =

    let zvire = document.createElement('div');
    zvire.className = 'zvire'; //máme v CSS


// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.
    let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto' //máme v CSS
    fotoZvirete.src = krava.foto  //vezmeme ze začátku objektu krava
    //let fotoZvirete =


    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.
    //let jmenoZvirete =
    let jmenoZvirete = document.createElement('spna');
    jmenoZvirete.className = 'jmeno'
    jmenoZvirete.innerHTML = krava.jmeno;

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)
    zvire.appendChild(fotoZvirete); 
    zvire.appendChild(jmenoZvirete);

    //TODO máme připravený virtuální element

// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

  //let farma =
  let farma = document.querySelector('.farma');
  farma.appendChild(zvire);
*/


// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?
let poleZvirat = [
    {jmeno: 'Kravicka', foto: 'obrazky/krava.jpg'},
    {jmeno: 'Ovecka', foto: 'obrazky/ovce.jpg'},
    {jmeno: 'Husa', foto: 'obrazky/husa.jpg'},
    {jmeno: 'Kočička', foto: 'obrazky/kocka.jpg'},
    {jmeno: 'Kůň', foto: 'obrazky/kun.jpg'},
    {jmeno: 'Pes', foto: 'obrazky/pes.jpg'},
]

poleZvirat.forEach(pridejFoto)
function pridejFoto(zvirata) {
    // Vytvor obrazek zviratka krava s fotkou a popiskem.

    // 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

    //let zvire =

    let zvire = document.createElement('div');
    zvire.className = 'zvire'; //máme v CSS


    // 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.
    let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto' //máme v CSS
    fotoZvirete.src = zvirata.foto  //vezmeme ze začátku objektu krava
    //let fotoZvirete =


    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.
    //let jmenoZvirete =
    let jmenoZvirete = document.createElement('spna');
    jmenoZvirete.className = 'jmeno'
    jmenoZvirete.innerHTML = zvirata.jmeno;

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)
    zvire.appendChild(fotoZvirete); 
    zvire.appendChild(jmenoZvirete);

    //TODO máme připravený virtuální element

    // 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
    // a vloz do nej obalujici element zvire (pssst appendChild)

  //let farma =
  let farma = document.querySelector('.farma');
  farma.appendChild(zvire);

}