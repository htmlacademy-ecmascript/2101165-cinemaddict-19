import ContainerFilmsSmallView from '../view/container-films-small-view.js';
import FilmCardView from '../view/film-card-view.js';
import {render} from '../render.js';

export default class FilmPresenter {

  containerSmallComponent = new ContainerFilmsSmallView();

  constructor({container, model}) {
    this.container = container;
    this.model = model;
  }

  init() {
    this.films = [...this.model.getFilms()];

    render(this.containerSmallComponent, this.container);

    for (let i = 0; i < this.films.length; i++) {
      render(new FilmCardView({movie: this.films[i]}), this.containerSmallComponent.getElement());
    }

  }
}
