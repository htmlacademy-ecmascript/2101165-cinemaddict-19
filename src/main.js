import {render} from './render.js';
import ProfileView from './view/profile-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import FilmModel from './model/film-model.js';
import FilmPresenter from './presenter/film-presenter.js';
import FooterStatisticView from './view/footer-statistic-view.js';
import CommentModel from './model/comment-model.js';
import PopupPresenter from './presenter/popup-presenter.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer__statistics');

const filmModel = new FilmModel();
const commentModel = new CommentModel();

const filmPresenter = new FilmPresenter({
  container: siteMainElement,
  filmModel,
});

const popupPresenter = new PopupPresenter({
  container: siteMainElement,
  filmModel,
});

render (new ProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
render(new SortView(), siteMainElement);

filmPresenter.init();

render(new FooterStatisticView(), siteFooterElement);

popupPresenter.init();
