import FilmCardView from '../view/film-card-view.js';
import PopupWholeView from '../view/popup-whole-view.js';
import {render, replace, remove} from '../framework/render.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  OPEN: 'OPEN',
};

export default class FilmPresenter {
  #filmListContainer = null;

  #filmCardComponent = null;
  #filmPopupComponent = null;

  #movie = null;
  #comments = null;

  #handleFilmChange = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor ({filmListContainer, onFilmChange, onModeChange}) {
    this.#filmListContainer = filmListContainer;
    this.#handleFilmChange = onFilmChange;
    this.#handleModeChange = onModeChange;
  }

  init(movie, comments) {
    this.#movie = movie;
    this.#comments = comments;

    const prevFilmCardComponent = this.#filmCardComponent;
    const prevFilmPopupComponent = this.#filmPopupComponent;

    this.#filmCardComponent = new FilmCardView({
      movie: this.#movie,
      comments: this.#comments,
      onFilmClick: this.#openPopup,
      onWatchListClick: this.#handleWatchListClick,
      onWatchedClick: this.#handleWatchedClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#filmPopupComponent = new PopupWholeView({
      movie: this.#movie,
      comments: this.#comments,
      onButtonCloseClick: this.#closePopup,
      onWatchListClick: this.#handleWatchListClick,
      onWatchedClick: this.#handleWatchedClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    if (prevFilmCardComponent === null || prevFilmPopupComponent === null) {
      render(this.#filmCardComponent, this.#filmListContainer.element);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#filmCardComponent, prevFilmCardComponent);
    }

    if (this.#mode === Mode.OPEN) {
      replace(this.#filmPopupComponent, prevFilmPopupComponent);
    }

    remove(prevFilmCardComponent);
    remove(prevFilmPopupComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#closePopup();
    }
  };

  #openPopup = () => {
    this.#handleModeChange();

    document.body.appendChild(this.#filmPopupComponent.element);
    document.body.classList.add('hide-overflow');
    document.addEventListener('keydown', this.#escKeyDownHandler);

    this.#mode = Mode.OPEN;
  };

  #closePopup = () => {
    document.body.removeChild(this.#filmPopupComponent.element);
    document.body.classList.remove('hide-overflow');
    document.removeEventListener('keydown', this.#escKeyDownHandler);

    this.#mode = Mode.DEFAULT;
  };

  #handleWatchListClick = () => {
    this.#handleFilmChange({
      ...this.#movie,
      userDetails: {
        ...this.#movie.userDetails,
        watchlist: !this.#movie.userDetails.watchlist,
      },
    });
  };

  #handleWatchedClick = () => {
    this.#handleFilmChange({
      ...this.#movie,
      userDetails: {
        ...this.#movie.userDetails,
        alreadyWatched: !this.#movie.userDetails.alreadyWatched,
      },
    });
  };

  #handleFavoriteClick = () => {
    this.#handleFilmChange({
      ...this.#movie,
      userDetails: {
        ...this.#movie.userDetails,
        favorite: !this.#movie.userDetails.favorite,
      },
    });
  };

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#closePopup();
    }
  }
}
