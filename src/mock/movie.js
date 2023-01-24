import {getRandomArrayElement, getRandomInteger, getNamesAndSurnames, getRandomDate, getRandomArrayElements, getNumberOfComments} from '../utils.js';
import {EMOTIONS, DESCRIPTIONS, TITLES, COMMENTS, NAMES, SURNAMES, DATES, GENRES, POSTERS, COUNTRIES} from '../const.js';

const mockMovies = [
  {
    id: 0,
    comments: [
      1, 2
    ],
    filmInfo: {
      title: 'A Little Pony Without The Carpet',
      alternativeTitle: 'Laziness Who Sold Themselves',
      totalRating: 5.3,
      poster: 'images/posters/blue-blazes.jpg',
      ageRating: 0,
      director: 'Tom Ford',
      writers: [
        'Takeshi Kitano'
      ],
      actors: [
        'Morgan Freeman'
      ],
      release: {
        date: '2019-05-11T00:00:00.000Z',
        releaseCountry: 'Finland'
      },
      duration: 77,
      genre: [
        'Comedy'
      ],
      description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
    },
    userDetails: {
      watchlist: false,
      alreadyWatched: true,
      watchingDate: '2019-04-12T16:12:32.554Z',
      favorite: false
    }
  },
  {
    id: 0,
    comments: [
      1, 2
    ],
    filmInfo: {
      title: 'A Little Pony Without The Carpet',
      alternativeTitle: 'Laziness Who Sold Themselves',
      totalRating: 5.3,
      poster: 'images/posters/blue-blazes.jpg',
      ageRating: 0,
      director: 'Tom Ford',
      writers: [
        'Takeshi Kitano'
      ],
      actors: [
        'Morgan Freeman'
      ],
      release: {
        date: '2019-05-11T00:00:00.000Z',
        releaseCountry: 'Finland'
      },
      duration: 77,
      genre: [
        'Comedy'
      ],
      description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
    },
    userDetails: {
      watchlist: false,
      alreadyWatched: true,
      watchingDate: '2019-04-12T16:12:32.554Z',
      favorite: false
    }
  },
  {
    id: 0,
    comments: [
      1, 2
    ],
    filmInfo: {
      title: 'A Little Pony Without The Carpet',
      alternativeTitle: 'Laziness Who Sold Themselves',
      totalRating: 5.3,
      poster: 'images/posters/blue-blazes.jpg',
      ageRating: 0,
      director: 'Tom Ford',
      writers: [
        'Takeshi Kitano'
      ],
      actors: [
        'Morgan Freeman'
      ],
      release: {
        date: '2019-05-11T00:00:00.000Z',
        releaseCountry: 'Finland'
      },
      duration: 77,
      genre: [
        'Comedy'
      ],
      description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
    },
    userDetails: {
      watchlist: false,
      alreadyWatched: true,
      watchingDate: '2019-04-12T16:12:32.554Z',
      favorite: false
    }
  },
  {
    id: 0,
    comments: [
      1, 2
    ],
    filmInfo: {
      title: 'A Little Pony Without The Carpet',
      alternativeTitle: 'Laziness Who Sold Themselves',
      totalRating: 5.3,
      poster: 'images/posters/blue-blazes.jpg',
      ageRating: 0,
      director: 'Tom Ford',
      writers: [
        'Takeshi Kitano'
      ],
      actors: [
        'Morgan Freeman'
      ],
      release: {
        date: '2019-05-11T00:00:00.000Z',
        releaseCountry: 'Finland'
      },
      duration: 77,
      genre: [
        'Comedy'
      ],
      description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
    },
    userDetails: {
      watchlist: false,
      alreadyWatched: true,
      watchingDate: '2019-04-12T16:12:32.554Z',
      favorite: false
    }
  },
  // {
  //   id: getRandomInteger(1, 200),
  //   comments: getNumberOfComments(),
  //   filmInfo: {
  //     title: getRandomArrayElement(TITLES),
  //     alternativeTitle: getRandomArrayElement(TITLES),
  //     totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
  //     poster: getRandomArrayElement(POSTERS),
  //     ageRating: getRandomInteger(0, 18),
  //     director: getNamesAndSurnames(),
  //     writers: getNamesAndSurnames(getRandomInteger(1, 3)),
  //     actors: getNamesAndSurnames(getRandomInteger(1, 3)),
  //     release: {
  //       date: getRandomDate(),
  //       releaseCountry: getRandomArrayElement(COUNTRIES),
  //     },
  //     duration: getRandomInteger(50, 150),
  //     genre: getRandomArrayElements(GENRES),
  //     description: getRandomArrayElements(DESCRIPTIONS),
  //   },
  //   userDetails: {
  //     watchlist: Boolean(getRandomInteger(0, 1)),
  //     alreadyWatched: Boolean(getRandomInteger(0, 1)),
  //     watchingDate: getRandomDate(),
  //     favorite: Boolean(getRandomInteger(0, 1))
  //   }
  // },
  // {
  //   id: getRandomInteger(1, 200),
  //   comments: getNumberOfComments(),
  //   filmInfo: {
  //     title: getRandomArrayElement(TITLES),
  //     alternativeTitle: getRandomArrayElement(TITLES),
  //     totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
  //     poster: getRandomArrayElement(POSTERS),
  //     ageRating: getRandomInteger(0, 18),
  //     director: getNamesAndSurnames(),
  //     writers: getNamesAndSurnames(getRandomInteger(1, 3)),
  //     actors: getNamesAndSurnames(getRandomInteger(1, 3)),
  //     release: {
  //       date: getRandomDate(),
  //       releaseCountry: getRandomArrayElement(COUNTRIES),
  //     },
  //     duration: getRandomInteger(50, 150),
  //     genre: getRandomArrayElements(GENRES),
  //     description: getRandomArrayElements(DESCRIPTIONS),
  //   },
  //   userDetails: {
  //     watchlist: Boolean(getRandomInteger(0, 1)),
  //     alreadyWatched: Boolean(getRandomInteger(0, 1)),
  //     watchingDate: getRandomDate(),
  //     favorite: Boolean(getRandomInteger(0, 1))
  //   }
  // },
  // {
  //   id: getRandomInteger(1, 200),
  //   comments: getNumberOfComments(),
  //   filmInfo: {
  //     title: getRandomArrayElement(TITLES),
  //     alternativeTitle: getRandomArrayElement(TITLES),
  //     totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
  //     poster: getRandomArrayElement(POSTERS),
  //     ageRating: getRandomInteger(0, 18),
  //     director: getNamesAndSurnames(),
  //     writers: getNamesAndSurnames(getRandomInteger(1, 3)),
  //     actors: getNamesAndSurnames(getRandomInteger(1, 3)),
  //     release: {
  //       date: getRandomDate(),
  //       releaseCountry: getRandomArrayElement(COUNTRIES),
  //     },
  //     duration: getRandomInteger(50, 150),
  //     genre: getRandomArrayElements(GENRES),
  //     description: getRandomArrayElements(DESCRIPTIONS),
  //   },
  //   userDetails: {
  //     watchlist: Boolean(getRandomInteger(0, 1)),
  //     alreadyWatched: Boolean(getRandomInteger(0, 1)),
  //     watchingDate: getRandomDate(),
  //     favorite: Boolean(getRandomInteger(0, 1))
  //   }
  // }
];

function getRandomFilm() {
  return getRandomArrayElement(mockMovies);
}

export {getRandomFilm, mockMovies};
