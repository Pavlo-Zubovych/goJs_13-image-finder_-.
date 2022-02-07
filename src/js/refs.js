const articlesContainer = document.querySelector('.js-articles');
const searchForm = document.querySelector('.js-search-form');
const loadMoreBtn = document.querySelector('[data-action = load-more]');
const loadMoreBtnLoader = loadMoreBtn.querySelector('.label');
const loadMoreBtnSpinner = loadMoreBtn.querySelector('.spinner');

const photoCard = document.querySelector('.photo-card');

export default {
  articlesContainer,
  searchForm,
  loadMoreBtn,
  loadMoreBtnLoader,
  loadMoreBtnSpinner,
  photoCard,
};
