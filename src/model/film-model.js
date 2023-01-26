import {getRandomFilm} from '../mock/movie.js';

const FILM_COUNT = 5;

export default class FilmModel {
  #films = Array.from({length: FILM_COUNT}, getRandomFilm);
  #film = getRandomFilm();

  get films() {
    return this.#films;
  }

  get oneFilm() {
    return this.#film;
  }
}
