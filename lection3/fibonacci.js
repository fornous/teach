var fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

function generateFibonnaci(length) {
    var last = current = 1;

    fibonacci = [last,current];

    for (var i = 2; i < length; i++) {
        value = last + current;
        last = current;
        current = value;
        fibonacci.push(value);
    }
    
    return fibonacci;
}

function vypisPole(pole) {
    for (var i = 0; i < pole.length; i++)
        console.log(pole[i]);
}

vypisPole(generateFibonnaci(10));