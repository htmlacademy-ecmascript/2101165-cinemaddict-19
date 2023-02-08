import AbstractView from '../framework/view/abstract-view.js';
import {convertDateYear, transformDuration} from '../utils.js';

function createFilmCardTemplate(movie) {

  const {
    comments,
    filmInfo: {
      title,
      totalRating,
      poster,
      release: {
        date
      },
      duration,
      genre,
      description,
    },
    userDetails: {
      watchlist,
      alreadyWatched,
      // watchingDate,
      favorite
    }
  } = movie;

  const year = convertDateYear(date);
  const correctDuration = transformDuration(duration);

  const isInWatchlist = watchlist
    ? 'film-card__controls-item--active'
    : '';

  const isWatched = alreadyWatched
    ? 'film-card__controls-item--active'
    : '';

  const isFavorite = favorite
    ? 'film-card__controls-item--active'
    : '';

  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${correctDuration}</span>
        <span class="film-card__genre">${genre[0]}</span>
      </p>
      <img src="${poster}" alt="Poster for ${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <span class="film-card__comments">${comments.length} Comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${isInWatchlist}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${isWatched}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${isFavorite}" type="button">Mark as favorite</button>
    </div>
  </article>`;
}

export default class FilmCardView extends AbstractView {
  #movie = null;
  #handleClickOnFilm = null;
  #onWatchListClick = null;
  #onWatchedClick = null;
  #onFavoriteClick = null;

  constructor({movie, onFilmClick, onWatchListClick, onWatchedClick, onFavoriteClick}) {
    super();
    this.#movie = movie;
    this.#handleClickOnFilm = onFilmClick;
    this.#onWatchListClick = onWatchListClick;
    this.#onWatchedClick = onWatchedClick;
    this.#onFavoriteClick = onFavoriteClick;

    this.element.querySelector('.film-card__link').addEventListener('click', this.#onFilmClickHandler);

    this.element.querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click', this.#onWatchListClickHandler);

    this.element.querySelector('.film-card__controls-item--mark-as-watched').addEventListener('click', this.#onWatchedClickHandler);

    this.element.querySelector('.film-card__controls-item--favorite').addEventListener('click', this.#onFavoriteClickHandler);
  }

  get template() {
    return createFilmCardTemplate(this.#movie);
  }

  #onFilmClickHandler = () => {
    this.#handleClickOnFilm();
  };

  #onWatchListClickHandler = () => {
    this.#onWatchListClick();
  };

  #onWatchedClickHandler = () => {
    this.#onWatchedClick();
  };

  #onFavoriteClickHandler = () => {
    this.#onFavoriteClick();
  };
}
