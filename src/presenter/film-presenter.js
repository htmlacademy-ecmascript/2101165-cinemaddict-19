import ContainerFilmsBigView from '../view/container-films-big-view.js';
import ContainerFilmsMediumlView from '../view/container-films-medium-view.js';
import ContainerFilmsSmallView from '../view/container-films-small-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import PopupWholeView from '../view/popup-whole-view.js';
import {render} from '../render.js';

let filmComments = [];

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
      filmComments = [];
      this.#films[i].comments.forEach((id) => {
        for(let j = 0; j < this.#comments.length; j++){
          if(this.#comments[j].id === id){
            filmComments.push(this.#comments[j]);
          }
        }
      });
      this.#renderFilm(this.#films[i], filmComments);
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
    };

    const closePopup = () => {
      bodyElement.removeChild(popupComponent.element);
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
