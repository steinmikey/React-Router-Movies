import React from "react";
import { useRouteMatch, Link, Route } from "react-router-dom";

export default function SavedList(props) {
  const { url } = useRouteMatch();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to={`${url}`} className="home-button">
        Home
      </Link>
    </div>
  );
}
