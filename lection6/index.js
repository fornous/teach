var fields1 = [0,0,0,0,0,0];
var fields2 = [0,0,0,0,0,0];
var player = 1;
var maxLevel = 9;

function resetFields(fields) {
    for (var i = 0; i < fields.length; i++)
        fields[i] = 0;
}

function resetPlayer(player) {
    player = 1;
}

function isCannon(fields,fieldIndex) {
    if (fields[fieldIndex] == maxLevel)
        return true;
    else
        return false;
}

function addLevel(fields,fieldIndex) {
    fields[fieldIndex]++;
}

function canDestroyField(fields,fieldIndex) {
    if (fields[fieldIndex] == null)
        return false;
    else
        return true;
}

function isDestroyed(fields, fieldIndex) {
    if (fields[fieldIndex] == null)
        return true;
    else
        return false;
}

function destroyField(fields,fieldIndex) {
    fields[fieldIndex] = null;
}

function nextPlayer(player) {
    if (player == 1)
        return 2;
    else
        return 1;
}

function throwDice() {
    return Math.ceil(Math.random() * 6) - 1;
}

function move(fields1,fields2,player) {
    if (player == 1) {
        var fields = fields1;
        var enemyFields = fields2;
    } else {
        var fields = fields2;
        var enemyFields = fields1;
    }

    // hod kostkou
    var fieldIndex = throwDice();

    // je policko znicene
    if (isDestroyed(fields,fieldIndex))
        return;

    // je to lod s kanonem
    if (isCannon(fields,fieldIndex)) {
        var targetIndex = throwDice();
        if (isDestroyed(enemyFields,targetIndex))
            return;
        destroyField(enemyFields, targetIndex);
    } else {
        addLevel(fields,fieldIndex);
    }
}

function onStart() {
    resetFields(fields1);
    resetFields(fields2);
    resetPlayer(player);
    drawState(fields1,fields2,player);
}

function onMove() {
    move(fields1,fields2,player);
    player = nextPlayer(player);
    drawState(fields1,fields2,player);
}

function drawState(fields1,fields2,player) {
    var text = '';
    text += drawFields(fields1) + "\n";
    text += drawFields(fields2) + "\n";
    text += drawPlayer(player) + "\n";
    document.querySelector(".display").innerHTML = text;

}

function drawFields(fields) {
    var text = '';
    for (var i = 0; i < fields.length; i++) {
        if (fields[i] == null)
            text += 'x';
        else
            text += fields[i];
    }
    return text;
}

function drawPlayer(player) {
    var text = player;
    
    return text;
}