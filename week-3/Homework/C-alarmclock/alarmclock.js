function setAlarm (){


let inputNumbers = document.querySelector("#alarmSet");
let TimeRemaining = document.getElementById("timeRemaining");
let initialTime = inputNumbers.value;

inputNumbers.value = "";


function setAlarmInternal (){

    TimeRemaining.textContent = "Time Remaining: " + timeOutFunc(initialTime);
    initialTime -= 1;

    if(initialTime <= -1){
        clearInterval(timer);
        playAlarm()
    }

}

setAlarmInternal ()


function timeOutFunc(time){
    if(time >= 60){
        let timeParsed = parseInt(time, 10);
        let minutes = Math.floor(timeParsed / 60);
        let seconds = timeParsed - (minutes*60);
         return minutes + ":" +  seconds;
    }
    if (time < 10) {return "00:0" + time}
    else if (time <=59 && time >=10){ return "00:" + time}
    
    else { return "00:0" + time}
}

let timer = setInterval(setAlarmInternal, 1000);
}

// ---------------------------------------------------------------------------------------
                    // ----    2nd way-----

// function setAlarm() {

//     var counter = document.querySelector("#alarmSet").value;
//     var timerMessage = document.querySelector("#timeRemaining");
//     let minutes;
//     let seconds;
//     setMinutesAndSeconds();
//     let startCounter = setInterval(decreaseCounter, 1000)


//     function decreaseCounter() {
//         if (counter > 0) {
//             counter = counter - 1;
//             setMinutesAndSeconds();
//         } else {

//             playAlarm();
//             myStopFunction();
//         }
//     }

//     function myStopFunction() {
//         clearInterval(startCounter);
//     }






    
//     function setMinutesAndSeconds() {
//         if (counter < 10) {
//             minutes = "00";
//             seconds = counter;
//         }
//         if (counter < 60) {
//             minutes = "00"
//             seconds = counter;
//             if (seconds < 10) {
//                 seconds = "0" + seconds;
//             }
//         }

//         if (counter >= 60) {
//             if (counter % 60 === 0) {
//                 seconds = "00";
//                 minutes = counter / 60;
//                 if (minutes < 10) {
//                     minutes = "0" + minutes;
//                 }
//                 if (seconds < 10) {
//                     second = "0" + seconds;
//                 }

//             } else {
//                 let minutesAndSeconds = (counter / 60).toString();
//                 minutes = parseInt(minutesAndSeconds.charAt(0));
//                 seconds = counter - (minutes * 60);
//                 if (minutes < 10) {
//                     minutes = "0" + minutes;
//                 }
//                 if (seconds < 10) {
//                     seconds = "0" + seconds;
//                 }
//             }


//         }

//         timerMessage.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
//     }

// }

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
