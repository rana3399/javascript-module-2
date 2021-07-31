let blueBtn = document.getElementById("blueBtn");
let jumbotron = document.querySelector('.jumbotron');
let donateAbike = document.querySelector(".buttons .btn-primary");
let volanteerBtn = document.querySelector(".buttons .btn-secondary");


console.log(donateAbike);

blueBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#588fbd";
    donateAbike.style.backgroundColor = "#ffa500";
    volanteerBtn.style.backgroundColor = "black";
    volanteerBtn.style.color = "white";
    
});
const orangeBtn = document.querySelector("#orangeBtn");
console.log(orangeBtn);

orangeBtn.addEventListener('click', orangeBtnFunc);

function orangeBtnFunc(){
    
        jumbotron.style.backgroundColor = "#f0ad4e";
        donateAbike.style.backgroundColor = "#5751fd";
        volanteerBtn.style.backgroundColor = "#31b0d5";
        volanteerBtn.style.color = "white";

}

let greenBtn = document.getElementById('greenBtn');

greenBtn.addEventListener('click', ()=> {
    jumbotron.style.backgroundColor = '#87ca8a';
    donateAbike.style.backgroundColor = "black";
    volanteerBtn.style.backgroundColor = "#8c9c08"
})

// --------------------------------------------------------------

// Part 2

let name = document.getElementById("example-text-input");
console.log(name);

let form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', (e) => {
e.preventDefault();

})
