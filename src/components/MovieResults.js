import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import MovieItem from "./MovieItem";
import {Link} from "react-router-dom";
import FavoriteMovieList from "./FavoriteMovieList";
class MovieResults extends Component {
  render() {
    return (
      <div>
         <Link to="/fav">Favorite Movies</Link>
        <Search />
        {this.props.movies.map((item) => {
          return <MovieItem movie={item} key={item.id} showButton={true} />;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    movies: state.movies,
  };
}
export default connect(mapStateToProps, null)(MovieResults);