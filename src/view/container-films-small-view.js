import {createElement} from '../render.js';

function createContainerFilmSmallTemplate() {
  return '<div class="films-list__container"></div>';
}

export default class ContainerFilmsSmallView {
  #element = null;

  get template() {
    return createContainerFilmSmallTemplate();
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
