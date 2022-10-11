canvas = document.getElementById('myCanavas');
ctx = canvas.getContext("2d");

greencar_widht = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = greencar_Image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_Image;


}

function uploadBackground() {
	ctx.drawImage(greencar_imgTag, 0, 0, greencar_widht, greencar_height);

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_widht, greencar_height)

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=50)
	{
		greencar_y = greencar_y - 10;
		
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y <=450)
	{
		greencar_y = greencar_y + 10;
		
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x <=450)
	{
		greencar_x = greencar_x - 10;
		
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x <=450)
	{
		greencar_x = greencar_x + 10;
		
		uploadBackground();
		uploadgreencar();
	}
}
