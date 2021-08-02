let blueBtn = document.getElementById("blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
let jumbotron = document.querySelector('.jumbotron');
let donateAbike = document.querySelector(".buttons .btn-primary");
let volanteerBtn = document.querySelector(".buttons .btn-secondary");
const greenBtn = document.getElementById('greenBtn');

// var blueBtnColors = ['red', 'black', 'green'];
// var anotherColors = ['blue',  'green', 'black',];


orangeBtn.addEventListener('click', ()=> changeColor('#f0ad4e', '#5751fd', '#31b0d5'));
blueBtn.addEventListener('click', () => changeColor ('#588fbd', '#ffa500', 'white'));
greenBtn.addEventListener('click', ()=> changeColor( '#87ca8a', ' black', '#8c9c08'));

function changeColor(jumColor, donateColor, volColor){
        jumbotron.style.backgroundColor = jumColor;
        donateAbike.style.backgroundColor = donateColor;
        volanteerBtn.style.backgroundColor = volColor;
        
    
}


console.log(donateAbike);


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

let emailNode = document.getElementById('exampleInputEmail1');
let nameNode = document.getElementById("example-text-input");
let textAreaNode  = document.getElementsById('exampleTextarea')
let form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (e) => {
    let massages = [];
    if(emailNode.value === "" || emailNode.value === null){
        massages.push('Email can not be empty.');
    }


e.preventDefault();

   
})
