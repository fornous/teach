
/**
 * Funkce vraci negativni cislo k cislu vlozenemu do funkce
 * 
 * @param mixed parameter
 * 
 * @return [type]
 */
function mojeFunkce(parameter) {
    return -parameter;
}

// pouziti funkce mojeFunkce
console.log(mojeFunkce(4));

/**
 * Funkce soucet hodnot vsech prvku pole
 * 
 * @param mixed pole
 * 
 * @return [type]
 */
function soucetPole(pole) {
    var soucet = 0;
    for (var i = 0; i < pole.length; i++) {
        soucet = soucet + pole[i];
    }

    return soucet;
}

var pole = [1,2,3,4,5,6,7,8,9,10];

var soucet = soucetPole(pole); 