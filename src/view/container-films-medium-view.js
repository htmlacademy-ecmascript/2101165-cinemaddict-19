import {createElement} from '../render.js';

function createContainerFilmsMediumTemplate() {
  return '<section class="films-list"></section>';
}

export default class ContainerFilmsMediumView {
  #element = null;

  get template() {
    return createContainerFilmsMediumTemplate();
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
