import {render} from './framework/render.js';
import ProfileView from './view/profile-view.js';
import FilmModel from './model/film-model.js';
import FilmPresenter from './presenter/film-presenter.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

const filmModel = new FilmModel();
const filmPresenter = new FilmPresenter({
  container: siteMainElement,
  filmModel,
});

render (new ProfileView(), siteHeaderElement);

filmPresenter.init();

