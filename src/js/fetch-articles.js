const apiKey = '2015111-76488069e41fd1f93b60a63a2'; // pixabay.com

function fetchArcticles(searchQuery, page = 1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(({ articles }) => articles)
    .catch(error => console.error(error));
}
export default fetchArcticles;
