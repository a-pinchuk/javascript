"use strict";

// const category = 'toys';

// console.log(`https://zabobon.com/${category}/4`);
// 12312313

// let incr = 10,
//     dect = 10;

// // incr++;
// // dect--;

// console.log(++incr);

// console.log(--dect);

// console.log(2 + 2 * 2 !== '6');

// const   isChecked = true,
//         isClose = false;

// console.log(isChecked || !isClose);
// g

// let number = 5;
// const leftBorderWidth = 1;git push -u origin main

// number = 10;
// console.log(number);

// let arra = ['pul', 'asd', 5, '123'];
// console.log(arra[2]);

// alert("hello");

// // const result = confirm('are u here>');
// // console.log(result);

// const answer = prompt('How old are u?', "18");
// console.log(answer);

// let massiv = [];

// massiv[0] = prompt('How old are u?', "");
// massiv[1] = prompt('How name is?', "");
// massiv[2] = prompt('privet?', "");

// document.write(massiv);

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);
const personalMovieDB  = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt('Один из последних просмотренных фильмов?', ''),
        b = +prompt('На сколько оцените его?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

// lastmovie: {
//     ''
// }