import {getRandomArrayElement, getRandomInteger, getNamesAndSurnames, getRandomDate, getRandomArrayElements, getNumberOfComments} from '../utils.js';
import {EMOTIONS, DESCRIPTIONS, TITLES, COMMENTS, NAMES, SURNAMES, DATES, GENRES, POSTERS, COUNTRIES} from '../const.js';

const mockMovies = [
  {
    id: getRandomInteger(1, 200),
    comments: getNumberOfComments(),
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
      genre: getRandomArrayElements(GENRES),
      description: getRandomArrayElements(DESCRIPTIONS),
    },
    userDetails: {
      watchlist: Boolean(getRandomInteger(0, 1)),
      alreadyWatched: Boolean(getRandomInteger(0, 1)),
      watchingDate: getRandomDate(),
      favorite: Boolean(getRandomInteger(0, 1))
    }
  },
  {
    id: getRandomInteger(1, 200),
    comments: getNumberOfComments(),
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
      genre: getRandomArrayElements(GENRES),
      description: getRandomArrayElements(DESCRIPTIONS),
    },
    userDetails: {
      watchlist: Boolean(getRandomInteger(0, 1)),
      alreadyWatched: Boolean(getRandomInteger(0, 1)),
      watchingDate: getRandomDate(),
      favorite: Boolean(getRandomInteger(0, 1))
    }
  },
  {
    id: getRandomInteger(1, 200),
    comments: getNumberOfComments(),
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
      genre: getRandomArrayElements(GENRES),
      description: getRandomArrayElements(DESCRIPTIONS),
    },
    userDetails: {
      watchlist: Boolean(getRandomInteger(0, 1)),
      alreadyWatched: Boolean(getRandomInteger(0, 1)),
      watchingDate: getRandomDate(),
      favorite: Boolean(getRandomInteger(0, 1))
    }
  },
  {
    id: getRandomInteger(1, 200),
    comments: getNumberOfComments(),
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
      genre: getRandomArrayElements(GENRES),
      description: getRandomArrayElements(DESCRIPTIONS),
    },
    userDetails: {
      watchlist: Boolean(getRandomInteger(0, 1)),
      alreadyWatched: Boolean(getRandomInteger(0, 1)),
      watchingDate: getRandomDate(),
      favorite: Boolean(getRandomInteger(0, 1))
    }
  },
];

function getRandomFilm() {
  return getRandomArrayElement(mockMovies);
}

export {getRandomFilm};
