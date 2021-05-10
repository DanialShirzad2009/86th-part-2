



var canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
var player_x=10;
var player_y=10;
var player_object="";
function player_update(){
fabric.Image.fromURL("player.png", function(Img)
{
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToheight(140);
player_object.set({
top:player_y,left:player_x
});
canvas.add(player_object);
})
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
    block_object=Img;
    block_object.scaleToWidth(block_image_width);
    block_object.scaleToHeight(block_image_height);
    block_object.set({
    top:player_y,left:player_x
    });
    canvas.add(block_object);
    })
    }
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
var keypressed=e.keyCode;
 console.log(keypressed);
if (e.shiftKey==true && keypressed=="80") 
{
console.log("p and shift pressed together");
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if (e.shiftKey==true && keypressed=="77") 
{
console.log("m and shift pressed together");
block_image_width=block_image_width-10;
block_image_height=block_image_height-10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if(keypressed=="37")
{
left();
console.log("left pressed");
}

if(keypressed=="38")
{
up();
console.log("up pressed");
}

if(keypressed=="39")
{
right();
console.log("right pressed");
}

if(keypressed=="40")
{
down();
console.log("down pressed");

}

if(keypressed=="87")
{
new_image("hulk_face.png");
console.log("h pressed");
}

if(keypressed=="82")
{
new_image("https://drive.google.com/file/d/1JyTYOBAxSg060lH4VGpVuaSFBSvkJ2Xa/view?usp=sharing");
console.log("r pressed");
}
if(keypressed=="76")
{
new_image("https://drive.google.com/file/d/1kLvJ3beGW2ITQY3pZa_4Cew7VmQLeI_2/view?usp=sharing");
console.log("l pressed");
}
if(keypressed=="66")
{
new_image("https://drive.google.com/file/d/16q60eulWvkIUXqtdIHYVf-WzL1PnprWo/view?usp=sharing");
console.log("b pressed");
}

if(keypressed=="82")
{
new_image("https://drive.google.com/file/d/1PHnkIw5TK441tEvAbSwJ5NlS5ZtDCKSD/view?usp=sharing");
console.log("r pressed");
}

if(keypressed=="73")
{
new_image("https://drive.google.com/file/d/1RjtrVFlLkNwDUGwQHSjY2WAJOEFjMjsE/view?usp=sharing");
console.log("i pressed");
}
if(keypressed=="68")
{
new_image("https://drive.google.com/file/d/1b7vda_bi9O6xz_vyG2s9dmsOu_qc5ULP/view?usp=sharing");
console.log("d pressed");
}
if(keypressed=="85")
{
new_image("https://drive.google.com/file/d/1ueIYJp1kD_nrT4KvhQAo-A32LLunIAYb/view?usp=sharing");
console.log("u pressed");
}
if(keypressed=="88")
{
new_image("https://drive.google.com/file/d/1Q15-IsRGM2YI-9yHj1kOU_EsHYGYmyKu/view?usp=sharing");
console.log("x pressed");
}
if(keypressed=="67")
{
new_image("https://drive.google.com/file/d/1ZWF2A_bV6j97Xz7MI-B-2bjHk0wSEM_F/view?usp=sharing");
console.log("c pressed");
}
if(keypressed=="86")
{
new_image("https://drive.google.com/file/d/1uXVCXwtZDfq70McYMm-L8wX3WHi5fcJz/view?usp=sharing");
console.log("v pressed");
}
if(keypressed=="74")
{
new_image("https://drive.google.com/file/d/1nI4k5m6r52xSbRUack7TbIa_U8YvzUt9/view?usp=sharing");
console.log("j pressed");
}
if(keypressed=="75")
{
new_image("https://drive.google.com/file/d/1ztczDoQpw_BD5pCvQt_abovLE8yJPL_U/view?usp=sharing");
console.log("k pressed");
}
if(keypressed=="78")
{
new_image("https://drive.google.com/file/d/1tIiiEd0sA-lp2Ri0eHLZ6xv0CCIxRw78/view?usp=sharing");
console.log("n pressed");
}

if(keypressed=="85")
{
new_image("https://drive.google.com/file/d/18gAM21-K2XuvAwY5O-UZkfccGtupEZAA/view?usp=sharing");
console.log("u pressed");
}

if(keypressed=="84")
{
new_image("https://drive.google.com/file/d/1joBpinfBiVW72cgGI8vpwUGWTMkybdxS/view?usp=sharing");
console.log("t pressed");
}
if(keypressed=="80")
{
new_image("https://drive.google.com/file/d/1drXx-jBFqBCrWyJ7fUTmFtGN8RuqCY-D/view?usp=sharing");
console.log("p pressed");
}
if(keypressed=="70")
{
new_image("https://drive.google.com/file/d/1JGZlMGfmfzmBiKHvoeeaYsOvJZ96LA88/view?usp=sharing");
console.log("f pressed");
}
if(keypressed=="69")
{
new_image("https://drive.google.com/file/d/1hNsjZZWyHXhN0f4yOLjqRNlcB0YpiyNi/view?usp=sharing");
console.log("e pressed");
}
if(keypressed=="69")
{
new_image("https://drive.google.com/file/d/1u1CQUTh5ekB4b2OqdgTztkj3udfP99bX/view?usp=sharing");
console.log("e pressed");
}
