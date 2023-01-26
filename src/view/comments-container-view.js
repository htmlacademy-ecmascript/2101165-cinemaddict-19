import {createElement} from '../render.js';

function createCommentsContainerTemplate() {
  return '<div class="film-details__bottom-container"></div>';
}

export default class CommentsContainerView {
  #element = null;

  get template() {
    return createCommentsContainerTemplate();
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
