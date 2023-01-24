import {getRandomArrayElement, getRandomInteger, getNamesAndSurnames, getRandomDate, getRandomArrayElements} from '../utils.js';
import {DESCRIPTIONS, TITLES, GENRES, POSTERS, COUNTRIES} from '../const.js';
import {mockComment} from './comment.js';

const mockMovies = [
  {
    id: getRandomInteger(1, 200),
    comments: [mockComment[getRandomInteger(1, 3)], mockComment[getRandomInteger(1, 3)]],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: getRandomArrayElement(TITLES),
      totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
      poster: getRandomArrayElement(POSTERS),
      ageRating: getRandomInteger(0, 18),
      director: getNamesAndSurnames(),
      writers: getNamesAndSurnames(getRandomInteger(1, 3)),
      actors: getNamesAndSurnames(getRandomInteger(1, 3)),
      release: {
        date: getRandomDate(),
        releaseCountry: getRandomArrayElement(COUNTRIES),
      },
      duration: getRandomInteger(50, 150),
      genre: GENRES.slice(0, getRandomInteger(1, 2)),
      description: getRandomArrayElements(DESCRIPTIONS),
    }
  },
  {
    id: getRandomInteger(1, 200),
    comments: [mockComment[getRandomInteger(1, 3)]],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: getRandomArrayElement(TITLES),
      totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
      poster: getRandomArrayElement(POSTERS),
      ageRating: getRandomInteger(0, 18),
      director: getNamesAndSurnames(),
      writers: getNamesAndSurnames(getRandomInteger(1, 3)),
      actors: getNamesAndSurnames(getRandomInteger(1, 3)),
      release: {
        date: getRandomDate(),
        releaseCountry: getRandomArrayElement(COUNTRIES),
      },
      duration: getRandomInteger(50, 150),
      genre: [getRandomArrayElement(GENRES)],
      description: getRandomArrayElements(DESCRIPTIONS),
    }
  },
  {
    id: getRandomInteger(1, 200),
    comments: [mockComment[getRandomInteger(1, 3)], mockComment[getRandomInteger(1, 3)], mockComment[getRandomInteger(1, 3)], mockComment[getRandomInteger(1, 3)]],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: getRandomArrayElement(TITLES),
      totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
      poster: getRandomArrayElement(POSTERS),
      ageRating: getRandomInteger(0, 18),
      director: getNamesAndSurnames(),
      writers: getNamesAndSurnames(getRandomInteger(1, 3)),
      actors: getNamesAndSurnames(getRandomInteger(1, 3)),
      release: {
        date: getRandomDate(),
        releaseCountry: getRandomArrayElement(COUNTRIES),
      },
      duration: getRandomInteger(50, 150),
      genre: [getRandomArrayElement(GENRES)],
      description: getRandomArrayElements(DESCRIPTIONS),
    }
  },
  {
    id: getRandomInteger(1, 200),
    comments: [],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: getRandomArrayElement(TITLES),
      totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
      poster: getRandomArrayElement(POSTERS),
      ageRating: getRandomInteger(0, 18),
      director: getNamesAndSurnames(),
      writers: getNamesAndSurnames(getRandomInteger(1, 3)),
      actors: getNamesAndSurnames(getRandomInteger(1, 3)),
      release: {
        date: getRandomDate(),
        releaseCountry: getRandomArrayElement(COUNTRIES),
      },
      duration: getRandomInteger(50, 150),
      genre: [getRandomArrayElement(GENRES)],
      description: getRandomArrayElements(DESCRIPTIONS),
    }
  }
];

function getRandomFilm() {
  return getRandomArrayElement(mockMovies);
}

export {getRandomFilm};
