"use strict"; // говорит, что мы работаем в новом режиме 6 
//let number = 5;
//const leftBorderWidth = 1;

//number = 10;
//console.log(number);

//alert('save me');

//const answers = [];

//const category = 'toys';

/*let incr = 10,
	 decr = 10;

incr++;
incr--;*/

const numberOfFilms = +prompt('Сколько фильмов вы ужу посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

/*const a = prompt('Один из последих просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', ''),
		c = prompt('Один из последих просмотренных фильмов?', ''),
		d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;*/

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последих просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log("Классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log('вы киноман');
} else {
	console.log('Error');
}

console.log(personalMovieDB);