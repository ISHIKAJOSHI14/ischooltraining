var canvas = document.getElementById('can');
can.width = 700;
can.height = 500;
var ctx = canvas.getContext('2d');


function star(i, j) {
    ctx.beginPath();
    ctx.moveTo(i + 36, j + 0.0);
    ctx.lineTo(i + 47, j+ 23.3);
    ctx.lineTo(i + 72.6, j+ 26.1);
    ctx.lineTo(i + 54, j+ 43.6);
    ctx.lineTo(i + 58.3, j+ 68.3);
    ctx.lineTo(i + 108/3, j+ 56.6);
    ctx.lineTo(i + 13.73, j+ 68.3);
    ctx.lineTo(i + 18.3, j+ 43.6);
    ctx.lineTo(i + 0.3, j + 26);
    ctx.lineTo(i + 25, j+ 22.6);
    ctx.lineTo(i + 36, j+ 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke()
}

function animation(){
    // ctx.clearRect(0,0,500,500);
    X = Math.round( Math.random() * 700 );
    Y = Math.round( Math.random() * 500 );
    //boxD = Math.round( Math.random() * 100 );
    var red = Math.round( Math.random() * 255 );
    var green = Math.round( Math.random() * 255 );
    var blue = Math.round( Math.random() * 255 );
    var alpha = 0.1;

    // ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.fillStyle = "rgba("+red+","+green+","+blue+","+alpha+")";
    star(X,Y);
    ctx.fill();
};


function message(){
    var name = document.getElementById('name').value;
    var bdate = document.getElementById('bdate').valueAsNumber;

    let now = new Date();
    let diff = Math.abs(now - bdate);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    
    let msg = `Congratulations ${name}! on your  birthday!`;
    
    ctx.font = '30px Arial';
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillText(msg, 25, 250);
    //for (let i = 0; i < age; i++){
     //   animation();
    //}
    let i = 0;
    do{
        i += 1;
        animation();

    }while(i <= age);
    
}

function init(){
    can = document.getElementById("can");
    
    ctx = can.getContext("2d");
    //const myinterval = setInterval(animation,10);
    setTimeout(message,1000)
    //clearInterval(myinterval);
   
    ctx.stroke();
};

function Card(){
    addEventListener("load", init);
    var can, ctx, X = 0, Y= 0;
   
}