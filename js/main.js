//movie-inner
var elMovieBox = document.querySelector("[data-box-movie]")
//movie-form
var elForm = document.querySelector("[data-form]");
var elInputSearch = document.querySelector("[data-form-search]");
var elTitle = document.querySelector("[data-form-title]");
var elLang = document.querySelector("[data-form-lang]");
var elDescription = document.querySelector("[data-form-description]");
var elImgUrl = document.querySelector("[data-form-img-url]");
var elBtn = document.querySelector("[data-add-btn]");
var elTemplate = document.querySelector("[data-movie-template]");


renderMovie(movies);
elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const movie = {
        title: null,
        language: null,
        description: null,
        poster_path: null,
    };

    movie.title = elTitle.value;
    movie.language = elLang.value;
    movie.description = elDescription.value;
    movie.poster_path = elImgUrl.value;

    elMovieBox.prepend(createLi(movie));
    // movies.unshift(movie)
    // renderMovie(movies)
  });

function renderMovie(array) {
  elMovieBox.innerHTML = ""
  array.forEach(movie => {
    elMovieBox.appendChild(createLi(movie))
  });
}

function createLi(movie) {
  const card = elTemplate.content.cloneNode(true);
    card.querySelector('.movie-item__img').src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    card.querySelector('.movie-item__img').alt = movie.title;
    card.querySelector('.movie-card__title').textContent = movie.title;
    return card;
};


elInputSearch.addEventListener("input", (evt) => {
  searchMovie(movies)
})

function searchMovie(array){
  const newNames = array.filter((one)=> one.title.toLowerCase().includes(elInputSearch.value.toLowerCase()) )
  renderMovie(newNames)
} 