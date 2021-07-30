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

// let p_tagName = document.getElementsByTagName('p');
// console.log(p_tagName);

// let firstDivElement = document.querySelector('div');
// console.log(firstDivElement);

// const jumbotron = document.querySelector('#jumbotron-text');
// console.log(jumbotron);

// let primary= document.querySelector('.primary-content');
// let pElements = primary.querySelectorAll('p');
// console.log(pElements);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up 
with the text "Thanks for visiting Bikes for Refugees!"
*/

// document.getElementById('alertBtn').addEventListener('click', function(){
    
//     alert('"Thanks for visiting Bikes for Refugees!"');

// });


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
    // let changeColor = document.querySelector('#bgrChangeBtn');

    // changeColor.addEventListener('click', function () {
    //     document.body.style.backgroundColor = 'green';

    // });

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should 
be added inside the section that says “LEARN MORE”
*/

//  document.getElementById('addTextBtn').addEventListener('click', function(){
    
// var node = document.createElement("P");  
// var textNode = document.createTextNode('“LEARN MORE”') ;
//  node.appendChild(textNode);  // p<>LEARN MORE
//  return document.querySelector('.buttons').appendChild(node);   

// });

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

 var x = document.querySelectorAll("a");
   x.forEach((tag) => {
       tag.style.fontSize = "xx-large"
   });
//    document.getElementsByTagName("a");
    
    
}


// document.getElementById('largerLinksBtn').addEventListener('click', function(){
//    var span = document.querySelectorAll('a');
//    span.style.fontSize = 'xx-large';
//    // document.body.a.style.fontSize = '30px';
// })




/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create 
a new paragraph in the "LEARN MORE" section. Also clear the text inside the input field
*/
// document.getElementById("addArticleBtn").addEventListener('click', newParagraph);

// function newParagraph(){
//     let tag = document.createElement('P');
//     let text = document.createTextNode('This is a new a paragraph !!');
    
//     tag.appendChild(text);
//     let targetDiv = document.getElementById('mainArticles');
//     let inputAtFirst = targetDiv.insertBefore(tag, targetDiv.childNodes[0]);
//     inputAtFirst.style.color = 'red';
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

//     //  var finalresult = "'" + result + "'";
//      document.body.style.backgroundColor = result ;
//      console.log(result);
    //  console.log(finalresult);

   
// });

// var randomize = Math.floor(Math.random()*myColors.length);





// var colorsArray = ['red', 'green'];
// // document.getElementById('bgrChangeBtn').addEventListener('click', randomColorChange);

// function randomColorChange(){
//    var rotateColors = colorsArray.map(color => color = color);
    
// console.log(rotateColors);
// }

// randomColorChange();
