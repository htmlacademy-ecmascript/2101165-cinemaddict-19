import {createElement} from '../render.js';
import {convertDateYear, getRandomArrayElement, transformDuration} from '../utils.js';

function createFilmCardTemplate(movie) {
  const {
    id,
    comments,
    filmInfo: {
      title,
      alternativeTitle,
      totalRating,
      poster,
      ageRating,
      director,
      writers,
      actors,
      release: {
        date,
        releaseCountry
      },
      duration,
      genre,
      description
    },
    userDetails: {
      watchlist,
      alreadyWatched,
      watchingDate,
      favorite
    }
  } = movie;

  // const relDate = convertDateYear(date);
  // const arrGenre = genre.split(' ');
  // const correctDuration = transformDuration(duration);

  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${relDate}</span>
        <span class="film-card__duration">${correctDuration}</span>
        <span class="film-card__genre">${arrGenre[0]}</span>
      </p>
      <img src="${poster}" alt="Poster for ${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <span class="film-card__comments">${comments.length} Comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
}


export default class FilmCardView {
  constructor(movie) {
    this.movie = movie;
  }

  getTemplate() {
    return createFilmCardTemplate(this.movie);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
