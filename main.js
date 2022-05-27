function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

}

function draw() {
	background="background.jpg";
	if(noseX<300)
	{
      marioX=marioX-1;
	}
	if(noseX>300)
	{
		marioX=marioX+1;
	}

	if(noseY<150)
	{
      marioY=marioY-1;
	}
	if(noseY>150)
	{
		marioY=marioY+1;
	}
	image(img,marioX,marioY,40,70)
	game()


}







