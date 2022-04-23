
  var puntos,puntos2,puntos3,puntos4,score;
  var cancha,canchaImg,raqueta,raquetaImg,pelota,pelotaImg;
  var puntos =0;
  var puntos2 =0;
  var puntos3 =0;
  var puntos4 =0;
  var score =0;
  function preload() {
    canchaImg = loadImage("cancha.png"); 
    raquetaImg = loadImage("r.png"); 
    pelotaImg = loadImage("tennisball_1.png"); 
}
  function setup() {
    createCanvas(1200,800);
 cancha = createSprite(400, 400);
 cancha.scale=2;
 pelota = createSprite(600, 600);
s = createSprite(60, 390,200,800);
s.rotation=9.5
s2 = createSprite(740,390,200,800);
s2.rotation=-9.5
s2.visible= false;
s.visible= false;
s3 = createSprite(400, 800,800,1);
s4 = createSprite(400,1,800,1);
 marcador = createSprite(1000, 400,400,140);
 marcador2 = createSprite(930, 400,5,140);
 marcador3 = createSprite(965, 400,5,140);
 marcador4 = createSprite(1020, 400,5,140);
 marcador5 = createSprite(marcador.x,marcador.y,400,5);
 j1 = createSprite(400, 650, 20, 100);
pared = createSprite(800, 400, 1, 800);
j2 = createSprite(400, 50, 20, 100);
r1 = createSprite(j1.x+40, j1.y-30);
 r2 = createSprite(j2.x-40, j2.y-30);
  pelota.addImage(pelotaImg);
  r1.addImage(raquetaImg);
  r2.addImage(raquetaImg);
  pelota.scale = 0.08;
  r1.scale = 0.1;
  r2.scale = 0.1;
  r2.mirrorX(-1);
  cancha.addImage(canchaImg);
  marcador2.shapeColor = "black";
  marcador3.shapeColor = "black";
  marcador4.shapeColor = "black";
  marcador5.shapeColor = "black";
  marcador.shapeColor = "lightblue";
}


function draw() {
  background("green");
  edges= createEdgeSprites();
  j1.bounceOff(edges);
  j2.bounceOff(edges);
  j1.bounceOff(pared);
  j2.bounceOff(pared);


  r1.x = j1.x+0;
  r2.x = j2.x-0;
  if (pelota.isTouching(r1)) {
    if (keyDown("space")) {
      score=1
      if (j1.x > pelota.x) {
        pelota.velocityX =Math.round(random(+2,+6));
      }
      if (j1.x < pelota.x) {
        pelota.velocityX =Math.round(random(-2,-6));
      }
      pelota.velocityY =Math.round(random(-6,-18));
    }
  }
  if (pelota.isTouching(r2)) {
    if (keyDown("q")) {
      score=0
      if (j2.x >pelota.x) {
        pelota.velocityX =Math.round(random(+2,+6));
      }
      if (j2.x < pelota.x) {
        pelota.velocityX =Math.round(random(-2,-6));
      }
      pelota.velocityY =Math.round(random(+6,+18));
    }
  }
if (score===0){
  if (pelota.isTouching(s)) {
    puntos2=puntos2+15
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
  }
  if (pelota.isTouching(s2)) {
    puntos2=puntos2+15
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
}
}
if (score===1){
  if (pelota.isTouching(s)) {
    puntos=puntos+15
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
  }
  if (pelota.isTouching(s2)) {
    puntos=puntos+15
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
}
}

  if (pelota.isTouching(s3)) {
    puntos=puntos+15
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
  }
  if (pelota.isTouching(s4)) {
    puntos2=puntos2+15
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
  }
if(puntos<39){
  if (pelota.isTouching(s)) {
    puntos3=puntos3+1
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
  }
  if (pelota.isTouching(s2)) {
    puntos3=puntos3+1
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
}
if (pelota.isTouching(s3)) {
  puntos3=puntos3+1
  pelota.velocityY=0;
  pelota.velocityX=0;
  pelota.x=600
  pelota.y=600
}

}
if(puntos2<39){
  if (pelota.isTouching(s)) {
    puntos4=puntos4+1
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
  }
  if (pelota.isTouching(s2)) {
    puntos4=puntos4+1
    pelota.velocityY=0;
    pelota.velocityX=0;
    pelota.x=600
    pelota.y=600
}
if (pelota.isTouching(s3)) {
  puntos4=puntos4+1
  pelota.velocityY=0;
  pelota.velocityX=0;
  pelota.x=600
  pelota.y=600
}

}

  if (keyDown("left")) {
    j1.x = j1.x-10;
    r1.mirrorX(-1);
    r1.x = j1.x-40;
  }
  if (keyDown("right")) {
    j1.x = j1.x+10;
    r1.x = j1.x+40;
    r1.mirrorX(+1);
  }
  if (keyDown("a")) {
    j2.x = j2.x-7;
    r2.mirrorX(-1);
    r2.x = j2.x-40;
  }
  if (keyDown("d")) {
    j2.x = j2.x+7;
    r2.mirrorX(+1);
    r2.x = j2.x+40;
  }
  drawSprites();
  fill("black");
  textSize(30);
  text(puntos3, 935, 375);
text(puntos4, 935, 445);
text(puntos, 975, 375);
text("nadal", 815, 375);
text("jacovich", 815,445);
text(puntos2, 975, 445);

}
  
