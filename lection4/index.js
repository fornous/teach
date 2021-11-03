function process(text, count) {

    var seznamSlov = rozdelNaSlova(text);

    var mapaSlov = mapujUnikatniSlova(seznamSlov);

    var serazenaMapaSlov = seradMapuSlov(mapaSlov);

    var vysledek = vemPrvnichXSlov(serazenaMapaSlov, pocet);

    return vysledek;
}

function rozdelNaSlova(text) {

    return text.split(" ");
}