import AbstractView from '../framework/view/abstract-view.js';
import {convertDateFull, transformDuration, convertDateForComment} from '../utils.js';

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
    userDetails: {
      watchlist,
      alreadyWatched,
      //   watchingDate,
      favorite
    }
  } = movie;

  const relDate = convertDateFull(date);
  const corrDuration = transformDuration(duration);
  const genreTemplate = createGenresTemplate(genre);

  const isInWatchlist = watchlist
    ? 'film-details__control-button--active'
    : '';

  const isWatched = alreadyWatched
    ? 'film-details__control-button--active'
    : '';

  const isFavorite = favorite
    ? 'film-details__control-button--active'
    : '';


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
      <button type="button" class="film-details__control-button film-details__control-button--watchlist ${isInWatchlist}" id="watchlist" name="watchlist">Add to watchlist</button>
      <button type="button" class="film-details__control-button film-details__control-button--watched ${isWatched}" id="watched" name="watched">Already watched</button>
      <button type="button" class="film-details__control-button film-details__control-button--favorite${isFavorite}" id="favorite" name="favorite">Add to favorites</button>
    </section>
  </div>`;
}

function createCommentTemplate(comments) {
  let filmComments = '';
  comments.forEach((element)=>{
    filmComments += `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${element.emotion}.png" width="55" height="55" alt="emoji-smile">
  </span>
  <div>
    <p class="film-details__comment-text">${element.comment}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${element.author}</span>
      <span class="film-details__comment-day">${convertDateForComment(element.date)}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
  </li>`;
  });

  return filmComments;

}

function createNewCommentTemplate() {
  return `<form class="film-details__new-comment" action="" method="get">
  <div class="film-details__add-emoji-label"></div>

  <label class="film-details__comment-label">
    <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
  </label>

  <div class="film-details__emoji-list">
    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
    <label class="film-details__emoji-label" for="emoji-smile">
      <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
    </label>

    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
    <label class="film-details__emoji-label" for="emoji-sleeping">
      <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
    </label>

    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
    <label class="film-details__emoji-label" for="emoji-puke">
      <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
    </label>

    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
    <label class="film-details__emoji-label" for="emoji-angry">
      <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
    </label>
  </div>
</form>`;
}

function createPopupWholeTemplate(movie, commentsList) {

  const {
    // id,
    comments,
    // filmInfo: {
    //   title,
    //   alternativeTitle,
    //   totalRating,
    //   poster,
    //   ageRating,
    //   director,
    //   writers,
    //   actors,
    //   release: {
    //     date,
    //     releaseCountry
    //   },
    //   duration,
    //   genre,
    //   description
    // },
    // userDetails: {
    //   watchlist,
    //   alreadyWatched,
    //   watchingDate,
    //   favorite
    // }
  } = movie;

  const popupFilmTemplate = createPopupFilmTemplate(movie);
  const commentTemplate = createCommentTemplate(commentsList);
  const newCommentTemplate = createNewCommentTemplate();

  return `<section class="film-details">
    <div class="film-details__inner">

      ${popupFilmTemplate}

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

          <ul class="film-details__comments-list">

          ${commentTemplate}

          </ul>

          ${newCommentTemplate}

        </section>
      </div>
    </div>
  </section>`;
}

export default class PopupWholeView extends AbstractView {
  #movie = null;
  #comments = [];
  #handleClickOnButtonClose = null;
  #handleClickOnWatchList = null;
  #handleClickOnWatched = null;
  #handleClickOnFavorite = null;

  constructor({movie, comments, onButtonCloseClick, onWatchListClick, onWatchedClick, onFavoriteClick}) {
    super();
    this.#movie = movie;
    this.#comments = comments;
    this.#handleClickOnButtonClose = onButtonCloseClick;
    this.#handleClickOnWatchList = onWatchListClick;
    this.#handleClickOnWatched = onWatchedClick;
    this.#handleClickOnFavorite = onFavoriteClick;


    this.element.querySelector('.film-details__close-btn').addEventListener('click', this.#onButtonCloseClickHandler);

    this.element.querySelector('.film-details__control-button--watchlist').addEventListener('click', this.#onWatchListClickHandler);

    this.element.querySelector('.film-details__control-button--watched').addEventListener('click', this.#onWatchedClickHandler);

    // this.element.querySelector('.film-details__control-button--favorite').addEventListener('click', this.#onFavoriteClickHandler);
  }

  get template() {
    return createPopupWholeTemplate(this.#movie, this.#comments);
  }

  #onButtonCloseClickHandler = () => {
    this.#handleClickOnButtonClose();
  };

  #onWatchListClickHandler = () => {
    this.#handleClickOnWatchList();
  };

  #onWatchedClickHandler = () => {
    this.#handleClickOnWatched();
  };

  #onFavoriteClickHandler = () => {
    this.#handleClickOnFavorite();
  };
}
