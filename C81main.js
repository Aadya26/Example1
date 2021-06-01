canvas = document.getElementById("canvas1");
color = "black"
ctx= canvas.getContext("2d");
Width_of_line=2;
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
var width= screen.width;
new_width= screen.width-70;
new_height= screen.height-300;
if (width<992)
{document.getElementById("Canvas1").width= new_width;
document.getElementById("Canvas1").height= new_height;
document.body.style.overflow= "hidden";
}

canvas.addEventListener("touchstart",touchstart1);
function touchstart1(e)
{
    color= document.getElementById("input_color").value;
    console.log(color);
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",touchmove1);
function touchmove1(e)
{
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.moveTo(last_position_of_x,last_position_of_y);
      ctx.lineTo(current_position_of_x,current_position_of_y);
      ctx.stroke();

  
  last_position_of_x=current_position_of_x;
  last_position_of_y=current_position_of_y;
}
function Clear()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
    
}
