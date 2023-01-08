import FilmListContainerView from '../view/film-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import {render} from '../render.js';

export default class FilmsPresenter {
  filmsComponent = new FilmListContainerView();

  constructor({filmsContainer}) {
    this.filmsContainer = filmsContainer;
  }

  init() {
    render(this.filmsComponent, this.filmsContainer);

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsComponent.getElement());
  }
}
