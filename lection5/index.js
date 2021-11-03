
function writeText(text) {
    document.querySelector(".display").innerHTML = text;
}

function addText(text) {
    document.querySelector(".display").innerHTML += "\n" + text;
}

function clear() {
    document.querySelector(".display").innerHTML = "";
}

function toggleColor() {
    var classList = document.querySelector(".display").classList;

    if (classList.contains("warning"))
        document.querySelector(".display").classList.remove("warning");
    else
        document.querySelector(".display").classList.add("warning");
}

function onClick1() {
    writeText("Hello srabe");

    return false;
}

function onClick2() {
    addText("Pridano Hello srabe");

    return false;
}

function onClick3() {
    clear();

    return false;
}

function onClick4() {
    toggleColor();

    return false;
}

