
  var puntos,puntos2;
  var cancha,canchaImg,raqueta,raquetaImg,pelota,pelotaImg;
  var puntos =0;
  var puntos2 =0;
  function preload() {
    canchaImg = loadImage("cancha.png"); 
    raquetaImg = loadImage("r.png"); 
    pelotaImg = loadImage("tennisball_1.png"); 
}
  function setup() {
    createCanvas(1000,800);
 cancha = createSprite(400, 400);
 cancha.scale=2;
 pelota = createSprite(600, 600);
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
}


function draw() {
  background("green");
  edges= createEdgeSprites();
  j1.bounceOff(edges);
  j2.bounceOff(edges);
  j1.bounceOff(pared);
  j2.bounceOff(pared);
  r1.x = j1.x+40;
  r2.x = j2.x-40;
  if (pelota.isTouching(r1)) {
    if (keyDown("space")) {
      if (r1.x > pelota.x) {
        pelota.velocityX =Math.round(random(+2,-6));
      }
      if (r1.x < pelota.x) {
        pelota.velocityX =Math.round(random(-2,-6));
      }
      pelota.velocityY =Math.round(random(-6,-18));
    }
  }
  if (pelota.isTouching(r2)) {
    if (keyDown("q")) {
      if (r2.x <pelota.x) {
        pelota.velocityX =Math.round(random(+2,-6));
      }
      if (r2.x > pelota.x) {
        pelota.velocityX =Math.round(random(-2,-6));
      }
      pelota.velocityY =Math.round(random(+6,+18));
    }
  }

  if (keyDown("left")) {
    j1.x = j1.x-10;
  }
  if (keyDown("right")) {
    j1.x = j1.x+10;
  }
  if (keyDown("a")) {
    j2.x = j2.x-7;
  }
  if (keyDown("d")) {
    j2.x = j2.x+7;
  }
  drawSprites();
}
