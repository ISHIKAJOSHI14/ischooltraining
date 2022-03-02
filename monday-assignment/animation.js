var canvas, ctx 
canvas = document.getElementById('can');
can.width = 800;
can.height = 600;
ctx = canvas.getContext('2d');

//pentagon
ctx.beginPath();
ctx.fillStyle = "rgba(125, 68, 172, 0.4)"
ctx.moveTo(300,200);
ctx.lineTo(490,200);
ctx.lineTo(575,330);
ctx.lineTo(370,430);
ctx.lineTo(220,340);
ctx.lineTo(300,200);
ctx.closePath();
ctx.stroke();
ctx.fill();

 //t1
ctx.beginPath();
ctx.fillStyle = "rgba(125, 68, 172, 0.4)"
ctx.moveTo(300,200);
ctx.lineTo(400,50);
ctx.lineTo(490,200);
ctx.closePath();
ctx.stroke();
ctx.fill();

 //t2
ctx.beginPath();
ctx.fillStyle = "rgba(125, 68, 172, 0.4)"
ctx.moveTo(490,200);
ctx.lineTo(800,200);
ctx.lineTo(575,330);
ctx.closePath();
ctx.stroke();
ctx.fill();


 //t3
ctx.beginPath();
ctx.fillStyle = "rgba(125, 68, 172, 0.4)"
ctx.moveTo(575,330);
ctx.lineTo(700,550);
ctx.lineTo(370,430);
ctx.closePath();
ctx.stroke();
ctx.fill();


 //t4
ctx.beginPath();
ctx.fillStyle = "rgba(125, 68, 172, 0.4)"
ctx.moveTo(370,430);
ctx.lineTo(75,550);
ctx.lineTo(220,340);
ctx.closePath();
ctx.stroke();
ctx.fill();


 //t5
ctx.beginPath();
ctx.fillStyle = "rgba(125, 68, 172, 0.4)"
ctx.moveTo(220,340);
ctx.lineTo(20,200);
ctx.lineTo(300,200);
ctx.closePath();
ctx.stroke();
ctx.fill();


function Details() {
    var name = document.getElementById('name').value;
    var bdate = document.getElementById('bdate').valueAsNumber;
    let msg = `Happy birthday ${name}`;
    return msg
}

function printmessage() {
    let msg = Details();
    ctx.font = "30px Arial";
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillText(msg, 170, 250);
}

function Card() {
    
    printmessage();

    ctx.stroke()
}