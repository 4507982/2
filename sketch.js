var dog,sadDog,happyDog;
var milkimg;
var feedButton,addFoodButton;
var foodObj;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
    milkimg=loadImage("milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feed=createButton("feed the dog");
  feed.position(700,95);
  feed.mousedPressed(feedDog );
  addfood=createButton("add food");
addFood.position(800,95);
addfood.mousePressed(addfoods);
}

function draw() {
  background(46,139,87);
  fedtime=database.ref('feedtime');
feedTime.on("value",function)(data){
  lastFed=data.val();
}
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time

function feedDog(){
  dog.addImage(happyDog.png);
 if(foodObj.getFoodStock()<=0){
 }else{
   foodObj.updateFoodStock(foodObj.getFoodStock(-1));
 }
}

//function to add food in stock
function addfoods(){

  foodS++;
  Database.ref('/').update({

  })
}