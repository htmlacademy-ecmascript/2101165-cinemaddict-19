import AbstractView from '../framework/view/abstract-view.js';

function createContainerFilmsMediumTemplate() {
  return '<section class="films-list"></section>';
}

export default class ContainerFilmsMediumView extends AbstractView {
  get template() {
    return createContainerFilmsMediumTemplate();
  }
}
