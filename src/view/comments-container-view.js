import {createElement} from '../render.js';

function createCommentsContainerTemplate() {
  return '<div class="film-details__bottom-container"></div>';
}

export default class CommentsContainerView {
  getTemplate() {
    return createCommentsContainerTemplate();
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
