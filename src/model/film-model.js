import {getRandomFilm} from '../mock/movie.js';

const FILMS_COUNT = 5;

export default class FilmModel {
  films = Array.from({length: FILMS_COUNT}, getRandomFilm);

  getFilms() {
    return this.films;
  }
}
