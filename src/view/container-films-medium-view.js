import {createElement} from '../render.js';

function createContainerFilmsMediumTemplate() {
  return '<section class="films-list"></section>';
}

export default class ContainerFilmsMediumView {
  getTemplate() {
    return createContainerFilmsMediumTemplate();
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
