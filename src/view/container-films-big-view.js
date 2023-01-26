import {createElement} from '../render.js';

function createContainerFilmsBigTemplate() {
  return '<section class="films"></section>';
}

export default class ContainerFilmsBigView {
  #element = null;

  get template() {
    return createContainerFilmsBigTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
