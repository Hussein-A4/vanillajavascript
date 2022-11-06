let response = axios.get("https://api.themoviedb.org/3/search/movie", {
  params: {
    api_key: "45f0db8e20f87e3e431aa1750076bb74",
    include_adult: "false",
    query: "spiderman",
  }
});


var movieId = 0;

function getOption() {
  selectElement = document.querySelector('#MovieSelector');
  output = selectElement.value;
  document.querySelector('.output').textContent = output;
  console.log(output);
  movieId = output;
  axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: "45f0db8e20f87e3e431aa1750076bb74",
        append_to_response: "videos",
      }
    }).then((movieData) => {
      const img = document.getElementsByClassName('movieImg');
      const p = document.getElementById('movieTitle');
      const iframe = document.getElementsByClassName('movieFrame');
      const movie = movieData.data
      const trailers = movie.videos.results.filter((trailer) => trailer.type === "Trailer");
      console.log(p)
      iframe[0].src = `https://www.youtube.com/embed/${trailers.at(0).key}`
      img[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      p.innerHTML = `Movie Title: ${movie.title} -- Release Date:  ${movie.release_date} -- Popularity: ${movie.popularity} -- Average Vote: ${movie.vote_average} -- Vote Count: ${movie.vote_count} -- Original Language: ${movie.original_language} -- Overview: ${movie.overview}`;
    });
}



