import {getRandomArrayElement, getNamesAndSurnames, getRandomDate} from '../utils.js';
import {EMOTIONS, COMMENTS} from '../const.js';

const mockComments = [
  {
    id: '1',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },
  {
    id: '2',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },
  {
    id: '3',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },
  {
    id: '4',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '5',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '6',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '7',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '8',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '9',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '10',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '11',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '12',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '13',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '14',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '15',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '16',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '17',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '18',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },{
    id: '19',
    author: getNamesAndSurnames(),
    comment: getRandomArrayElement(COMMENTS),
    date: getRandomDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  },
];

export {mockComments};
