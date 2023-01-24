import {createElement} from '../render.js';

function createPopupBigContainerTemplate() {
  return '<section class="film-details"></section>';
}

export default class PopupBigContainerView {
  getTemplate() {
    return createPopupBigContainerTemplate();
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
