let blueBtn = document.getElementById("blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
let jumbotron = document.querySelector('.jumbotron');
let donateAbike = document.querySelector(".buttons .btn-primary");
let volanteerBtn = document.querySelector(".buttons .btn-secondary");
const greenBtn = document.getElementById('greenBtn');

// var blueBtnColors = ['red', 'black', 'green'];
// var anotherColors = ['blue',  'green', 'black',];


// orangeBtn.addEventListener('click', ()=> changeColor('#f0ad4e', '#5751fd', '#31b0d5'));
// blueBtn.addEventListener('click', () => changeColor ('#588fbd', '#ffa500', 'white'));
// greenBtn.addEventListener('click', ()=> changeColor( '#87ca8a', ' black', '#8c9c08'));

// function changeColor(jumColor, donateColor, volColor){
//         jumbotron.style.backgroundColor = jumColor;
//         donateAbike.style.backgroundColor = donateColor;
//         volanteerBtn.style.backgroundColor = volColor;
        
    
// }


// console.log(donateAbike);


// --------------------------------------------------------
//         --    2nd way ---
// ----------------------------------------------
// blueBtn.addEventListener('click', () => {
//     jumbotron.style.backgroundColor = "#588fbd";
//     donateAbike.style.backgroundColor = "#ffa500";
//     volanteerBtn.style.backgroundColor = "black";
//     volanteerBtn.style.color = "white";
    
// });
// const orangeBtn = document.querySelector("#orangeBtn");
// console.log(orangeBtn);

// orangeBtn.addEventListener('click', orangeBtnFunc);

// function orangeBtnFunc(){
    
//         jumbotron.style.backgroundColor = "#f0ad4e";
//         donateAbike.style.backgroundColor = "#5751fd";
//         volanteerBtn.style.backgroundColor = "#31b0d5";
//         volanteerBtn.style.color = "white";

// }

// let greenBtn = document.getElementById('greenBtn');

// greenBtn.addEventListener('click', ()=> {
//     jumbotron.style.backgroundColor = '#87ca8a';
//     donateAbike.style.backgroundColor = "black";
//     volanteerBtn.style.backgroundColor = "#8c9c08"
// })


// --------------------------------------------------------------

// Part 2





let submitBtn = document.querySelector('form');

let emailNode = document.getElementById('exampleInputEmail1');
let nameNode = document.getElementById("example-text-input");
let textAreaNode  = document.querySelector('#exampleTextarea');

emailNode.addEventListener('change', changeBGCcolor);
nameNode.addEventListener('change', changeBGCcolor);
textAreaNode.addEventListener('change', changeBGCcolor);

    function changeBGCcolor(event){
    event.target.classList.remove('redBGCcolor');
    event.target.classList.add('greenBGCcolor');

    }

  submitBtn.addEventListener('submit', checkUserInPut)
  
 
    function checkUserInPut (e){
      e.preventDefault();


    let isEmailValid = emailNode.value.trim().includes('@');
    let isNameAreaValid = nameNode.value.trim().length > 0;
    let isTextAreaValid = textAreaNode.value.trim() > 0;
    

    if(isEmailValid && isNameAreaValid && isTextAreaValid) {

      emailNode.value = "";
      nameNode.value = "";
      textAreaNode.value = "";
    
       emailNode.classList.remove('redBGCcolor');
       emailNode.classList.add('greenBGCcolor');

       nameNode.classList.remove('redBGCcolor');
       nameNode.classList.add('greenBGCcolor');
     
       textAreaNode.classList.remove('redBGCcolor');
       textAreaNode.classList.add('greenBGCcolor');

       alert('Thanks for submitting the form.');

    }else{

      if(!isTextAreaValid){
        textAreaNode.classList.remove('greenBGCcolor');
        textAreaNode.classList.add('redBGCcolor');
      }
      
      if(!isEmailValid){
        
      emailNode.classList.remove('greenBGCcolor');
       emailNode.classList.add('redBGCcolor');
      }

      if(!isNameAreaValid){
        nameNode.classList.remove('greenBGCcolor');
        nameNode.classList.add('redBGCcolor');
      }
     
       
    }

    }

   
  


    // if(emailNode.length < 3 && isEmailContain < 0){
    // console.log('Not a valid email');
    // }else{
    //     console.log('its valid');
    // }

// submitButton.addEventListener('click', () => {
    
    
//         if(emailNode.length < 3 && isEmailContain < 0){
//             console.log('Not a valid email');
//         }
//         else if(emailNode === "" || emailNode === null){
//             console.log('Email can not be empty.');
//         }
       
// })
