import CommentsContainerView from '../view/comments-container-view.js';
import commentView from '../view/comment-view.js';
import {render} from '../render.js';

export default class CommentsPresenter {
  commentsComponent = new CommentsContainerView();

  constructor({commentsContainer, commentsModel}) {
    this.commentsContainer = commentsContainer;
    this.commentsModel = commentsModel;
  }

  init() {
    this.boardComments = [...this.commentsModel.getComments()];

    render(this.commentsComponent, this.commentsContainer);

    for (let i = 0; i < this.boardComments.length; i++) {
      render(new commentView({comment: this.boardComments[i]}), this.commentsComponent.getElement());
    }
  }
}
