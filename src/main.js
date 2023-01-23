//
// import ListSortView from './view/list-sort-view.js';
// import ListFilterView from './view/list-filter-view.js';
// import PopupView from './view/popup-view.js';
// // import TopRatedView from './view/top-rated-view.js';
// // import MostCommentedView from './view/most-commented-view.js';
// import FooterStatisticView from './view/footer-statistic-view.js';
// import {render} from './render.js';
// import FilmsPresenter from './presenter/films-presenter.js';
// import FilmsModel from './model/film-model.js';
// import {getRandomFilm} from './mock/movie.js';
// import {getRandomComment} from './mock/comment.js';
// import CommentsPresenter from './presenter/comment-presenter.js';
// import CommentModel from './model/comment-model.js';
// import CommentView from './view/comment-view.js';
// import CommentsContainerView from './view/comments-container-view.js';
// import PopupPresenter from './presenter/popup-presenter.js';

// const siteHeaderElement = document.querySelector('.header');
// const siteMainElement = document.querySelector('.main');
// const siteFooterElement = document.querySelector('.footer__statistics');

// const filmsModel = new FilmsModel();
// const filmsPresenter = new FilmsPresenter({
//   filmsContainer: siteMainElement,
//   filmsModel,
// });

// const commentsModel = new CommentModel();
// const popupPresenter = new PopupPresenter({
//   filmsContainer: siteMainElement,
//   commentsModel,
// });

// render(new ProfileView(), siteHeaderElement);
// render(new ListFilterView(), siteMainElement);
// render(new ListSortView(), siteMainElement);

// filmsPresenter.init();

// // render(new TopRatedView(), siteMainElement);
// // render(new MostCommentedView(), siteMainElement);

// render(new FooterStatisticView(), siteFooterElement);

// popupPresenter.init();

// // render(new PopupView({movie: getRandomFilm()}), siteMainElement);


import {render} from './render.js';
import ProfileView from './view/profile-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import ContainerFilmsBigView from './view/container-films-big-view.js';
import ContainerFilmsMediumView from './view/container-films-medium-view.js';
import FilmModel from './model/film-model.js';
import FilmPresenter from './presenter/film-presenter.js';
import ShowMoreButtonView from './view/show-more-button-view.js';
import FooterStatisticView from './view/footer-statistic-view.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer__statistics');

const filmModel = new FilmModel();
const filmPresenter = new FilmPresenter({
  container: siteMainElement,
  filmModel
});

render (new ProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
render(new SortView(), siteMainElement);
render(new ContainerFilmsBigView(), siteMainElement);
render(new ContainerFilmsMediumView(), siteMainElement);

filmPresenter.init();



render(new ShowMoreButtonView(), siteMainElement);
render(new FooterStatisticView(), siteFooterElement);
