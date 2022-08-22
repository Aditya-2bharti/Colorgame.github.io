let numColors = 6;
let colors = generateRandomColors(numColors);
let squares = document.querySelectorAll(".square");
let pickedColer = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
//let easyBtn = document.getElementById("easyBtn");
//let hardBtn = document.getElementById("hardBtn");
let modeButtons = document.querySelectorAll(".mode");

for(let i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
	  this.classList.add("selected");
	  this.textContent === "Easy" ? numColors = "3": numColors ="6";

      // if(this.textContent === "Easy"){
      // 	numColors = 3;
      // } else{
      // 	numColors = 6;
      // }
	  reset();


   });
}

function reset(){
	colors = generateRandomColors(numColors);
	//pick a new random color from picked color
	pickedColer = pickColor();

    resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColer;
	//change color of squares
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}

		
	}
	h1.style.backgroundColor = "steelblue";

}

//easyBtn.addEventListener("click", function(){
//	easyBtn.classList.add("selected");
//	hardBtn.classList.remove("selected");
//	numColors = 3;
//	colors = generateRandomColors(numColors);
//	pickedColer = pickColor();
//	colorDisplay.textContent = pickedColer;
//	for(let i = 0; i < squares.length; i++){
//		if(colors[i]){
//			squares[i].style.backgroundColor = colors[i];
//       }else {
//       	squares[i].style.display = "none";
//      }  
//	}
//	 h1.style.backgroundColor = "steelblue";
//});


// hardBtn.addEventListener("click", function(){
//	hardBtn.classList.add("selected");
//	easyBtn.classList.remove("selected");
//	numColors = 6; 
//	colors = generateRandomColors(numColors);
//	pickedColer = pickColor();
//	colorDisplay.textContent = pickedColer;
//    for(let i = 0; i < squares.length; i++){
//		squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//       }  
//	h1.style.backgroundColor = "steelblue";
// });



resetButton.addEventListener("click", function(){
	reset();
	//generate all new colors
	// colors = generateRandomColors(numColors);
	// //pick a new random color from picked color
	// pickedColer = pickColor();

 //    resetButton.textContent = "New Colors";
	// messageDisplay.textContent = "";
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColer;
	// //change color of squares
	// for(let i = 0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColer;

for(let i = 0; i < squares.length; i++){
	//add initial color to squares
	squares[i].style.backgroundColor = colors[i] ;

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
	  let clickedColor = this.style.backgroundColor;
	  //compare color to pickedcolor
	  if(clickedColor === pickedColer){
	  	  messageDisplay.textContent = "Correct!";
	  	  changeColors(pickedColer);
	  	  resetButton.textContent = "Play Again?";
	  	  h1.style.backgroundColor = clickedColor;
     }else {
	  	 this.style.backgroundColor = "#232323";
	  	 messageDisplay.textContent = "Try Again";
          
	  }

	});
}

function changeColors(color) {
	//loop through all squares
	for( let i = 0; i < squares.length; i++){
		//change each color to match given color 
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random () * colors.length);
	return colors[random];
} 

function generateRandomColors(num){
	//make an array
	let arr = []
	//add num random colors to array
	for(let i = 0; i< num; i++){
		arr.push(randomColor())

	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}
