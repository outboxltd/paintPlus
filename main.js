let paint_board = document.getElementById("main_paint");

paint_board.addEventListener('mousedown', when_mouse_down);
paint_board.addEventListener('mouseup', when_mouse_is_up);

function when_mouse_down() {
    paint_board.addEventListener('mousemove', mouse_move);
}

function when_mouse_is_up() {
    paint_board.removeEventListener('mousemove', mouse_move);
}

function mouse_move(eventobject) {
    var x_postion = eventobject.pageX - $(this).offset().left
    var y_postion = eventobject.pageY - $(this).offset().top;
    console.log(eventobject);

    let brush = document.createElement("span");
    brush.className = "paint_brush";
    brush.style.left = x_postion + "px";
    brush.style.top = y_postion + "px";
    brush.style.backgroundColor = brushColor
    brush.style.height = brushSize + "px"; 
    brush.style.width = brushSize + "px";
    paint_board.appendChild(brush);

}


let brushSize = 20;
let brushColor = "black"
let btnPlus = document.getElementById('plus');
let btnMinus = document.getElementById('minus');
let color_tool = document.getElementById('color_tool');

let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let purple = document.getElementById('purple');



btnPlus.addEventListener('click',plusSize)
btnMinus.addEventListener('click',minusSize)
color_tool.addEventListener('click',changeColor)



function plusSize() {
    if (brushSize < 100) {
        brushSize++;
        console.log(brushSize)
    } 
}

function minusSize() {
    if (brushSize > 5) {
        brushSize--;
        console.log(brushSize)
    }
    
}



function changeColor(event) {
    console.log(event.target.id)
    brushColor = event.target.id;
};




