import {createElement} from '../render.js';

function createCommentWrapTemplate() {
  return '<section class="film-details__comments-wrap"></section>';
}

export default class CommentWrapView {
  #element = null;

  get template() {
    return createCommentWrapTemplate();
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
