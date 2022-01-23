"use strick";
let numberOlfilms;
function start() {
    numberOlfilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (numberOlfilms == '' || numberOlfilms == null || isNaN(numberOlfilms)) {
        numberOlfilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}
start();
let personalMovieDB = {
    count: numberOlfilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};
function rememberMyfilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотреных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a == '' || b == '' || a == null || b == null || a.string > 50 || b.string > 50) {
            console.log('error');
            i--;
        } else {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }

    }

}
rememberMyfilms();
function detect (){
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы посмотрели довольно много фильмов');
    } else if (personalMovieDB.count >= 30) {
        alert('Ви киноман');
    } else {
        alert('Что-то пошло не так');
    }
}
detect();
function showMyDB(status){
    if(!status)
    {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
function writeYourGenres()
{   
    for(let i=0;i<3;i++)
    {
        const a = prompt(`Ваш любимый жанр под номером ${i+1}?`);
        personalMovieDB.genres[i]=a;
    }
}
writeYourGenres();
console.log(personalMovieDB.genres);