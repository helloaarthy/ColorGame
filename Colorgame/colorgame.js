var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array 
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "#232323"
})
colorDisplay.textContent=pickedColor;
for(var i=0; i<squares.length; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];
    //add click event to all squares
    //grab color of clicked square and compare it with color
   squares[i].addEventListener("click",function(){
    var selectedColor = this.style.backgroundColor;
    if(selectedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColor(selectedColor);
        h1.style.backgroundColor = selectedColor;
        resetButton.textContent = "PLAY AGAIN?"
    } else{
       this.style.backgroundColor = "#232323";
       messageDisplay.textContent = "Try Again";
    }
   })
}

function changeColor(color){
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
        //get random color and push to arr
    }
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}