console.log("svg.js loaded in")

var pic = document.getElementById("vimage");
var clearButton = document.getElementById("clear");

var first = true;
var prevX = -1;
var prevY = -1;



var change = function(e){
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var clicked = function(e){
    if(e.toElement == this){
        drawDot(e);
    }
};

var drawDot = function (e){
    console.log("drawing dot at x:" + e.offsetX + " y:" + e.offsetY)
    var dot = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    dot.setAttribute("cx", e.offsetX);
    dot.setAttribute("cy", e.offsetY);
    dot.setAttribute("r", 25);
    dot.setAttribute("fill", "red");
    dot.setAttribute("stroke", "black");
    pic.appendChild(dot);

    if (first != true){
	console.log("drawing line from x:" + x + " y:" + y + " to x:" + e.offsetX + " y:" + e.offsetY)
	var line = document.createElementNS(
	    "http://www.w3.org/2000/svg",
	    "line"
	);
	line.setAttribute("x1", x);
	line.setAttribute("y1", y);
	line.setAttribute("x2", e.offsetX);
	line.setAttribute("y2", e.offsetY);
	line.setAttribute("stroke", "black");
	pic.appendChild(line);
    }
    x = e.offsetX;
    y = e.offsetY;
    first = false;
}

var clear = function(){
    while (pic.firstChild){ //hey this is kinda looks like a typical while loop conditional in C
	pic.removeChild(pic.firstChild);
    }
    first = true;
    x = -1;
    y = -1;
}

pic.addEventListener("click", drawDot);
clearButton.addEventListener("click", clear);

