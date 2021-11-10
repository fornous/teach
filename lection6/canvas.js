function degToRad(angle) {
    return angle * (Math.PI / 180.0);
}

function drawCircle(ctx, sx, sy, radius) {

    ctx.beginPath();
    ctx.moveTo(sx + radius, sy);

    for (var angle = 0; angle < 360; angle++) {
        x = sx + Math.cos(degToRad(angle)) * radius;
        y = sy + Math.sin(degToRad(angle)) * radius;
        ctx.lineTo(x, y);
    }

    ctx.fill();
}

var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgb(200, 0, 0)';
// ctx.fillRect(10, 10, 50, 50);

// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
// ctx.fillRect(30, 30, 50, 50);

drawCircle(ctx, 200, 200, 150);