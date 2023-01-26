import {createElement} from '../render.js';
import {convertDateFull, transformDuration } from '../utils.js';

function createGenresTemplate(genre) {
  return `<td class="film-details__term">Genre${genre.length > 1 ? 's' : ''}</td>
    <td class="film-details__cell">
    <span class="film-details__genre">${genre[0]}</span>
    <span class="film-details__genre">${genre[1] !== undefined ? genre[1] : ''}</span>
    <span class="film-details__genre">${genre[2] !== undefined ? genre[2] : ''}</span>
  </td>`;
}

function createPopupFilmTemplate(movie) {

  const {
    // id,
    // comments,
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
    // userDetails: {
    //   watchlist,
    //   alreadyWatched,
    //   watchingDate,
    //   favorite
    // }
  } = movie;

  const relDate = convertDateFull(date);
  const corrDuration = transformDuration(duration);
  const genreTemplate = createGenresTemplate(genre);


  return `<div class="film-details__top-container">
    <div class="film-details__close">
      <button class="film-details__close-btn" type="button">close</button>
    </div>
    <div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="${poster}" alt="Poster for ${title}">

        <p class="film-details__age">${ageRating}+</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${title}</h3>
            <p class="film-details__title-original">${alternativeTitle}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${totalRating}</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${writers}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${actors}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${relDate}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Duration</td>
            <td class="film-details__cell">${corrDuration}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">${releaseCountry}</td>
          </tr>
          <tr class="film-details__row">

            ${genreTemplate}

          </tr>
        </table>

        <p class="film-details__film-description">
          ${description}
        </p>
      </div>
    </div>

    <section class="film-details__controls">
      <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
      <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
      <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
    </section>
  </div>`;
}

export default class PopupFilmView {
  #element = null;
  #movie = null;

  constructor({movie}) {
    this.#movie = movie;
  }

  get template() {
    return createPopupFilmTemplate(this.#movie);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
