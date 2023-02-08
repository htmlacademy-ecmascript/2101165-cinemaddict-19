import {mockMovies} from '../mock/movie.js';
import {mockComments} from '../mock/comment.js';

// const FILM_COUNT = mockMovies.length;

export default class FilmModel {
  #films = mockMovies;
  #comments = mockComments;

  get films() {
    return this.#films;
  }

  get comments() {
    return this.#comments;
  }
}
