import {createElement} from '../render.js';

function createCommentTemplate(comment) {
  const{
    id,
  } = comment;

  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
  </span>
  <div>
    <p class="film-details__comment-text">${id}Interesting setting and a good cast</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">aa</span>
      <span class="film-details__comment-day">2019/12/31 23:59</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
</li>`;
}

export default class CommentView {
  constructor({comment}) {
    this.comment = comment;
  }

  getTemplate() {
    return createCommentTemplate(this.comment);
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
