let code = 0
let autocodeur = 0
let maitrise = 0
let maitrisecheck = 0
let bugs = 0
let heure = 0

function add(nombre) {
    for (let i=0; i <nombre ; i++) {
        code++;
        let s =Math.random(100);
        console.log(s);
        if (s<0.25) {bugs++}
    }
}

function bug(nombre) {
    for (let i=0; i<nombre; i++) {
        bugs--;
    }
}

window.setInterval(function() {

    add(autocodeur)
    maitriser()
    document.getElementById("clickcount").innerHTML = "code: " + code;
    document.getElementById("maitrise").innerHTML = "maitrise "+ maitrise;
    document.getElementById("bugcount").innerHTML = "bug "+ bugs;
},100)

function addautocode() {
    autocodeur++
    document.getElementById("autocodeur").innerHTML = "autocodeur " + autocodeur;

}

function maitriser() {
    if (code >100 && maitrisecheck ==0) {
        maitrise++; maitrisecheck ++;
    }
}
