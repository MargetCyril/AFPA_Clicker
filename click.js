let code = 0
let autocodeur = 0
let maitrise = 0
let maitrisecheck = 0

function add(nombre) {
    for (let i=0; i <nombre ; i++) {
        code++;
    }
}

windows.setinterval(function() {

    add(autocodeur)
    maitriser()
    document.getElementById("clickcount").innerHTML = "code: " + code;
    document.getElementById("maitrise").innerHTML = "maitrise "+ maitrise;
},1000)

function addautocode() {
    autocodeur++
    document.getElementById("autocodeur").innerHTML = "autocodeur" + autocodeur;

}

function maitriser() {
    if (code >100 && maitrisecheck ==0) {
        maitrise++; maitrisecheck ++;
    }
}
