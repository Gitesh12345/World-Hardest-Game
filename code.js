var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["eaa8fb07-19bc-40fd-9a59-499bfe211dcd","69bc6347-a52c-4d0c-9f3d-2fae7b220e91","42a9e9c1-c399-4424-a6c8-bfd27c872a55","df5d656b-8c31-48ad-bd68-820b7c2a16d3"],"propsByKey":{"eaa8fb07-19bc-40fd-9a59-499bfe211dcd":{"name":"win_cup","sourceUrl":"assets/v3/animations/IhAAHgtlCb2Yff1TGwL0Ei4FN5VMYGo7l-wAadbuC4w/eaa8fb07-19bc-40fd-9a59-499bfe211dcd.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"lsYeTeGfHKjw_G2eC8BZ9SIAfxv42Bmd","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/IhAAHgtlCb2Yff1TGwL0Ei4FN5VMYGo7l-wAadbuC4w/eaa8fb07-19bc-40fd-9a59-499bfe211dcd.png"},"69bc6347-a52c-4d0c-9f3d-2fae7b220e91":{"name":"car1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"VXr7im.u7BGQvQt28kdQDjverPYmHxQg","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/69bc6347-a52c-4d0c-9f3d-2fae7b220e91.png"},"42a9e9c1-c399-4424-a6c8-bfd27c872a55":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"df5d656b-8c31-48ad-bd68-820b7c2a16d3":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/7puyuiL6CpZQIyVB1hzHvUwZkQzTMLxe/category_retro/spacebattle_01.png","frameSize":{"x":191,"y":140},"frameCount":1,"looping":true,"frameDelay":2,"version":"7puyuiL6CpZQIyVB1hzHvUwZkQzTMLxe","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":140},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7puyuiL6CpZQIyVB1hzHvUwZkQzTMLxe/category_retro/spacebattle_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// variables
var car1,car2,car3,car4;
var boundary1;
var boundary2;
var boundary3;
var boundary4;
var boundary5;
var boundary6;
var boundary7;
var boundary8;
var boundary9;
var boundary10;
var boundary11;
var boundary12;
var boundary13;
var boundary14;
var boundary15;
var boundary16;
var cup=createSprite(360,245,15,15);
cup.setAnimation("win_cup");
cup.scale = 0.3;
var player=createSprite(50,140,13,13);
var life=0;

// createSprite


boundary1=createSprite(50,95,70,5);
boundary2=createSprite(18,188,5,180);
boundary3=createSprite(76,275,117,5);
boundary4=createSprite(82,170,5,150);
boundary5=createSprite(95,245,32,5);
boundary6=createSprite(108,185,5,120);
boundary7=createSprite(195,125,180,5);
boundary8=createSprite(132,260,5,32);
boundary9=createSprite(219,245,180,5);
boundary10=createSprite(285,111,5,33);
boundary11=createSprite(311,188,5,120);
boundary12=createSprite(323,130,30,5);
boundary13=createSprite(335,202,5,150);
boundary14=createSprite(385,185,5,181);
boundary15=createSprite(360,275,55,5);
boundary16=createSprite(335,97,100,5);

car1=createSprite(150,145,10,10);
car2=createSprite(190,225,10,10);
car3=createSprite(225,145,10,10);
car4=createSprite(265,225,10,10);

// sprite color


boundary1.shapeColor = "black";
boundary2.shapeColor = "black";
boundary3.shapeColor = "black";
boundary4.shapeColor = "black";
boundary5.shapeColor = "black";
boundary6.shapeColor = "black";
boundary7.shapeColor = "black";
boundary8.shapeColor = "black";
boundary9.shapeColor = "black";
boundary10.shapeColor = "black";
boundary11.shapeColor = "black";
boundary12.shapeColor = "black";
boundary13.shapeColor = "black";
boundary14.shapeColor = "black";
boundary15.shapeColor = "black";
boundary16.shapeColor = "black";


// animation

car1.setAnimation("car1");
car2.setAnimation("car2");
car3.setAnimation("car1");
car4.setAnimation("car2");
player.setAnimation("player");
// scale for car and player

car1.scale = 0.2;
car2.scale = 0.2;
car3.scale = 0.2;
car4.scale = 0.2;
player.scale = 0.11;

  car1.velocityY=2;
  car2.velocityY=-2;
  car3.velocityY=2;
  car4.velocityY=-2;

  


function draw (){
  background("white");
  
  fill("lightgreen");
  rect(20,98,60,173);
  fill("lightblue");
  rect(334,100,48,173);
  
  
  textSize(40);
  stroke("red");
  text("WORLD’S HARDEST",10,60);
  textSize(40);
  stroke("red");
  text("GAME",140,315);
  player.velocityY=0;
  player.velocityX=0;
  
  
  textSize(30);
  stroke("red");
  text("life : " + life,150,100);
  
  
  
  
  player.bounceOff(boundary1);
  player.bounceOff(boundary2);
  player.bounceOff(boundary3);
  player.bounceOff(boundary4);
  player.bounceOff(boundary5);
  player.bounceOff(boundary6);
  player.bounceOff(boundary7);
  player.bounceOff(boundary8);
  player.bounceOff(boundary9);
  player.bounceOff(boundary10);
  player.bounceOff(boundary11);
  player.bounceOff(boundary12);
  player.bounceOff(boundary13);
  player.bounceOff(boundary14);
  player.bounceOff(boundary15);
  player.bounceOff(boundary16);
  
  car1.bounceOff(boundary7);
  car1.bounceOff(boundary9);
  car2.bounceOff(boundary7);
  car2.bounceOff(boundary9);
  car3.bounceOff(boundary7);
  car3.bounceOff(boundary9);
  car4.bounceOff(boundary7);
  car4.bounceOff(boundary9);
  
  
  
  
  
  
  
  
  if (keyDown("UP_ARROW")) {
    player.velocityY = -3;
  }
  
  if (keyDown("DOWN_ARROW")) {
    player.velocityY = 3;
  }
  
  if (keyDown("RIGHT_ARROW")) {
    player.velocityX = 3;
  }
  if (keyDown("LEFT_ARROW")) {
    player.velocityX = -3;
  }
  
  if (player.isTouching(car1) || player.isTouching(car2) || player.isTouching(car3) || player.isTouching(car4)){
    player.x=50;
    player.y=140;
    
    life = life +1;
  }
  
  if (player.isTouching(cup)) {
    textSize(20);
    text("YOU WIN!!!",150,200);
    player.setVelocity(0,0);
    car1.setVelocity(0,0);
    car2.setVelocity(0,0);
    car3.setVelocity(0,0);
    car4.setVelocity(0,0);
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
