import {getRandomFilm} from '../mock/movie.js';
import {mockComments} from '../mock/comment.js';

const FILM_COUNT = 5;

export default class FilmModel {
  #films = Array.from({length: FILM_COUNT}, getRandomFilm);
  #film = getRandomFilm();
  #comments = mockComments;

  get films() {
    return this.#films;
  }

  get oneFilm() {
    return this.#film;
  }

  get comments() {
    return this.#comments;
  }
}
