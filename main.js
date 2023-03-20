canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
marsimages=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg","nasa5.jpg","nasa6.jpg"]
random_number=Math.floor(Math.random()*6);
console.log(random_number);
rover_width=100;
rover_height=90;
bg_img=marsimages[random_number];
console.log(bg_img);
rover_img="rover.png";
rover_x=10;
rover_y=10;
function add() {
bg_imgTag=new Image();
bg_imgTag.onload=upload_bg;
bg_imgTag.src=bg_img;

rover_imgTag=new Image();
rover_imgTag.onload=upload_rover;
rover_imgTag.src=rover_img;
}
function upload_bg() {
ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37')
    {
        left();
        console.log('left')
    }

    if(keyPressed == '38')
    {
        up();
        console.log('up')
    }

    if(keyPressed == '39')
    {
        right();
        console.log('right')
    }

    if(keyPressed == '40')
    {
        down();
        console.log('down')
    }
}
function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x=" +rover_x + "y/=" +rover_y);
        upload_bg();
        upload_rover();
    }
}
function down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x=" +rover_x + "y/=" +rover_y);
        upload_bg();
        upload_rover();
    }
}

function left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed, x=" +rover_x + "y/=" +rover_y);
        upload_bg();
        upload_rover();
    }
}

function right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("When right arrow is pressed, x=" +rover_x + "y/=" +rover_y);
        upload_bg();
        upload_rover();
    }
}
