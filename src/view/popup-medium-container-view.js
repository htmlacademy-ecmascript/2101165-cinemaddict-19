import {createElement} from '../render.js';

function createPopupMediumContainerTemplate() {
  return '<div class="film-details__inner"></div>';
}

export default class PopupMediumContainerView {
  #element = null;

  get template() {
    return createPopupMediumContainerTemplate();
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
