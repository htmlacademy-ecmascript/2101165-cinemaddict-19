import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import ContainerFilmsBigView from '../view/container-films-big-view.js';
import ContainerFilmsMediumlView from '../view/container-films-medium-view.js';
import ContainerFilmsSmallView from '../view/container-films-small-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import PopupWholeView from '../view/popup-whole-view.js';
import EmptyView from '../view/empty-view.js';
import {render} from '../render.js';
import NoFilterView from '../view/no-filter-view.js';
import FooterStatisticView from '../view/footer-statistic-view.js';

let filmComments = [];

const FILM_COUNT_PER_STEP = 5;

const siteFooterStatisticElement = document.querySelector('.footer__statistics');

export default class FilmPresenter {
  #container = null;
  #model = null;

  #filterComponent = new FilterView();
  #SortComponent = new SortView();
  #containerBigComponent = new ContainerFilmsBigView();
  #containerMediumComponent = new ContainerFilmsMediumlView();
  #containerSmallComponent = new ContainerFilmsSmallView();
  #footerStatisticComponent = new FooterStatisticView();
  #showMoreButtonComponent = null;

  #films = [];
  #comments = [];
  #renderedFilmCount = FILM_COUNT_PER_STEP;

  constructor({container, filmModel}) {
    this.#container = container;
    this.#model = filmModel;
  }

  init() {
    this.#films = [...this.#model.films];
    this.#comments = [...this.#model.comments];

    if (this.#films.length > 0) {
      render(this.#filterComponent, this.#container);
      render(this.#SortComponent, this.#container);
      render(this.#containerBigComponent, this.#container);
      render(this.#containerMediumComponent, this.#containerBigComponent.element);
      render(this.#containerSmallComponent, this.#containerMediumComponent.element);

      for (let i = 0; i < Math.min(this.#films.length, FILM_COUNT_PER_STEP); i++) {
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

      if (this.#films.length > FILM_COUNT_PER_STEP) {
        this.#showMoreButtonComponent = new ShowMoreButtonView();
        render(this.#showMoreButtonComponent, this.#containerMediumComponent.element);

        this.#showMoreButtonComponent.element.addEventListener('click', this.#showMoreButtonClickHandler);
      }

      render(this.#footerStatisticComponent, siteFooterStatisticElement);

    } else {
      render(new NoFilterView(), this.#container);
      render(new EmptyView(), this.#container);
      siteFooterStatisticElement.innerHTML = '<p>0 movies inside</p>';
    }
  }

  #showMoreButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#films
      .slice(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((movie) => this.#renderFilm(movie, filmComments));

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#films.length) {
      this.#showMoreButtonComponent.element.remove();
      this.#showMoreButtonComponent.removeElement();
    }
  };

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
