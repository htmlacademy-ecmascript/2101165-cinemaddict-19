import AbstractView from '../framework/view/abstract-view.js';

function createContainerFilmsBigTemplate() {
  return '<section class="films"></section>';
}

export default class ContainerFilmsBigView extends AbstractView {
  get template() {
    return createContainerFilmsBigTemplate();
  }
}
