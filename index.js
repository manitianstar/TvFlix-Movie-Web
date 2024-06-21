const api = "api_key=d8faba842a3d525ea44b2d384ae54906";
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";
let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".side-bar");
let search = document.querySelector(".search-icon");
let searchbar = document.querySelector(".search-bar");
let mainContainer = document.querySelector(".container");

var banner = document.getElementById("banner");
var banner_title = document.getElementById("sub-heading");
var banner_desc = document.getElementById("para");

const requests = {
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchAdventureMovies: `${base_url}/discover/movie?${api}&with_genres=12`,
  fetchFantasyMovies: `${base_url}/discover/movie?${api}&with_genres=14`,
  fetchAnimationMovies: `${base_url}/discover/movie?${api}&with_genres=16`,
  fetchThrillerMovies: `${base_url}/discover/movie?${api}&with_genres=53`,
  fetchCrimeMovies: `${base_url}/discover/movie?${api}&with_genres=80`,
};
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json()) //conveting response into json format

  .then((data) => {
    console.log(data.results);
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);

    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerText = truncate(setMovie.overview, 150);

    banner_title.innerText = getMovieTitle(setMovie);
    function getMovieTitle(movie) {
      return movie.title || movie.name || "Untitled"; // Checks title, then name, or sets a default value
    }
  });
search.addEventListener("click", () => {
  searchbar.classList.toggle("active");
  console.log("search is active");
});
menu.addEventListener("click", () => {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    mainContainer.style.gridTemplateColumns = "1fr 4fr";
  } else {
    sidebar.style.display = "none";
    mainContainer.style.gridTemplateColumns = "1fr"; 
  }
  console.log("sidebar is clicked");
});
function updateBannerOnClick(poster, setMovie) {
  poster.addEventListener("click", () => {
    // Update banner background image
    banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
    
    // Update banner title
    banner_title.innerText = getMovieTitle(setMovie);
    function getMovieTitle(movie) {
      return movie.title || movie.name || "Untitled"; // Checks title, then name, or sets a default value
    }
    
    // Update banner description
    banner_desc.innerText = truncate(setMovie.overview, 150);
  });
}
fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json()) //conveting response into json format
  .then((data) => {
    const headrow = document.getElementById("head_row");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("tvflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "head_row_title";
    title.innerText = "Netflix Originals";
    row.appendChild(title);
    const row_poster = document.createElement("div");
    row_poster.className = "row_poster";
    row.appendChild(row_poster);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "poster_large";
      var s = movie.name.replace(/\s+/g, "");
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      poster.style.marginRight = "20px";
      poster.style.width = "100rem";
      poster.style.cursor= "pointer";
      updateBannerOnClick(poster, movie);
      row_poster.appendChild(poster);
    });
  });
fetch(requests.fetchAdventureMovies)
  .then((res) => res.json()) //conveting response into json format
  .then((data) => {
    const headrow = document.getElementById("head_row");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("tvflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "head_row_title";
    title.innerText = "Adventure";
    row.appendChild(title);
    const row_poster = document.createElement("div");
    row_poster.className = "row_poster";
    row.appendChild(row_poster);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "poster_large";
      var s1 = movie.id;
      poster.id = s1;
      poster.src = img_url + movie.backdrop_path;
      poster.style.marginRight = "20px";
      poster.style.width = "10rem";
      poster.style.cursor= "pointer";
      updateBannerOnClick(poster, movie);
      row_poster.appendChild(poster);
    });
  });
fetch(requests.fetchFantasyMovies)
  .then((res) => res.json()) //conveting response into json format
  .then((data) => {
    const headrow = document.getElementById("head_row");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("tvflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "head_row_title";
    title.innerText = "Fantasy";
    row.appendChild(title);
    const row_poster = document.createElement("div");
    row_poster.className = "row_poster";
    row.appendChild(row_poster);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "poster_large";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      poster.style.marginRight = "20px";
      poster.style.width = "10rem";
      poster.style.cursor= "pointer";
      updateBannerOnClick(poster, movie);
      row_poster.appendChild(poster);
    });
  });
fetch(requests.fetchAnimationMovies)
  .then((res) => res.json()) //conveting response into json format
  .then((data) => {
    const headrow = document.getElementById("head_row");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("tvflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "head_row_title";
    title.innerText = "Animation";
    row.appendChild(title);
    const row_poster = document.createElement("div");
    row_poster.className = "row_poster";
    row.appendChild(row_poster);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "poster_large";
      var s3 = movie.id;
      poster.id = s3;
      poster.src = img_url + movie.backdrop_path;
      poster.style.marginRight = "20px";
      poster.style.width = "10rem";
      poster.style.cursor= "pointer";
      updateBannerOnClick(poster, movie);
      row_poster.appendChild(poster);
    });
  });
fetch(requests.fetchThrillerMovies)
  .then((res) => res.json()) //conveting response into json format
  .then((data) => {
    const headrow = document.getElementById("head_row");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("tvflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "head_row_title";
    title.innerText = "Thriller";
    row.appendChild(title);
    const row_poster = document.createElement("div");
    row_poster.className = "row_poster";
    row.appendChild(row_poster);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "poster_large";
      var s4 = movie.id;
      poster.id = s4;
      poster.src = img_url + movie.backdrop_path;
      poster.style.marginRight = "20px";
      poster.style.width = "10rem";
      poster.style.cursor= "pointer";
      updateBannerOnClick(poster, movie);
      row_poster.appendChild(poster);
    });
  });
fetch(requests.fetchCrimeMovies)
  .then((res) => res.json()) //conveting response into json format
  .then((data) => {
    const headrow = document.getElementById("head_row");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("tvflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "head_row_title";
    title.innerText = "Crime";
    row.appendChild(title);
    const row_poster = document.createElement("div");
    row_poster.className = "row_poster";
    row.appendChild(row_poster);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "poster_large";
      var s5 = movie.id;
      poster.id = s5;
      poster.src = img_url + movie.backdrop_path;
      poster.style.marginRight = "20px";
      poster.style.width = "10rem";
      poster.style.cursor= "pointer";
      updateBannerOnClick(poster, movie);
      row_poster.appendChild(poster);
    });
  });
