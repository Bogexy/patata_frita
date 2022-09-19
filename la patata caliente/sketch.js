var patata,patataImg;
var table;
let pl1,pl2;
var play;

function preload(){
    
}

function setup (){
    createCanvas(1280,720);
    table = createSprite(640,400,740,20);
    patata = createSprite(640,360,20,20);
    pl1 = createSprite(450,260,100,20);
    pl2 = createSprite(850,260,100,20);
    play = createSprite(400,360,20,60);
}

function draw (){
    background("black");
    
	
    drawSprites();
}
