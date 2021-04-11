
var sinChan, sinChanimg, happysinChanimg, database, foodS, foodStock;

function preload()
{
  sinChanimg=loadImage("SinChan.png")
  happysinChanimg=loadAnimation("SinChan_Happy.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

  sinChan=createSprite(250, 250, 10, 10);
  sinChan.addImage(sinChanimg)
  sinChan.scale=0.2

}


function draw() {  

  drawSprites();
  if(keyWentUp(UP_ARROW)){
    writeStocks(foodS)
    //sinChan.addImage("happy",happysinChanimg)
    //sinChan.changeAnimation(happysinChanimg)
  }

  text("Press The Up Arrow To Give ChocoChips To SinChan ", 100, 20);
  text("No. of Chocochips=" + foodS, 170, 40);
 
  
}
function readStock(data){
 
  foodS=data.val();
  
}

function writeStocks(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  
  database.ref('/').update({
    Food:x
  })
  
  

}

