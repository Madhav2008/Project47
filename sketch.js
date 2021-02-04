const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var sindbad, sindbadImg, sindbadImg2, sindbadImg3;
var brickImg, coinImg;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7;
var invisibleGround;
var river, riverImg;
var boat, boatImg;
var invisibleStopper;
var sindBoImg;
var stopper;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7;
var palace, palaceImg;
var wow, sourive;
var score = 0;
var backgroundImg;
var soldier, soldierImg;
var gameState, PLAY, END;

function preload() {
    sindbadImg2 = loadImage('r20.png');
    brickImg = loadImage('brick.png');
    coinImg = loadAnimation('coin1.png', 'coin2.png', 'coin3.png', 'coin4.png', 'coin5.png', 'coin6.png', 'coin7.png', 'coin8.png')
    sindbadImg3 = loadAnimation('r20.png', 'r19.png', 'r18.png', 'r17.png', 'r16.png', 'r15.png', 'r14.png', 'r13.png', 'r12.png', 'r11.png', 'r10.png', 'r9.png', 'r8.png', 'r7.png', 'r6.png', 'r5.png', 'r4.png', 'r3.png', 'r2.png', 'r1.png');
    riverImg = loadImage('rive.png');
    wow = loadSound('wow.mpeg');
    boatImg = loadImage('boat.png');
    sindBoImg = loadImage('r1.png');
    backgroundImg = loadImage('background.jpg')
    palaceImg = loadImage('palace.png');
    sindbadImg = loadAnimation('r1.png', 'r2.png', 'r3.png', 'r4.png', 'r5.png', 'r6.png', 'r7.png', 'r8.png', 'r9.png', 'r10.png', 'r11.png', 'r12.png', 'r13.png', 'r14.png', 'r15.png', 'r16.png', 'r17.png', 'r18.png', 'r19.png', 'r20.png');
}

function setup() {
    createCanvas(2300, 800);

    engine = Engine.create();
    world = engine.world;

    palace = createSprite(2080, 575, 10, 10);
    palace.addImage('palace', palaceImg);

    PLAY = 1;
    END = 0;
    gameState = PLAY;

    sindbad = createSprite(100, 720, 50, 50);
    sindbad.addImage("sindbad", sindbadImg2);
    sindbad.scale = 1.5;
    World.add(world, sindbad)

    invisibleGround = createSprite(1150, 815, 2300, 2);
    invisibleGround.visible = false;

    brick1 = createSprite(250, 700, 10, 10);
    brick1.addImage("brick", brickImg);
    brick1.scale = 0.9;
    brick1.setCollider("rectangle", 0, 0, 80, 40);

    brick2 = createSprite(450, 580, 10, 10);
    brick2.addImage("brick", brickImg);
    brick2.scale = 0.9
    brick2.setCollider("rectangle", 0, 0, 80, 40);

    brick3 = createSprite(220, 460, 10, 10);
    brick3.addImage("brick", brickImg);
    brick3.scale = 0.9
    brick3.setCollider("rectangle", 0, 0, 80, 40);

    brick4 = createSprite(150, 340, 10, 10);
    brick4.addImage("brick", brickImg);
    brick4.scale = 0.9
    brick4.setCollider("rectangle", 0, 0, 80, 40);

    brick5 = createSprite(420, 360, 10, 10);
    brick5.addImage("brick", brickImg);
    brick5.scale = 0.9
    brick5.setCollider("rectangle", 0, 0, 80, 40);

    brick6 = createSprite(680, 280, 10, 10);
    brick6.addImage("brick", brickImg);
    brick6.scale = 0.9
    brick6.setCollider("rectangle", 0, 5, 50, 40);

    brick7 = createSprite(950, 400, 10, 10);
    brick7.addImage("brick", brickImg);
    brick7.scale = 0.9
    brick7.setCollider("rectangle", 0, 5, 50, 40);

    coin1 = createSprite(brick1.x, brick1.y - 50, 10, 10);
    coin1.addAnimation('coin', coinImg);
    coin1.scale = 0.6;

    coin2 = createSprite(brick2.x, brick2.y - 50, 10, 10);
    coin2.addAnimation('coin', coinImg);
    coin2.scale = 0.6;

    coin3 = createSprite(brick3.x, brick3.y - 50, 10, 10);
    coin3.addAnimation('coin', coinImg);
    coin3.scale = 0.6;

    coin4 = createSprite(brick4.x, brick4.y - 50, 10, 10);
    coin4.addAnimation('coin', coinImg);
    coin4.scale = 0.6;

    coin5 = createSprite(brick5.x, brick5.y - 50, 10, 10);
    coin5.addAnimation('coin', coinImg);
    coin5.scale = 0.6;

    coin6 = createSprite(brick6.x, brick6.y - 50, 10, 10);
    coin6.addAnimation('coin', coinImg);
    coin6.scale = 0.6;

    coin7 = createSprite(brick7.x, brick7.y - 50, 10, 10);
    coin7.addAnimation('coin', coinImg);
    coin7.scale = 0.6;

    river = createSprite(1430, 400, 10, 10);
    river.addImage('river', riverImg);
    river.scale = 1.5;

    sindbad.depth = river.depth;
    sindbad.depth = sindbad.depth + 1;

    boat = createSprite(1152, 920, 50, 50);
    boat.addImage('boat', boatImg);
    boat.scale = 1.3

    invisibleStopper = createSprite(850, 550, 1700, 2);
    invisibleStopper.visible = false;

    stopper = createSprite(1850, 799, 2, 100);
    stopper.visible = false;

    soldier = createSprite(1900, 800, 2, 750);
    soldier.visible = false;
}

