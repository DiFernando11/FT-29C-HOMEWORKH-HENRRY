import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }

  render() {
    return (
      <div className="movie-detail">
        <ul>
          <li> {this.props.movieDetail.Title}</li>
          <li> <img src={this.props.movieDetail.Poster} alt = "poster Movie" /></li>
          <li> Actors: {this.props.movieDetail.Actors}</li>
          <li> Awards:  {this.props.movieDetail.Awards}</li>
          <li> Director: {this.props.movieDetail.Director}</li>
          <li> Genre: {this.props.movieDetail.Genre}</li>
          <li> Time: {this.props.movieDetail.Runtime}</li>
          <li> Rating: {this.props.movieDetail.imdbRating}</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetail: state.movieDetail,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (movieId) => dispatch(getMovieDetail(movieId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
