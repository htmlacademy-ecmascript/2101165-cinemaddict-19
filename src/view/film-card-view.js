import {createElement} from '../render.js';

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
        releaseCountry,
      },
      duration,
      genre,
      description,
    },
    userDetails: {
      watchlist,
      alreadyWatched,
      watchingDate,
      favorite
    }
  } = movie;

  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${title}</p>
      <p class="film-card__info">
        <span class="film-card__year">${title}</span>
        <span class="film-card__duration">${title}</span>
        <span class="film-card__genre">${title}</span>
      </p>
      <img src="${title}" alt="Poster for ${title}" class="film-card__poster">
      <p class="film-card__description">${title}</p>
      <span class="film-card__comments">${title} Comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
}

export default class FilmCardView {
  constructor({movie}) {
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
