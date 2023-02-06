import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import ContainerFilmsBigView from '../view/container-films-big-view.js';
import ContainerFilmsMediumlView from '../view/container-films-medium-view.js';
import ContainerFilmsSmallView from '../view/container-films-small-view.js';
import FilmPresenter from './film-presenter.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import EmptyView from '../view/empty-view.js';
import {render, remove} from '../framework/render.js';
import NoFilterView from '../view/no-filter-view.js';
import FooterStatisticView from '../view/footer-statistic-view.js';
import {generateFilter} from '../mock/filter.js';
import {updateItem} from '../utils.js';

let filmComments = [];

const FILM_COUNT_PER_STEP = 5;

const siteFooterStatisticElement = document.querySelector('.footer__statistics');

export default class MainPresenter {
  #container = null;
  #model = null;

  #SortComponent = new SortView();
  #containerBigComponent = new ContainerFilmsBigView();
  #containerMediumComponent = new ContainerFilmsMediumlView();
  #containerSmallComponent = new ContainerFilmsSmallView();
  #footerStatisticComponent = new FooterStatisticView();
  #showMoreButtonComponent = null;
  #filmPresenter = new Map();

  // #page = 1;

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
      this.#renderSort();

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

      this.#renderFooterStatistic();

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
    const filmPresenter = new FilmPresenter({
      filmListContainer: this.#containerSmallComponent,
      onFilmChange: this.#handleFilmChange,
      onModeChange: this.#handleModeChange
    });

    filmPresenter.init(movie, comments);
    this.#filmPresenter.set(movie.id, filmPresenter);
  }

  #renderFilter () {
    const filters = generateFilter(this.#films);
    render(new FilterView({filters}), this.#container);
  }

  #renderSort () {
    render(this.#SortComponent, this.#container);
  }

  #renderFooterStatistic() {
    render(this.#footerStatisticComponent, siteFooterStatisticElement);
  }

  #handleFilmChange = (updatedFilm) => {
    this.#films = updateItem(this.#films, updatedFilm);

    filmComments = [];
    updatedFilm.comments.forEach((id) => {
      this.#comments.forEach((comment) => {
        if (comment.id === id) {
          filmComments.push(comment);
        }
      });
    });

    this.#filmPresenter.get(updatedFilm.id).init(updatedFilm, filmComments);
  };

  #handleModeChange = () => {
    this.#filmPresenter.forEach((presenter) => presenter.resetView());
  };

  #clearFilmsList() {
    this.#filmPresenter.forEach((presenter) => presenter.destroy());
    this.#filmPresenter.clear();
    // this.#page = 1;

    remove(this.#showMoreButtonComponent);
  }
}
