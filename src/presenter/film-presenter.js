import ContainerFilmsBigView from '../view/container-films-big-view.js';
import ContainerFilmsMediumlView from '../view/container-films-medium-view.js';
import ContainerFilmsSmallView from '../view/container-films-small-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import {render} from '../render.js';

export default class FilmPresenter {
  #container = null;
  #model = null;

  #containerBigComponent = new ContainerFilmsBigView();
  #containerMediumComponent = new ContainerFilmsMediumlView();
  #containerSmallComponent = new ContainerFilmsSmallView();

  #films = [];

  constructor({container, filmModel}) {
    this.#container = container;
    this.#model = filmModel;
  }

  init() {
    this.#films = [...this.#model.films];

    render(this.#containerBigComponent, this.#container);
    render(this.#containerMediumComponent, this.#containerBigComponent.element);
    render(this.#containerSmallComponent, this.#containerMediumComponent.element);

    for (let i = 0; i < this.#films.length; i++) {
      render(new FilmCardView({movie: this.#films[i]}), this.#containerSmallComponent.element);
    }

    render(new ShowMoreButtonView(), this.#containerMediumComponent.element);
  }
}
