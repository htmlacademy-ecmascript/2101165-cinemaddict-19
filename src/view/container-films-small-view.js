import AbstractView from '../framework/view/abstract-view.js';

function createContainerFilmSmallTemplate() {
  return '<div class="films-list__container"></div>';
}

export default class ContainerFilmsSmallView extends AbstractView {
  get template() {
    return createContainerFilmSmallTemplate();
  }
}
