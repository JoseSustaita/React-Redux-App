import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchJoke } from "../actions/AppAction";

const Card = ({ fetchJoke, joke, isFetching, error }) => {
  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={fetchJoke}>Press for a Joke</button>
      </div>
    );

  if (isFetching) {
    return (
      <div>
        {" "}
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 sec timer
        />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Laugh Bot: {joke}</h2>
        <button onClick={fetchJoke}>Press for a Joke</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchJoke })(Card);
