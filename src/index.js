// Пошук новин з можливістю завантажити більше (пагінація)
//
import './sass/main.scss';
import imageService from './js/image-service';
import updateArticlesMarkup from './js/update-articles-markup';
import refs from './js/refs';
// import fetchArcticles from './js/fetch-articles'; //

const moreLoadBtn = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLoader.textContent = 'Показати більше!';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');
  },

  disabled() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLoader.textContent = 'Загружаємо  ...  ... ...   ... ... ... ... . ...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
  },

  show() {
    refs.loadMoreBtn.classList.remove('is-hidden');
  },
};

refs.searchForm.addEventListener('submit', rerchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchArcticlesS);

function rerchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  imageService.query = form.elements.query.value;

  // console.log(imageService.query);

  clearArticlesContainer();
  imageService.resetPage();
  fetchArcticlesS();
  form.reset();
}

function fetchArcticlesS() {
  moreLoadBtn.disabled();

  imageService.fetchArcticles().then(articles => {
    updateArticlesMarkup(articles);
    moreLoadBtn.show();
    moreLoadBtn.enable();
  });
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

// window.scrollTo({
//   top: document.documentElement.offsetHeight,
//   behavior: 'smooth',
// });
