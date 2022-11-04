


// PANOS FUNKTIOT-------------------------
function euro1(){
    document.getElementById("panos").innerHTML = "1";

    document.getElementById("omena").innerHTML = "2€"
    document.getElementById("kirsikka").innerHTML = "4€"
    document.getElementById("päärynä").innerHTML = "6€"
    document.getElementById("vesimeloni").innerHTML = "8€"
    document.getElementById("seven").innerHTML = "10€"
}
function euro2(){
    document.getElementById("panos").innerHTML = "2";

    document.getElementById("omena").innerHTML = "4€"
    document.getElementById("kirsikka").innerHTML = "6€"
    document.getElementById("päärynä").innerHTML = "8€"
    document.getElementById("vesimeloni").innerHTML = "10€"
    document.getElementById("seven").innerHTML = "12€"
}
function euro3(){
    document.getElementById("panos").innerHTML = "3";

    document.getElementById("omena").innerHTML = "6€"
    document.getElementById("kirsikka").innerHTML = "8€"
    document.getElementById("päärynä").innerHTML = "10€"
    document.getElementById("vesimeloni").innerHTML = "12€"
    document.getElementById("seven").innerHTML = "14€"
}
// --------------------------------------



// LUKITSE FUNKTIOT-----------------------
var lukittu1 = false
var lukittu2 = false
var lukittu3 = false
var lukittu4 = false

var lukittuvar1 = false
var lukittuvar2 = false
var lukittuvar3 = false
var lukittuvar4 = false


function lukitse1(id){
    if (lukittuvar1 == true) {

    } else {
        if (lukittu1 == false){
            id.src = "lukitsevihreä.png"
            lukittu1 = true
        } else {
            id.src = "lukitse.png"
            lukittu1 = false
        }
    }
}

function lukitse2(id){
    if (lukittuvar2 == true) {

    } else {
        if (lukittu2 == false){
            id.src = "lukitsevihreä.png"
            lukittu2 = true
        } else {
            id.src = "lukitse.png"
            lukittu2 = false
        }
    }   
}

function lukitse3(id){
    if (lukittuvar3 == true) {

    } else {
        if (lukittu3 == false){
            id.src = "lukitsevihreä.png"
            lukittu3 = true
        } else {
            id.src = "lukitse.png"
            lukittu3 = false
        }
    }
 
}

function lukitse4(id){
    if (lukittuvar4 == true) {

    } else {
        if (lukittu4 == false){
        id.src = "lukitsevihreä.png"
        lukittu4 = true
        } else {
            id.src = "lukitse.png"
            lukittu4 = false
        }
    }
}
// --------------------------------------

// PELAA FUNKTIOT

