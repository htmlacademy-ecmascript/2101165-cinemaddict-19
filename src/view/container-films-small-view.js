import {createElement} from '../render.js';

function createContainerFilmSmallTemplate() {
  return '<div class="films-list__container"></div>';
}

export default class ContainerFilmsSmallView {
  getTemplate() {
    return createContainerFilmSmallTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
