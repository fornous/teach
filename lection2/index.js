function show(pole) {
    for (var i = 0; i < pole.length; i++)
        console.log(pole[i]);
}

function filter(pole, slovo) {
    var novePole = [];
    for (var i = 0; i < pole.length; i++)
        if (pole[i].indexOf(slovo))
            novePole.push(pole[i]);

    return novePole;
}

var pole = ['jinovatka', 'zmije', 'astronautka', 'tkanina', 'slotka'];

show(filter(pole, 'tka'));