const {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  REMOVE_MOVIE_FAVORITE,
} = require("../actionsTypes");

export function getMovies(title) {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=de925a5c&s=${title}`)
      .then((response) => response.json())
      .then((movie) => {
        dispatch({
          type: GET_MOVIES,
          payload: movie,
        });
      });
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=de925a5c&i=${id}`)
      .then((response) => response.json())
      .then((movieDetail) => {
        dispatch({
          type: GET_MOVIE_DETAIL,
          payload: movieDetail,
        });
      });
  };
}

export function addMovieFavorite(title) {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload: title,
  };
}

export function removeMovieFavorite(id){
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: id,
  };
}