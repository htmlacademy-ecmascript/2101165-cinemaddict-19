import PopupBigContainerView from '../view/popup-big-container-view.js';
import PopupMediumContainerView from '../view/popup-medium-container-view.js';
import PopupFilmView from '../view/popup-film-view.js';
import CommentsContainerView from '../view/comments-container-view.js';
import CommentListView from '../view/comment-list-view.js';
import CommentView from '../view/comment-view.js';
import NewCommentView from '../view/new-comment-view.js';
import {render} from '../render.js';

export default class PopupPresenter {
  containerBigComponent = new PopupBigContainerView();
  containerMediumComponent = new PopupMediumContainerView();
  popupComponent = new PopupFilmView();
  containerCommentComponent = new CommentsContainerView();
  commentListComponent = new CommentListView();
  newCommentComponent = new NewCommentView();

  constructor({container, commentModel}) {
    this.container = container;
    this.model = commentModel;
  }

  init() {
    this.comments = [...this.model.getComments()];

    render(this.containerBigComponent, this.container);
    render(this.containerMediumComponent, this.containerBigComponent.getElement());
    render(this.popupComponent, this.containerMediumComponent.getElement());
    render(this.containerCommentComponent, this.containerMediumComponent.getElement());
    render(this.commentListComponent, this.containerCommentComponent.getElement());

    for (let i = 0; i < this.comments.length; i++) {
      render(new CommentView({comment: this.comments[i]}), this.commentListComponent.getElement());
    }

    render(this.newCommentComponent, this.commentListComponent.getElement());
  }
}
