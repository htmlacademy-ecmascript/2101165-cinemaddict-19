import {createElement} from '../render.js';

function createContainerFilmsBigTemplate() {
  return '<section class="films"></section>';
}

export default class ContainerFilmsBigView {
  getTemplate() {
    return createContainerFilmsBigTemplate();
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
