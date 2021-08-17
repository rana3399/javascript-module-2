/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/


function changeToRedin5sec (){
   setTimeout(function (){
        document.body.classList.add('setRed');
    }, 1000);
    
}

changeToRedin5sec();
// clearTimeout(setRedColor);




var i = 0;
var colors = ['red', 'green', 'black', 'blue','pink']

  function changeInColors (){
      if(colors.length > i){
          document.body.style.backgroundColor = colors[i];
          i++;
      }
      if(i > colors.length -1){
          i = 0;
      }

    }


setInterval(changeInColors, 2000);

// function getRandomColor() {
//     let randomColor = "#" + (Math.floor(Math.random()*16777215).toString(16)) ;
//     return randomColor;
// }

// function setBackground() {
//     document.querySelector("body").style.backgroundColor = getRandomColor();
// }
// setInterval(setBackground, 1000);