function draw() {
    background(backgroundImg);

    Engine.update(engine);

    edges = createEdgeSprites();
    sindbad.collide(invisibleGround);
    sindbad.collide(brick1);
    sindbad.collide(brick2);
    sindbad.collide(brick3);
    sindbad.collide(brick4);
    sindbad.collide(brick5);
    sindbad.collide(brick6);
    sindbad.collide(brick7);
    boat.collide(invisibleStopper);

    if (gameState === PLAY) {
        if (sindbad.isTouching(coin1)) {
            coin1.destroy();
            wow.play();
            score = score + 10;
        }

        if (sindbad.isTouching(coin2)) {
            coin2.destroy();
            wow.play();
            score = score + 10;
        }

        if (sindbad.isTouching(coin3)) {
            coin3.destroy();
            wow.play();
            score = score + 10;
        }

        if (sindbad.isTouching(coin4)) {
            coin4.destroy();
            wow.play();
            score = score + 10;
        }

        if (sindbad.isTouching(coin5)) {
            coin5.destroy();
            wow.play();
            score = score + 10;
        }

        if (sindbad.isTouching(coin6)) {
            coin6.destroy();
            wow.play();
            score = score + 10;
        }

        if (sindbad.isTouching(coin7)) {
            coin7.destroy();
            wow.play();
            score = score + 10;
        }

        if (keyDown("right")) {
            sindbad.addAnimation("sindbad", sindbadImg);
            sindbad.x += 5;
        }

        if (keyDown("left")) {
            sindbad.addAnimation("sindbad", sindbadImg3);
            sindbad.x -= 5;
        }

        if (keyDown("up")) {
            sindbad.y = sindbad.y - 17;
        }

        if (sindbad.x > 1000 && sindbad.x < 1650 && boat.y > 500) {
            boat.velocityY = -40;
            sindbad.addImage('sind', sindBoImg);
            boat.x = sindbad.x;
        }

        sindbad.velocityY = sindbad.velocityY + 1;

        if (sindbad.x > 2080) {
            gameState = END;
        }
    } else if (gameState === END) {
        sindbad.visible = false;
        textSize(150);
        textFont('times new roman');
        fill("red");
        strokeWeight(4);
        stroke("blue")
        text("You Win", 300, 500);
    }

    textFont('times new roman');
    fill("red");
    strokeWeight(4);
    stroke("blue")
    textSize(50);
    text('Score : ' + score, 800, 50);

    drawSprites();
}