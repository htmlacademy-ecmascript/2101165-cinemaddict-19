import ContainerFilmsBigView from '../view/container-films-big-view.js';
import ContainerFilmsMediumlView from '../view/container-films-medium-view.js';
import ContainerFilmsSmallView from '../view/container-films-small-view.js';
import FilmCardView from '../view/film-card-view.js';
import PopupBigContainerView from '../view/popup-big-container-view.js';
import PopupMediumContainerView from '../view/popup-medium-container-view.js';
import PopupFilmView from '../view/popup-film-view.js';
import CommentsContainerView from '../view/comments-container-view.js';
import CommentWrapView from '../view/comment-wrap-view.js';
import CommentListView from '../view/comment-list-view.js';
import CommentsTitleView from '../view/comments-title-view.js';
import CommentView from '../view/comment-view.js';
import NewCommentView from '../view/new-comment-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import PopupWholeView from '../view/popup-whole-view.js';
import {render} from '../render.js';

export default class FilmPresenter {
  #container = null;
  #model = null;

  #containerBigComponent = new ContainerFilmsBigView();
  #containerMediumComponent = new ContainerFilmsMediumlView();
  #containerSmallComponent = new ContainerFilmsSmallView();


  #films = [];
  #movie = null;
  #comments = [];

  constructor({container, filmModel}) {
    this.#container = container;
    this.#model = filmModel;
  }

  init() {
    this.#films = [...this.#model.films];
    this.#movie = this.#model.oneFilm;
    this.#comments = [...this.#model.comments];

    render(this.#containerBigComponent, this.#container);
    render(this.#containerMediumComponent, this.#containerBigComponent.element);
    render(this.#containerSmallComponent, this.#containerMediumComponent.element);

    for (let i = 0; i < this.#films.length; i++) {
      this.#renderFilm(this.#films[i]);
    }

    render(new ShowMoreButtonView(), this.#containerMediumComponent.element);
  }

  #renderFilm(movie, comments) {
    const bodyElement = document.querySelector('body');
    const filmComponent = new FilmCardView({movie});
    const popupComponent = new PopupWholeView({movie, comments});

    const openPopup = () => {
      bodyElement.appendChild(popupComponent.element);
      bodyElement.classList.add('hide-overflow');
      render(popupComponent, bodyElement);


      // for (let i = 0; i < this.#comments.length; i++) {
      //   this.render(commentComponent, this.#containerSmallCommentComponent.element);
      // }

    };

    const closePopup = () => {
      // bodyElement.removeChild(popupComponent);
      bodyElement.classList.remove('hide-overflow');
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closePopup();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    filmComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
      openPopup();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    popupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
      closePopup();

      document.removeEventListener('keydown', escKeyDownHandler);
    });

    render(filmComponent, this.#containerSmallComponent.element);
  }
}
