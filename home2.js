// $(".button-search").on("click", function () {
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=15a2d9d7&s=" + $(".input-keyword").val(),
//     success: (result) => {
//       const movies = result.Search;
//       let cards = "";
//       movies.forEach((e) => {
//         cards += showDetail(e);
//         // let cards akan menampung semua isi html di
//       });
//       $(".container-movies").html(cards);

//       //   UNTUK DETAIL MENGGUNAKAN MODAL TARGET
//       $(".button-detail").on("click", function () {
//         $.ajax({
//           url: "http://www.omdbapi.com/?apikey=15a2d9d7&i=" + $(this).data("imdbid"),
//           success: (m) => {
//             const moviesDetail = showModal(m);
//             $(".modal-body").html(moviesDetail);
//           },
//           error: (e) => console.log(e.responseText),
//         });
//       });
//     },
//     error: (e) => console.log(e.responseText),
//   });
// });

// fetch
// const AksiKlik = document.querySelector(".button-search");
// AksiKlik.addEventListener("click", function () {
//   const inputSelector = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=15a2d9d7&s=" + inputSelector.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movieSearch = response.Search;
//       let cards = "";
//       movieSearch.forEach((e) => {
//         cards += showDetail(e);
//         const movies = document.querySelector(".container-movies");
//         movies.innerHTML = cards;

//         // klik untuk detail

//         const modelDetail = document.querySelectorAll(".button-detail");
//         modelDetail.forEach((btn) => {
//           btn.addEventListener("click", function () {
//             const imdbid = this.dataset.imdbid;
//             fetch("http://www.omdbapi.com/?apikey=15a2d9d7&i=" + imdbid)
//               .then((response) => response.json())
//               .then((m) => {
//                 const modal = showModal(m);
//                 const modalBody = document.querySelector(".modal-body");
//                 modalBody.innerHTML = modal;
//               });
//           });
//         });
//       });
//     });
// });

// const modelClick = document.querySelector(".button-search");
// modelClick.addEventListener("click", async function () {
//   const moviesInput = document.querySelector(".input-keyword");
//   const movies = await moviesFetch(moviesInput.value);
//   updateUi(movies);
// });

document.addEventListener("click", async function (e) {
  const moviesInput = document.querySelector(".input-keyword");
  const movies = await moviesFetch(moviesInput.value);
  updateUi(movies);

  if (e.target.classList.contains("button-detail")) {
    const imdbid = e.target.dataset.imdbid;
    console.log(imdbid);
    const moviesDetail = await getMOvies(imdbid);
    updateUiDetail(moviesDetail);
  }
});

// function
function getMOvies(movies) {
  return fetch("http://www.omdbapi.com/?apikey=15a2d9d7&i=" + movies)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUiDetail(movies) {
  const showDetailModal = showModal(movies);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = showDetailModal;
}

function moviesFetch(values) {
  return fetch("http://www.omdbapi.com/?apikey=15a2d9d7&s=" + values)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUi(movies) {
  let cards = "";
  movies.forEach((e) => (cards += showDetail(e)));
  const moviesCo = document.querySelector(".container-movies");
  moviesCo.innerHTML = cards;
}

function showDetail(e) {
  return `<div class="col-md-4 my-5">
          <div class="card">
            <img src="${e.Poster} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${e.Title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${e.Year}</h6>

              <a href="#" class="btn btn-primary button-detail" data-bs-toggle="modal" data-bs-target="#exampleModal"
              data-imdbid="${e.imdbID}">Detail movies</a>
            </div>
          </div>
        </div>`;
}

function showModal(m) {
  return ` <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true"> ${m.Title}</li>
          <li class="list-group-item list-group-item-action"><strong>Rated</strong>: ${m.Rated}</li>
          <li class="list-group-item list-group-item-action"><strong>RELEASED</strong>: ${m.Released}</li>
          <li class="list-group-item list-group-item-action"><strong>DIRECTOR</strong>: ${m.Director}</li>
          <li class="list-group-item list-group-item-action"><strong>GENRE</strong>: ${m.Genre}</li>
          <li class="list-group-item list-group-item-action"><strong>RATE</strong>: ${m.imdbRating}</li>
          <li class="list-group-item list-group-item-action"><strong>PLOT</strong>: ${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
