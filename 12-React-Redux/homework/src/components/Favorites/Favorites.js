import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        {this.props.movies &&
          this.props.movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <h2> {movie.title}</h2>
              </Link>
              <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
            </div>
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (movieId) => dispatch(removeMovieFavorite(movieId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
