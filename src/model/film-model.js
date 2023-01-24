import {getRandomFilm} from '../mock/movie.js';

const FILM_COUNT = 5;

export default class TasksModel {
  films = Array.from({length: FILM_COUNT}, getRandomFilm);

  getFilms() {
    return this.films;
  }
}
