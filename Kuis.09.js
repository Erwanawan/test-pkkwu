var canvas = document.getElementById("GL_Canvas");
        
var ctx = canvas.getContext("2d");

var ball = {
x: 200,
y: 200,
vx: 20,
vy: 20,
radius: 50,

//warna bola
color: 'aqua',


draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    }
};

var raf;

function drawBall() {


    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy



    //mengecek posisi x dari bola
    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx <0) {
        ball.vx = -ball.vx;
    }

    //mengecek posisi y dari bola
    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy <0) {
        ball.vy = -ball.vy;
    }

    raf = window.requestAnimationFrame(drawBall);
}

var running = false;


canvas.addEventListener('click', function(e) {
    if (!running) {
        raf = window.requestAnimationFrame(drawBall);

        running = true;
    }
});


canvas.addEventListener('mousemove', function(e) {
    if (!running) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ball.x = e.clientX;

        ball.y = e.clientY;

        ball.draw() ;
    }
})


canvas.addEventListener('mouseout', function(e) {
    window.cancelAnimationFrame(drawBall);

    running = false;
});

ball.draw();