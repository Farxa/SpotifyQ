import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="center-div">
      {props.code ? (
        <>
          <h1>Welcome to SpotifyQ</h1>
          <br />
          <h3>
            ⚠ Open your Spotify in the background
            <h4>
              to be able to connect your device and queue up tracks when creating a Queue
            </h4>
          </h3>
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
            <Link to="/login">
              <button>Login with Spotify</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
