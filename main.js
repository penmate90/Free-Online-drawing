canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color= "red";
line_width= 10;


last_mouse_x=0;
last_mouse_y=0;

mouseEvent="";
canvas.addEventListener("mousedown", mouse_down);

function mouse_down(e) {
    mouseEvent="mousedown";
    color= document.getElementById("input_color").value;
    line_width= document.getElementById("input_line").value;
}

canvas.addEventListener("mouseup", mouse_up);

function mouse_up(e) {
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave", mouse_leave);

function mouse_leave(e) {
    mouseEvent="mouseleave";

}

canvas.addEventListener("mousemove", mouse_move);

function mouse_move(e) {


    current_mouse_x= e.clientX - canvas.offsetLeft;
    current_mouse_y= e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle= color;
        ctx.lineWidth= line_width;
        console.log("last x = " + last_mouse_x + "Last y =" + last_mouse_y);
        ctx.moveTo(last_mouse_x, last_mouse_y);

        console.log("current x =" + current_mouse_x + "current y =" + current_mouse_y);
        ctx.lineTo(current_mouse_x, current_mouse_y); 
        ctx.stroke();
    }
last_mouse_x= current_mouse_x;
last_mouse_y= current_mouse_y;

}

function Clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
