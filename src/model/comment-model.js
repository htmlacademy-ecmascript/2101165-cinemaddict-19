import {getRandomComment} from '../mock/comment.js';

const COMMENTS_COUNT = 5;

export default class CommentModel {
  comments = Array.from({length: COMMENTS_COUNT}, getRandomComment);

  getComments() {
    return this.comments;
  }
}
