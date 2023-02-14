// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie=> movie.director) ;
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let newArray = getMoviesFromDirector(array, director);
  let totalScore = newArray.reduce((total, next) => total + next.score, 0);
  let result = Number((totalScore / newArray.length).toFixed(2));
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let newArray = [...array];
  let orderedArray = newArray.sort((a, b) => a.title.localeCompare(b.title))
  let result= orderedArray.map(movie => movie.title).slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray = [...array]; 
  let result = newArray
    .sort((a, b) => {
      if (a.title < b.title) return -1;})
   .sort((a, b)=> a.year - b.year);
  
  console.log("EXERCICE 5 ->", result);
  return result;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let i = 0;
  let filtered = array.filter(movie => {
    if (movie.score !== '') return movie.genre[i] === category} );
  let totalScore = filtered.reduce((total, next) => total + next.score, 0);
  let result = Number((totalScore / filtered.length).toFixed(2));
  console.log("EXERCICE 6 ->", result);
  return result;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let newArray = JSON.parse(JSON.stringify(array));
 
  let result = newArray.map((movie) => {
    movie.duration = movie.duration.replace(/h|min/gi, '');
    let hours = parseInt(movie.duration.split(' ')[0]);
    let min = parseInt(movie.duration.split(' ')[1]);
    if (!min) min = 0;      
    movie.duration = parseInt(hours*60+min);
    return movie;
  });
   console.log("EXERCICE 7 ->", result);
  return result;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let newArray = array.filter(movie => movie.year === year);
 let max = Math.max(...newArray.map(o => o.score));
 // let max = newArray.reduce((best, next) => next.score > best ? next.score : best);
  let result = newArray.filter(movie => movie.score === max);
  console.log("EXERCICE 8 ->", result);
  return result;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

