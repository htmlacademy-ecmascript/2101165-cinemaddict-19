import {createElement} from '../render.js';

function createCommentWrapTemplate() {
  return '<section class="film-details__comments-wrap"></section>';
}

export default class CommentWrapView {

  getTemplate() {
    return createCommentWrapTemplate();
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
