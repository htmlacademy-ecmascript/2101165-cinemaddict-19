import ProfileView from './view/profile-view.js';
import ListSortView from './view/list-sort-view.js';
import ListFilterView from './view/list-filter-view.js';
// import PopupView from './view/popup-view.js';
// import TopRatedView from './view/top-rated-view.js';
// import MostCommentedView from './view/most-commented-view.js';
import FooterStatisticView from './view/footer-statistic-view.js';
import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';
import ShowMoreButtonView from './view/show-more-button-view.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer__statistics');
const filmsPresenter = new FilmsPresenter({filmsContainer: siteMainElement});

render(new ProfileView(), siteHeaderElement);
render(new ListFilterView(), siteMainElement);
render(new ListSortView(), siteMainElement);

// render(new PopupView(), siteMainElement);

filmsPresenter.init();

// render(new TopRatedView(), siteMainElement);
// render(new MostCommentedView(), siteMainElement);

render(new FooterStatisticView(), siteFooterElement);
render(new ShowMoreButtonView(), this.filmsComponent.getElement());
