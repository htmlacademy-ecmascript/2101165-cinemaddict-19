import {getRandomArrayElement, getRandomInteger, getNamesAndSurnames, getRandomDate, getRandomArrayElements, getNumberOfComments} from '../utils.js';
import {EMOTIONS, DESCRIPTIONS, TITLES, COMMENTS} from '../const.js';

const mockComment = [
  {
    id: '42',
    author: 'Ilya O\'Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2019-05-11T16:12:32.554Z',
    emotion: 'smile'
  },
  {
    id: '42',
    author: 'Ilya O\'Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2019-05-11T16:12:32.554Z',
    emotion: 'smile'
  },
  {
    id: '42',
    author: 'Ilya O\'Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2019-05-11T16:12:32.554Z',
    emotion: 'smile'
  },
];

function getRandomComment() {
  return getRandomArrayElement(mockComment);
}

export {getRandomComment};
