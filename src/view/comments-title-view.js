import {createElement} from '../render.js';

function createCommentsTitleTemplate(comments) {
  return `<h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>`;
}

export default class CommentsTitleView {
  #comments = null;
  #element = null;

  constructor({comments}) {
    this.#comments = comments;
  }

  get template() {
    return createCommentsTitleTemplate(this.#comments);
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