function pelaa(){

    if (lukittuvar1 === true){
        document.getElementById("lukitse1").src = "lukitse.png"
        lukittuvar1 = false
        lukittu1 = false
    }
    if (lukittuvar2 === true){
        document.getElementById("lukitse2").src = "lukitse.png"
        lukittuvar2 = false
        lukittu2 = false
    }
    if (lukittuvar3 === true){
        document.getElementById("lukitse3").src = "lukitse.png"
        lukittuvar3 = false
        lukittu3 = false
    }
    if (lukittuvar4 === true){
        document.getElementById("lukitse4").src = "lukitse.png"
        lukittuvar4 = false
        lukittu4 = false
    }

    var panos = parseInt(document.getElementById("panos").innerHTML)
    var rahaa = parseInt(document.getElementById("rahaa").innerHTML)
    
    

    // ONKO TARPEEKSI RAHAA?
    if (rahaa - panos < 0 || rahaa < panos){
        alert("Olet Köyhä")
    } else {
        document.getElementById("rahaa").innerHTML = (rahaa - panos)

    // --------------------------------------  

        var kuvaval1 = 1;
        var kuvaval2 = 2;
        var kuvaval3 = 3;
        var kuvaval4 = 4;


        var summa = parseInt(kuvaval1 + kuvaval2 + kuvaval3 + kuvaval4)
        // 1 = OMENA
        // 2 = KIRSIKKA
        // 3 = PÄÄRYNÄ
        // 4 = VESIMELONI
        // 5 = 7

        var kuvaval1 = Math.floor(Math.random() * 5) + 1;
        var kuvaval2 = Math.floor(Math.random() * 5) + 1;
        var kuvaval3 = Math.floor(Math.random() * 5) + 1;
        var kuvaval4 = Math.floor(Math.random() * 5) + 1;

        console.log(kuvaval1)

        var kuva1 = document.getElementById("kuva1")
        var kuva2 = document.getElementById("kuva2")
        var kuva3 = document.getElementById("kuva3")
        var kuva4 = document.getElementById("kuva4")

        // BOX 1
        if (lukittu1 == true){
            lukittuvar1 = true
        } else {
            if (kuvaval1 == 1){
                kuva1.src = "omena.png"
            } else if (kuvaval1 == 2){
                kuva1.src = "kirsikka.png"
            } else if (kuvaval1 == 3){
                kuva1.src = "päärynä.png"
            } else if (kuvaval1 == 4){
                kuva1.src = "vesimeloni.png"
            } else if (kuvaval1 == 5){
                kuva1.src = "seven.png"
            } 
        }
        // --------------------------------------


        // BOX 2
        if (lukittu2 == true){
            lukittuvar2 = true
        } else {
            if (kuvaval2 == 1){
                kuva2.src = "omena.png"
            } else if (kuvaval2 == 2){
                kuva2.src = "kirsikka.png"
            } else if (kuvaval2 == 3){
                kuva2.src = "päärynä.png"
            } else if (kuvaval2 == 4){
                kuva2.src = "vesimeloni.png"
            } else if (kuvaval2 == 5){
                kuva2.src = "seven.png"
            } 
        }
        // --------------------------------------

        // BOX 3
        if (lukittu3 == true){
            lukittuvar3 = true
        } else {
            if (kuvaval3 == 1){
                kuva3.src = "omena.png"
            } else if (kuvaval3 == 2){
                kuva3.src = "kirsikka.png"
            } else if (kuvaval3 == 3){
                kuva3.src = "päärynä.png"
            } else if (kuvaval3 == 4){
                kuva3.src = "vesimeloni.png"
            } else if (kuvaval3 == 5){
                kuva3.src = "seven.png"
            } 
        }
        // --------------------------------------

        // BOX 4
        if (lukittu4 == true){
            lukittuvar4 = true
        } else {
            if (kuvaval4 == 1){
                kuva4.src = "omena.png"
            } else if (kuvaval4 == 2){
                kuva4.src = "kirsikka.png"
            } else if (kuvaval4 == 3){
                kuva4.src = "päärynä.png"
            } else if (kuvaval4 == 4){
                kuva4.src = "vesimeloni.png"
            } else if (kuvaval4 == 5){
                kuva4.src = "seven.png"
            } 
        }
        // --------------------------------------



        if (lukittuvar1 == true){
            document.getElementById("lukitse1").src = "lukitsepunainen.png"
        }
        if (lukittuvar2 == true){
            document.getElementById("lukitse2").src = "lukitsepunainen.png"
        }
        if (lukittuvar3 == true){
            document.getElementById("lukitse3").src = "lukitsepunainen.png"
        }
        if (lukittuvar4 == true){
            document.getElementById("lukitse4").src = "lukitsepunainen.png"
        }

        // PALKINTO

        if (summa == 4){
            document.getElementById("rahaa").innerHTML  = (rahaa + 2 * panos)
        }
        if (summa == 8){
            document.getElementById("rahaa").innerHTML  = (rahaa + 4 * panos)
        }
        if (summa == 12){
            document.getElementById("rahaa").innerHTML  = (rahaa + 6 * panos)
        }
        if (summa == 16){
            document.getElementById("rahaa").innerHTML  = (rahaa + 8 * panos)
        }
        if (summa == 20){
            document.getElementById("rahaa").innerHTML  = (rahaa + 10 * panos)
        }
        // --------------------------------------
    }
}

// --------------------------------------