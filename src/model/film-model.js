import {getRandomFilm} from '../mock/movie.js';
import {mockComments} from '../mock/comment.js';

const FILM_COUNT = 13;

export default class FilmModel {
  #films = Array.from({length: FILM_COUNT}, getRandomFilm);
  #comments = mockComments;

  get films() {
    return this.#films;
  }

  get comments() {
    return this.#comments;
  }
}
