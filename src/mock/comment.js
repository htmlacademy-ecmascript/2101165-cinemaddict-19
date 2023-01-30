import {getRandomArrayElement, getNamesAndSurnames, getRandomDate} from '../utils.js';
import {EMOTIONS, COMMENTS} from '../const.js';

const mockComments = [
  {
    id: 1,
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },
  {
    id: 2,
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },
  {
    id: 3,
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },
  {
    id: 4,
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },
];

export {mockComments};
