const apiKey = '2015111-76488069e41fd1f93b60a63a2'; // pixabay.com

export default {
  searchQuery: '',
  page: 1,

  fetchArcticles() {
    console.log(this.query);
    if (this.query == '') {
      console.log('Введіть дані для пошуку');
      //   this.query = '8888888';
    }
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      })
      .catch(error => console.error(error));
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
