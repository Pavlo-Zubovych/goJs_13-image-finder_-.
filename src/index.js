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
    // refs.footerTeg.classList.add('is-hidden');
  },

  disabled() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLoader.textContent = 'Загружаємо  ...  ... ...   ... ... ... ... . ...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
    // refs.footerTeg.classList.remove('is-hidden');
  },

  show() {
    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.footerTeg.classList.remove('is-hidden');
  },
};

refs.searchForm.addEventListener('submit', rerchFormSubmitHandler);
// refs.loadMoreBtn.addEventListener('click', fetchArcticlesS);

const options = {
  rootMargin: '50px',
  threshold: 1.0,
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    // тут можно писать логику для проверки вхождения
    fetchArcticlesS();
    console.log('Observer1');
  });
};

const io = new IntersectionObserver(onEntry, options);
/*=> {
  //   entries.forEach(entry => {
  // if (entry.isIntersecting) {
  fetchArcticlesS();
  console.log('Observer1');
  // }
// });
});*/

io.observe(refs.footerTeg);

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

// const footerTeg = document.querySelector('.footer');

// const io = new IntersectionObserver((entries, observe) => {
//   entries.forEach(entry => {
//     // if (entry.isIntersecting) {
//     console.log('Observer1');
//     // }
//   });
// });

// io.observe(refs.footerTeg);

// footerTeg.forEach(photo => io.observe(photo));

// refs.oadMoreBtnLoader.forEach(photo => io.observe(photo));

// window.scrollTo({
//   top: document.documentElement.offsetHeight,
//   behavior: 'smooth',
// });
