import {createElement} from '../render.js';

function createPopupMediumContainerTemplate() {
  return '<div class="film-details__inner"></div>';
}

export default class PopupMediumContainerView {
  getTemplate() {
    return createPopupMediumContainerTemplate();
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
