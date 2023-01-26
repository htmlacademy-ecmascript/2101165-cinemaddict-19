import {getRandomFilm} from '../mock/movie.js';

const FILM_COUNT = 5;

export default class FilmModel {
  films = Array.from({length: FILM_COUNT}, getRandomFilm);
  film = getRandomFilm();

  getFilms() {
    return this.films;
  }

  getOneFilm() {
    return this.film;
  }
}
