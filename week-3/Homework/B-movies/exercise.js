/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/


var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
let newDiv = document.createElement('div');
let allMovie = document.getElementById('all-movies');
allMovie.appendChild(newDiv);

function showMovies (){
  newDiv.innerHTML = "";
  movies.forEach((movie) =>{

    let pEl = document.createElement('p');
    pEl.innerHTML = `${movie.title}, Directed by ${movie.director}`;
    newDiv.appendChild(pEl);
  });

  document.querySelector('#movies-number').innerHTML = movies.length
}

  showMovies ()


// create a new movie object for your favorite movie

var newlyAddedMovie = {
    title: "The Batman",
    director: "Stephen S.",
    type: "Action",
    haveWatched: true,
}

// create addMovies function
function addMovie(movie){
  movies.push(movie);
}

setTimeout(showMovies, 1000);

setTimeout(() => {
  addMovie(newlyAddedMovie);
  showMovies();
}, 3000) 


// create addMovies function
let jumbotron = document.querySelector(".jumbotron");
let form = document.createElement("form");


for(let index = 1; index < 5; index++){
  let input = document.createElement('input');
  form.appendChild(input);

  input.id = `input${index}`;

  if(input.id === "input1"){
    input.placeholder = "Enter movie title";
  }
  else if(input.id === "input2"){
    input.placeholder = "Enter movie director";
  }
  else if(input.id === "input3"){
    input.placeholder = "Enter movie type";
  }
  else if(input.id === "input4"){
    input.placeholder = "Watched Movie (T/F)";
  }

}

let inputButton = document.createElement('button');
inputButton.innerHTML = 'save';

form.appendChild(inputButton);
form.addEventListener("submit", saveMovie);
jumbotron.appendChild(form);

function saveMovie(event){
  event.preventDefault();

    let addingAnewMovie = {
      title: document.querySelector('#input1').value,
      director: document.querySelector('#input2').value,
      type: document.querySelector('#input3').value,
      haveWatched: document.querySelector('#input4').value,
    };

    addMovie(addingAnewMovie);
  showMovies();

  document.querySelector('#input1').value = '';
  document.querySelector('#input2').value = '';
  document.querySelector('#input3').value = '';
  document.querySelector('#input4').value = '';
 
}
//jumbotron.innerHTML = addingAnewMovie;
// saveMovie(addingAnewMovie);


