
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var A;
var man;
var money;
var  rope;
var btn1,blower;
var block;



function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  man = new boy(1000,600,200,300);
   money = new C (100,200,40,40)

   var options ={
isStatic : true
   }
   block= Bodies.rectangle(320,120,20,20,options);
   World.add(world,block)
   
   btn1 = createImg("Button.png");
   btn1.position(300,100);
   btn1.size(50,50);
   btn1.mouseClicked(die);

  blower = createImg("blower.png");
  blower.position(500,500);
  blower.size(50,50);
  blower.mouseClicked(Move);

   rope = new Rope(money.body,block,300,100);

  
}
function preload(){
  A = loadImage("A.jpeg");
  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  image(A,0,0,windowWidth,windowHeight);

  if(collide(money,man)===true){
    textSize(50);
text("YOU WIN",width/2,height/2)
money.body=null
console.log("hello")
  }
  if(money.body && money.body.position.y>=750){
    GameOver()
  }
rect(block.position.x,block.position.y,20,20);
rope.display();
 money.display();
  man.display();
}

function collide(money,man){
  var d = dist(money.body.position.x,money.body.position.y,man.body.position.x,man.body.position.y)
  if(d<=200){
    return true
  }else{
    return false
  }
  
}
function die(){
  rope.de();
}

function Move(){
  Matter.Body.applyForce(money.body,{x:0,y:0},{x:0.5,y:0});
}

function GameOver(){
  swal(
{
  title: 'Game Over',
  text: "Thanks for playing!!",
  confirmButtonText:"Play Again"
},
function (isConfirm) {
  if(isConfirm){
    location.reload();
  }
}
  )
}