import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import ContainerFilmsBigView from '../view/container-films-big-view.js';
import ContainerFilmsMediumlView from '../view/container-films-medium-view.js';
import ContainerFilmsSmallView from '../view/container-films-small-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import PopupWholeView from '../view/popup-whole-view.js';
import EmptyView from '../view/empty-view.js';
import {render} from '../framework/render.js';
import NoFilterView from '../view/no-filter-view.js';
import FooterStatisticView from '../view/footer-statistic-view.js';
import {generateFilter} from '../mock/filter.js';

let filmComments = [];

const FILM_COUNT_PER_STEP = 5;

const bodyElement = document.querySelector('body');
const siteFooterStatisticElement = document.querySelector('.footer__statistics');

export default class FilmPresenter {
  #container = null;
  #model = null;

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
      const slicedFilms = this.#films.slice(0, Math.min(this.#films.length, FILM_COUNT_PER_STEP));

      this.#renderFilter();

      render(this.#SortComponent, this.#container);
      render(this.#containerBigComponent, this.#container);
      render(this.#containerMediumComponent, this.#containerBigComponent.element);
      render(this.#containerSmallComponent, this.#containerMediumComponent.element);

      slicedFilms.forEach((slicedFilm) => {
        filmComments = [];
        slicedFilm.comments.forEach((id) => {
          this.#comments.forEach((comment) => {
            if (comment.id === id) {
              filmComments.push(comment);
            }
          });
        });
        this.#renderFilm(slicedFilm, filmComments);
      });

      if (this.#films.length > FILM_COUNT_PER_STEP) {
        this.#showMoreButtonComponent = new ShowMoreButtonView({onClick: this.#hanleShowMoreButtonClick});
        render(this.#showMoreButtonComponent, this.#containerMediumComponent.element);
      }

      render(this.#footerStatisticComponent, siteFooterStatisticElement);

    } else {
      render(new NoFilterView(), this.#container);
      render(new EmptyView(), this.#container);
      siteFooterStatisticElement.innerHTML = '<p>0 movies inside</p>';
    }
  }

  #hanleShowMoreButtonClick = () => {
    this.#films
      .slice(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => {
        filmComments = [];
        film.comments.forEach((id) => {
          this.#comments.forEach((comment) => {
            if (comment.id === id) {
              filmComments.push(comment);
            }
          });
        });
        this.#renderFilm(film, filmComments);
      });

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#films.length) {
      this.#showMoreButtonComponent.element.remove();
      this.#showMoreButtonComponent.removeElement();
    }
  };

  #renderFilm(movie, comments) {

    const filmComponent = new FilmCardView({
      movie,
      onFilmClick: () => {
        openPopup(); // eslint-disable-line
        document.addEventListener('keydown', escKeyDownHandler); // eslint-disable-line
      }
    });

    const popupComponent = new PopupWholeView({
      movie,
      comments,
      onButtonCloseClick: () => {
        closePopup(); // eslint-disable-line
        document.removeEventListener('keydown', escKeyDownHandler); // eslint-disable-line
      }
    });

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

    render(filmComponent, this.#containerSmallComponent.element);
  }

  #renderFilter () {
    const filters = generateFilter(this.#films);
    render(new FilterView({filters}), this.#container);
  }
}
