import {getRandomArrayElement, getRandomInteger, getNamesAndSurnames, getRandomDate, getRandomArrayElements, getNumberOfComments} from '../utils.js';
import {EMOTIONS, DESCRIPTIONS, TITLES, COMMENTS} from '../const.js';

const mockComment = [
  {
    idCom: getRandomInteger(1, 200),
    authorCom: getNamesAndSurnames(),
    commentCom: getRandomArrayElement(COMMENTS),
    dateCom: getRandomDate(),
    emotionCom: getRandomArrayElement(EMOTIONS)
  },
  {
    idCom: getRandomInteger(1, 200),
    authorCom: getNamesAndSurnames(),
    commentCom: getRandomArrayElement(COMMENTS),
    dateCom: getRandomDate(),
    emotionCom: getRandomArrayElement(EMOTIONS)
  },
  {
    idCom: getRandomInteger(1, 200),
    authorCom: getNamesAndSurnames(),
    commentCom: getRandomArrayElement(COMMENTS),
    dateCom: getRandomDate(),
    emotionCom: getRandomArrayElement(EMOTIONS)
  },
  {
    idCom: getRandomInteger(1, 200),
    authorCom: getNamesAndSurnames(),
    commentCom: getRandomArrayElement(COMMENTS),
    dateCom: getRandomDate(),
    emotionCom: getRandomArrayElement(EMOTIONS)
  }
];

const localComment = {
  comment: getRandomArrayElement(COMMENTS),
  emotion: getRandomArrayElement(EMOTIONS)
};

function getRandomComment() {
  return getRandomArrayElement(mockComment);
}

export {getRandomComment};
