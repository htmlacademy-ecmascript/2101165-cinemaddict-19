import {render} from './framework/render.js';
import ProfileView from './view/profile-view.js';
import FilmModel from './model/film-model.js';
import MainPresenter from './presenter/main-presenter.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

const filmModel = new FilmModel();
const mainPresenter = new MainPresenter({
  container: siteMainElement,
  filmModel,
});

render (new ProfileView(), siteHeaderElement);

mainPresenter.init();

