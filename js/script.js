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


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы ужу посмотрели?', '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы ужу посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов")
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log("Классический зритель");
		} else if (personalMovieDB.count > 30) {
			console.log('вы киноман');
		} else {
			console.log('Error');
		}
	},
	showMyDB: function () {
		if (personalMovieDB.privat == false) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		//for (let i = 0; i < 3; i++) {

		//let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

		//if (genre === "" || genre == null) {
		//console.log("Ошибка");
		//i--;
		//} else {
		//	personalMovieDB.genres[i] = genre;
		//}
		for (let i = 1; i < 2; i++) {
			let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

			if (genres === "" || genres == null) {
				console.log("Ошибка");
				i--;
			} else {
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres.sort();
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i + 1} - это ${item}`);
		});
	}
};

/*const a = prompt('Один из последих просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', ''),
		c = prompt('Один из последих просмотренных фильмов?', ''),
		d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;*/


