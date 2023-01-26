import {createElement} from '../render.js';

function createPopupBigContainerTemplate() {
  return '<section class="film-details"></section>';
}

export default class PopupBigContainerView {
  #element = null;

  get template() {
    return createPopupBigContainerTemplate();
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
