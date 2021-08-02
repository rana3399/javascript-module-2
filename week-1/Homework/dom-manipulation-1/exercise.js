/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

let p_tagName = document.getElementsByTagName('p');
console.log(p_tagName);

let firstDivElement = document.querySelector('div');
console.log(firstDivElement);

const jumbotron = document.querySelector('#jumbotron-text');
console.log(jumbotron);

let primary= document.querySelectorAll('.primary-content p');
// let pElements = primary.querySelectorAll('p');
console.log(primary);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up 
with the text "Thanks for visiting Bikes for Refugees!"
*/

document.getElementById('alertBtn').addEventListener('click', function(){
    
    alert('"Thanks for visiting Bikes for Refugees!"');

});


// --------------2ND WAY-------

// document.querySelector('#alertBtn').onclick = abc;
// function abc(){
//     alert('"Thanks for visiting Bikes for Refugees!"');
// }



/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
    let changeColor = document.querySelector('#bgrChangeBtn');

    changeColor.addEventListener('click', function () {
        document.body.style.backgroundColor = 'green';

    });

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should 
be added inside the section that says “LEARN MORE”
*/

 document.getElementById('addTextBtn').addEventListener('click', function(){
    
var node = document.createElement("P");  //p tag created 
var textNode = document.createTextNode('“A new paragraph has been added to Learn More area for task 4”') ; // text added 
 node.appendChild(textNode);  // p<>LEARN MORE
 return document.querySelector('#mainArticles').prepend(node);   

});

// --------------------------------------------------------

            // -------2nd Way---------------

// document.getElementById('addTextBtn').onclick = myParagrarhFunc;

// function myParagrarhFunc(){
//     var node = document.createElement("P");  
//  var textNode = document.createTextNode('“LEARN MORE”');
//  node.appendChild(textNode); // p<>LEARN MORE 
//   return document.getElementById('addTextBtn').appendChild(node);
// }


 

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

document.getElementById('largerLinksBtn').addEventListener('click', myFunc);

function myFunc(){

 var selectAllTags = document.querySelectorAll("a");
 selectAllTags.forEach((tag) => {
       tag.classList.add("bigSize");
   });
    
    
}



/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create 
a new paragraph in the "LEARN MORE" section. Also clear the text inside the input field
*/


var targetDiv = document.getElementById('addArticleBtn');
  targetDiv.addEventListener('click', () => {

    
    var newElementP = document.createElement("P");
    var innText = document.querySelector('#input-p').value;
    newElementP.textContent = innText;

    var learnSection = document.querySelector('#mainArticles');
    
    learnSection.prepend(newElementP);

    document.getElementById('input-p').value = "";
    
    

  });



// ----------------------------------------------------------------


// var targetDiv = document.getElementById('addArticleBtn').addEventListener('click', newParagraph);
// function newParagraph(){
//     var newTag = document.createElement('P');
//     var newText = document.createTextNode('This is a new a paragraph !!');
//     newTag.appendChild(newText);
//     console.log(newTag);

// var inputAtFirst = document.getElementById('mainArticles');
//   let result = inputAtFirst.insertBefore(newTag, inputAtFirst.childNodes[0]);
// result.style.color = 'red';
// }

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the 
background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/



// document.getElementById('bgrChangeBtn').addEventListener('click', function(){

//     var arrColors = ['red', 'green', 'blue', 'black', 'yellow'];
//     var randomColor =   Math.floor(Math.random() * arrColors.length);

        
//      var result = arrColors[randomColor];

//      console.log()

   
//      document.body.style.backgroundColor = result ;
//      console.log(result);
    

   
// });

// -------------------------------------------------------


var arrColors = ['red', 'green', 'blue', 'black', 'yellow'];
let index = 0;
document.getElementById('bgrChangeBtn').addEventListener('click', colorFunc);

function colorFunc(){

    
    if(index > (arrColors.length - 1)){
        index = 0;
    }

    document.body.style.backgroundColor = arrColors[index];
    index++;
}
        
