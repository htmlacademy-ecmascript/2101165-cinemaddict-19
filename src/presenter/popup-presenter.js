import PopupBigContainerView from '../view/popup-big-container-view.js';
import PopupMediumContainerView from '../view/popup-medium-container-view.js';
import PopupFilmView from '../view/popup-film-view.js';
import CommentsContainerView from '../view/comments-container-view.js';
import CommentWrapView from '../view/comment-wrap-view.js';
import CommentListView from '../view/comment-list-view.js';
import CommentView from '../view/comment-view.js';
import NewCommentView from '../view/new-comment-view.js';
import CommentsTitleView from '../view/comments-title-view.js';
import {render} from '../render.js';

export default class PopupPresenter {
  containerBigComponent = new PopupBigContainerView();
  containerMediumComponent = new PopupMediumContainerView();
  containerCommentComponent = new CommentsContainerView();
  wrapContainerComponent = new CommentWrapView();
  commentListComponent = new CommentListView();

  constructor({container, filmModel}) {
    this.container = container;
    this.filmModel = filmModel;
  }

  init() {
    this.movie = this.filmModel.getOneFilm();
    this.comments = this.movie.comments;

    render(this.containerBigComponent, this.container);
    render(this.containerMediumComponent, this.containerBigComponent.getElement());
    render(new PopupFilmView({movie: this.movie}), this.containerMediumComponent.getElement());
    render(this.containerCommentComponent, this.containerMediumComponent.getElement());
    render(this.wrapContainerComponent,this.containerCommentComponent.getElement());
    render(new CommentsTitleView({comments: this.comments}), this.wrapContainerComponent.getElement());
    render(this.commentListComponent, this.wrapContainerComponent.getElement());

    for (let i = 0; i < this.comments.length; i++) {
      render(new CommentView({comment: this.comments[i]}), this.commentListComponent.getElement());
    }

    render(new NewCommentView(), this.commentListComponent.getElement());
  }
}