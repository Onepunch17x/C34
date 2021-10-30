class Rope{
	constructor(bodyA,bodyB,pointA,pointB)
	{

		this.pointA=pointA
		this.pointB=pointB

		var options={
		
			bodyA:bodyA,
			bodyB:bodyB,
			pointB:{x:this.pointA, y:this.pointB}
		}
	
	this.Con=Matter.Constraint.create({
		bodyA:bodyA,
		bodyB:bodyB,
		length:200,
		stiffness:0.1
	
	})
	World.add(world,this.Con)
	}


    
	display(){
		if(this.Con.bodyB){
			push ();
		line(this.Con.bodyA.position.x,this.Con.bodyA.position.y,this.Con.bodyB.position.x,this.Con.bodyB.position.y);

		strokeWeight(2);
		pop ();
		}
		
	}

  de(){
	  push ()
	  this.Con.bodyB=null
    World.remove(world,this.Con)

	pop ()
  }
}

