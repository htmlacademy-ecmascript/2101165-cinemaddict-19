import PopupView from '../view/popup-view.js';
import CommentsContainerView from '../view/comments-container-view.js';
import CommentView from '../view/comment-view.js';

import {render} from '../render.js';

export default class PopupPresenter {

  popupComponent = new PopupView();
  commentsContainerComponent = new CommentsContainerView();
  commentComponent = new CommentView();

  constructor({container, commentModel}) {
    this.container = container;
    this.commentsModel = commentModel;
  }

  init() {
    this.boardComments = [...this.commentModel.getcomments()];

    render(this.popupComponent, this.container);

    for (let i = 0; i < this.boardComments.length; i++) {
      render(new CommentView({movie: this.boardComments[i]}), this.filmsComponent.getElement());
    }
  }
}
