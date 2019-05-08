$(function () {
    $("#menu").tabs();
});

var velika = document.getElementById('velika');
var mala = document.getElementsByClassName('mala');

for (var i = 0; i < mala.length; i++) {
    mala[i].addEventListener('click', uvecaj);
}
function uvecaj() {
    var odabrana = this.getAttribute('src');
    velika.setAttribute('src', odabrana);
}

class Takmicar {
    constructor(ime, prezime, pol, godiste, tezina, klub) {

        this.ime = ime;
        this.prezime = prezime;
        this.pol = pol;
        this.godiste = godiste;
        this.tezina = tezina;
        this.klub = klub;

    }
    toString() {
        return this.ime + ' ' + this.prezime + ' ' + this.pol + ' ' + this.godiste + ' ' + this.tezina + ' ' + this.klub;
    }

    
}


const upisaniTakmicari = Array.of(
    new Takmicar('Miloš', 'Bukvić', 'Muško', 1987, 95, 'REDHIT'),
    new Takmicar('Pavle', 'Trajković', 'Muško', 2001, 60, 'REDHIT'),
    new Takmicar('Miloš', 'Lazarević', 'Muško', 1992, 80, 'KALUĐERI'),
    new Takmicar('Stefan', 'Savić', 'Muško', 2009, 45, 'BAK'),
    new Takmicar('Tara', 'Trajković', 'Žensko', 2008, 33, 'BAK'),
    new Takmicar('Boško', 'Babić', 'Muško', 1999, 72, 'KALUĐERI'),
    new Takmicar('Aleksandara', 'Mišković', 'Žensko', 2000, 55, 'HILL'),
    new Takmicar('Katarina', 'Novakovic', 'Žensko', 1998, 60, 'BAK'),
    new Takmicar('Petar', 'Lazic', 'Muško', 2005, 50, 'KK BEOGRAD'),
    new Takmicar('Lazar', 'Mirkov', 'Muško', 2000, 55, 'KK BEOGRAD')
);


let item = '<table class="table table-striped"><tr><th>Ime</th><th>Prezime</th><th>Pol</th><th>Godiste</th><th>Tezina</th><th>Klub</th></tr>';
let tablica = upisaniTakmicari.forEach(element => {
    
        item += `<tr><td>${element.ime}</td>` +
            `<td>${element.prezime}</td>` +
            `<td>${element.pol}</td>` +
            `<td>${element.godiste}</td>` +
            `<td>${element.tezina}</td>` +
            `<td>${element.klub}</td>`

 
});
item += '</table>';
document.getElementById('tabelica').innerHTML = item;

const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const pol = document.getElementById('pol');
const godiste = document.getElementById('godiste');
const tezina = document.getElementById('tezina');
const klub = document.getElementById('klub');


function novaPrijava() {   
    const noviTakmicar = new Takmicar (ime.value, prezime.value, pol.value, godiste.value, tezina.value, klub.value);
    upisaniTakmicari.unshift(noviTakmicar);
   

    ime.value = ''; 
    prezime.value = '';
    pol.value = '';
    godiste.value = '';
    tezina.value = '';
    klub.value = ''; 
    
 
    upisTabela()
    upis();
    alert("Takmičar je uspešno prijavljen!");
    
  
  
};

// funkcija za ispis u tabeli
const upisTabela = () => {
//$('#tabelica').empty();
    let item = '<table class="table"><tr><th>Ime</th><th>Prezime</th><th>Pol</th><th>Godiste</th><th>Tezina</th><th>Klub</th></tr>';
    upisaniTakmicari.forEach(takmicar => { 
        item += `<tr><td>${takmicar.ime}</td>` +
        `<td>${takmicar.prezime}</td>` +
        `<td>${takmicar.pol}</td>` +
        `<td>${takmicar.godiste}</td>` +
        `<td>${takmicar.tezina}</td>` +
        `<td>${takmicar.klub}</td></tr>`
    });
    item += '</table>';
    document.getElementById('tabelica').innerHTML = item;
    

   
};

upisTabela()

ime.value = ''; 
    prezime.value = '';
    pol.value = '';
    godiste.value = '';
    tezina.value = '';
    klub.value = ''; 

function poImenu() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelica");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function poPrezimenu() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelica");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function poPolu() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput3");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelica");
    tr = table.getElementsByTagName("tr");


    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function poGodistu() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput4");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelica");
    tr = table.getElementsByTagName("tr");


    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function poTezini() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput5");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelica");
    tr = table.getElementsByTagName("tr");


    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function poKlubu() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput6");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelica");
    tr = table.getElementsByTagName("tr");


    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}




var modal = document.getElementById('myModal');


var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2')
var img3 = document.getElementById('myImg3')
var img4 = document.getElementById('myImg4')
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}

function prijava () {
    
}

 
 var modal1 = document.getElementById('myModal1');
 var btn1 = document.getElementById("myBtn1");
 var span1 = document.getElementsByClassName("close1")[0];
 
 btn1.onclick = function () {
     modal1.style.display = "block";
 }

  span1.onclick = function () {
     modal1.style.display = "none";
 }

 
 window.onclick = function (event) {
     if (event.target == modal1) {
         modal.style.display = "none";
     }
 }
 function upis() {
 let upisServer = JSON.stringify(upisaniTakmicari);
 localStorage.setItem('upisaniTakmicari', JSON.stringify(upisServer));
 } 

 const kontaktIme = document.getElementById('name');
 const kontakEmail = document.getElementById('email');
 const kontaktPoruka = document.getElementById('subject');
 
 function upisKontakt() {
    const kontaktInfo = [kontaktIme.value, kontakEmail.value, kontaktPoruka.value];
    let porukaServer = JSON.stringify(kontaktInfo);
    localStorage.setItem('kontaktinfo', JSON.stringify(porukaServer));
} 

