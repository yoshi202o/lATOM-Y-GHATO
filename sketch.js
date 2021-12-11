var bg;
var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2,tomImg3;

function preload() {
    //carga aquí las imágenes
    tomImg1 = loadAnimation("tomOne.png");
  tomImg3 = loadAnimation("tomFour.png");
    tomImg2 = loadAnimation("tomTwo.png","tomThree.png");
    jerryImg1 = loadAnimation("jerryOne.png");
    jerryImg2 = loadAnimation("jerryTwo.png","jerryThree.png");
  jerryImg3 = loadAnimation("jerryFour.png");
    bg = loadImage("garden.png");
}

function setup(){
    canvas = createCanvas(600,500);
    //crea aquí los sprites de Tom y Jerry
    tom = createSprite(450,400)
    tom.addAnimation("gato sentado",tomImg1);
    tom. scale = 0.14;
    jerry = createSprite(70,400)
    jerry.addAnimation("raton sentado",jerryImg1);
    jerry. scale = 0.14;
    bg. scale = 0.2

}

function draw() {

    background(bg);
    //Escribe aquí la condición para evaluar si Tom y Jerry chocan
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX =0;
    tom.addAnimation("gatocorriendo", tomImg3)
    tom.changeAnimation("gatocorriendo")
    tom.x= 130
    tom.scale = 0.1618;
  jerry.addAnimation("con queso", jerryImg3)
  jerry.changeAnimation("con queso")
  
}
  if(keyDown ("space")){
     jerry.addAnimation("con queso1", jerryImg1)
  jerry.changeAnimation("con queso1")
   tom.addAnimation("gatocorriendo1", tomImg1)
    tom.changeAnimation("gatocorriendo1")
    tom.x=500
  }
keyPressed();
    drawSprites();
}


function keyPressed(){

//Escribe aquí el código para la animación de movimeinto y cambio
if(keyDown ("LEFT_ARROW")){
   jerry.addAnimation("ratonmolestando", jerryImg2);
   jerry.changeAnimation("ratonmolestando");

 tom.velocityX = -5;
    tom.addAnimation("gatomolestando", tomImg2);
    tom.changeAnimation("gatomolestando", tomImg2);
 }
}