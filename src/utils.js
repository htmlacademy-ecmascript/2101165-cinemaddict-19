import dayjs from 'dayjs';
import {NAMES, SURNAMES, FilterType} from './const.js';

const DATE_FORMAT_FULL = 'D MMMM YYYY';
const DATE_FORMAT = 'YYYY';
const DATE_FORMAT_FOR_COMMENT = 'YYYY/MM/DD HH:MM';

const convertDateFull = (date) => dayjs(date).format(DATE_FORMAT_FULL);
const convertDateYear = (date) => dayjs(date).format(DATE_FORMAT);
const convertDateForComment = (date) => dayjs(date).format(DATE_FORMAT_FOR_COMMENT);

const transformDuration = (duration) => duration > 60 ? `${Math.trunc(duration / 60)}h ${duration % 60}m` : `${duration}m`;

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max) => {
  if (typeof(min) !== 'number' || typeof(max) !== 'number') {
    return NaN;
  }
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getNamesAndSurnames = (count = 1) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result[i] = `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES) }`;
  }
  return result.join(', ');
};

const getRandomDate = () => new Date(getRandomInteger(100000000000, 1000000000000));

const getRandomArrayElements = (items) => {
  const count = getRandomInteger (1, 3);
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(getRandomArrayElement(items));
  }
  return result.join(' ');
};

const getNumberOfComments = () => {
  const count = getRandomInteger (0, 22);
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(i);
  }
  return result;
};

const filter = {
  [FilterType.WATCHLIST]: (films) => films.filter((film) => film.userDetails.watchlist),
  [FilterType.HISTORY]: (films) => films.filter((film) => film.userDetails.alreadyWatched),
  [FilterType.FAVORITES]: (films) => films.filter((film) => film.userDetails.favorite),
};

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {updateItem, convertDateFull, convertDateYear, transformDuration, getRandomArrayElement, getRandomInteger, getNamesAndSurnames, getRandomDate, getRandomArrayElements, getNumberOfComments, convertDateForComment, filter};
