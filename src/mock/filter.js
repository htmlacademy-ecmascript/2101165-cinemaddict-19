import {filter} from '../utils.js';

function generateFilter(films) {
  return Object.entries(filter).map(
    ([filterName, filterFilms]) => ({
      name: filterName,
      count: filterFilms(films).length,
    }),
  );
}

export {generateFilter};
