canvas=document.getElementById("myCanvas");
color="black";
width_of_line=1;
radius=20;
var mouseEvent="empty";
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line".value);
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mouse_move);

function my_mouse_move(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2 * Math.PI);
        ctx.stroke();
    } 
}

canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";
}
