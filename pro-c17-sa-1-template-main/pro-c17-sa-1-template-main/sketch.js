var box1,box2;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,100,20,70,-1)
  box2 = new Box(50,20,100,50,2)
}

function draw() 
{
  background(220);
box1.show()
box2.show()
box1.move()
box2.move()
}

