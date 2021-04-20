// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
    znacka: 'Ford',
    barva: 'Modrá',
    rokVyroby: 2015,
    spz: 123456,
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
//! dej pozor musím přidadit hodnotu jako takovou skrz tečkovou notaci, nemužu si dovolit udělat auto.majitel.jmeno = 'Jana' toto nefunguje!
//TODOudělam novou vlasnost majitel
auto.majitel = {};
auto.majitel.jmeno = 'Jana';
auto.majitel.prijmeni = 'Czechita';


// Přepiš značku na Škoda
auto['znacka'] = 'Škoda';
console.log(auto)

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
//TODO mohu použít constantu protože to už nebudu měnit

//majitelka:
const majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni;
//TODO budu to vkladat do spanu majitelka
document.querySelector('#majitelka').innerHTML = majitelka;

//znacka:

const znacka = auto.znacka;
document.querySelector('#znacka').innerHTML = znacka

//spz:
//TODO musím dodat vlastnost spz bud to tam přidám do toho základního objektu nebo ji přidám  po cestě
const spz = auto.spz;
document.querySelector('#spz').innerHTML = spz;