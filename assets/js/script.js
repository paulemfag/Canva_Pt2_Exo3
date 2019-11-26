var c = document.getElementById('c1');
var ctx = c.getContext('2d');


// tete
ctx.fillStyle = "#976f0f";
ctx.beginPath();
ctx.arc(200,100,40,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

// main
ctx.fillStyle = "#976f0f";
ctx.beginPath();
ctx.arc(300,135,15,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

// main
ctx.fillStyle = "#976f0f";
ctx.beginPath();
ctx.arc(100,135,15,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

//pied
ctx.fillStyle = "#976f0f";
ctx.beginPath();
ctx.arc(235,340,15,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

//pied
ctx.fillStyle = "#976f0f";
ctx.beginPath();
ctx.arc(165,340,15,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();


ctx.fillStyle = "#976f0f";
ctx.beginPath();
//torse
ctx.fillRect(150,120,100,150);
//bras
ctx.fillRect(250,120,50,30);
//bras
ctx.fillRect(100,120,50,30);
//jambe
ctx.fillRect(150,270,30,70);
//jambe
ctx.fillRect(220,270,30,70);
ctx.closePath();

// ctx.fillStyle="#8a0908";
// ctx.beginPath();
// ctx.moveTo(170, 110);
// ctx.quadraticCurveTo(170, 110, 200, 120);
// ctx.quadraticCurveTo(200, 120, 230, 110);
// ctx.fill();
// ctx.stroke();

// sourcil
ctx.fillStyle="#ddd0b1";
ctx.beginPath();
ctx.moveTo(170, 83);
ctx.quadraticCurveTo(180, 73, 190, 83);
ctx.fill();

//sourcil
ctx.fillStyle="#ddd0b1";
ctx.beginPath();
ctx.moveTo(210, 83);
ctx.quadraticCurveTo(220, 73, 230, 83);
ctx.fill();

//pied
ctx.fillStyle = "transparent";
ctx.beginPath();
ctx.arc(200,280,20,Math.PI*1, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

// oeil
ctx.beginPath();
ctx.fillStyle ="white";
ctx.arc(180,90,6,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

//pupille
ctx.beginPath();
ctx.fillStyle ="red";
ctx.arc(180,90,2,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

// oeil
ctx.beginPath();
ctx.fillStyle ="white";
ctx.arc(220,90,6,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

//pupille
ctx.beginPath();
ctx.fillStyle ="red";
ctx.arc(220,90,2,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

//bouton 1
ctx.beginPath();
ctx.fillStyle ="purple";
ctx.arc(200,170,6,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

//bouton 2
ctx.beginPath();
ctx.fillStyle ="purple";
ctx.arc(200,200,6,Math.PI*2, false); //(x, y, Rayon, Angle)
ctx.fill();
ctx.closePath();

// chapeau
ctx.fillStyle = "#90EE90";
ctx.beginPath();
ctx.moveTo(170, 72);//60
ctx.lineTo(230, 72);
ctx.lineTo(200, 40);
ctx.fill();
ctx.stroke();
ctx.closePath();

// bouche
ctx.fillStyle="red";
ctx.beginPath();
ctx.moveTo(170, 110);
ctx.quadraticCurveTo(200, 115, 230, 110);
ctx.fill();
ctx.closePath();

//bouche 2
ctx.fillStyle="red";
ctx.beginPath();
ctx.moveTo(170, 110);
ctx.quadraticCurveTo(200, 105, 230, 110);
ctx.fill();
ctx.cloePath();
