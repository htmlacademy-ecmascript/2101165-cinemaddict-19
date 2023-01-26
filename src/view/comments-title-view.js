import {createElement} from '../render.js';

function createCommentsTitleTemplate(comments) {
  return `<h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>`;
}

export default class CommentsTitleView {
  constructor({comments}) {
    this.comments = comments;
  }

  getTemplate() {
    return createCommentsTitleTemplate(this.comments);
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
