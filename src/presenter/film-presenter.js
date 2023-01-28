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
import {render} from '../render.js';

export default class FilmPresenter {
  #container = null;
  #model = null;

  #containerBigComponent = new ContainerFilmsBigView();
  #containerMediumComponent = new ContainerFilmsMediumlView();
  #containerSmallComponent = new ContainerFilmsSmallView();

  #containerBigPopupComponent = new PopupBigContainerView();
  #containerMediumPopupComponent = new PopupMediumContainerView();
  #containerBigCommentComponent = new CommentsContainerView();
  #containerMediumCommentComponent = new CommentWrapView();
  #containerSmallCommentComponent = new CommentListView();

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
    this.#comments = this.#movie.comments;

    render(this.#containerBigComponent, this.#container);
    render(this.#containerMediumComponent, this.#containerBigComponent.element);
    render(this.#containerSmallComponent, this.#containerMediumComponent.element);

    for (let i = 0; i < this.#films.length; i++) {
      this.#renderFilm(this.#films[i]);
    }

    render(new ShowMoreButtonView(), this.#containerMediumComponent.element);
  }

  #renderFilm(movie) {
    const filmComponent = new FilmCardView({movie});
    // const popupComponent = new PopupFilmView({movie});
    const bodyElement = document.querySelector('body');

    const openPopup = () => {
      // bodyElement.appendChild(popupComponent);
      bodyElement.classList.add('hide-overflow');

      render(this.#containerBigPopupComponent, bodyElement);
      render(this.#containerMediumPopupComponent, this.#containerBigPopupComponent.element);
      render(new PopupFilmView({movie: this.#movie}), this.#containerMediumPopupComponent.element);
      render(this.#containerBigCommentComponent, this.#containerMediumPopupComponent.element);
      render(this.#containerMediumCommentComponent,this.#containerBigCommentComponent.element);
      render(new CommentsTitleView({comments: this.#comments}), this.#containerMediumCommentComponent.element);
      render(this.#containerSmallCommentComponent, this.#containerMediumCommentComponent.element);

      for (let i = 0; i < this.#comments.length; i++) {
        this.#renderComment(this.#comments[i]);
      }

      render(new NewCommentView(), this.#containerSmallCommentComponent.element);
    };

    // const closePopup = () => {
    //   bodyElement.removeChild(popupComponent);
    //   bodyElement.classList.remove('hide-overflow');
    // };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    filmComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
      openPopup();

      document.addEventListener('keydown', escKeyDownHandler);
    });

    // popupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
    //   closePopup();

    //   document.removeEventListener('keydown', escKeyDownHandler);
    // });

    render(filmComponent, this.#containerSmallComponent.element);
  }

  #renderComment(comment) {
    const commentComponent = new CommentView({comment});

    render(commentComponent, this.#containerSmallCommentComponent.element);
  }
}
