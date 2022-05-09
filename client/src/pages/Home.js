import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

export default function Home(props) {
  return (
    <div className="center-div">
      {props.code ? (
        <>
          <h1>Welcome to SpotifyQ</h1>

          <h3>⚠ Open your Spotify player in the background</h3>

          <p>
            to be able to create a Queue and start a collaborative listening session
          </p>

          <div>
            <Link to="/queue">
              <button>Dashboard</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>Welcome to SpotifyQ</h1>
            <br />
            <h3>Login with your Spotify to continue</h3>
            <Login />
          </div>
        </>
      )}
    </div>
  );
}
