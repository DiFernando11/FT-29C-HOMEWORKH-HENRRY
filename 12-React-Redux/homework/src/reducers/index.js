const {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  REMOVE_MOVIE_FAVORITE,
} = require("../actionsTypes");

const initialState = {
  moviesLoaded: [],
  movieDetail: {},
  moviesFavorites: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites: !state.moviesFavorites.some(
          (movie) => movie.id === action.payload.id
        )
          ? [...state.moviesFavorites, action.payload]
          : [...state.moviesFavorites],
      };

    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
}
