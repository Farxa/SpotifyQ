import React, { useState, useEffect } from "react";
import axios from "axios";
import TrackSearch from "./TrackSearch";
import Queue from "./Queue";
import InviteAndCopy from "./InviteAndCopy";
import PlayBar from "./PlayBar";
import { useParams, Link } from "react-router-dom";

export default function CreateQ(props) {
  const [input, setInput] = useState("");
  const [tracks, setTracks] = useState([]);
  const [queue, setQueue] = useState([]);

  const selectedDevice = props.selectedDevice;
  const token = props.token;
  const spotifyApi = props.spotifyApi;
  const setToken = props.setToken;

  const { inviteCode } = useParams();
  console.log("PARAMS:", inviteCode);

  // ❗❗

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (inviteCode) {
      axios
        .get(`/${inviteCode}`)
        .then(res => {
          const inviteLink = window.location.href;
          console.log("pollLink", inviteLink);
          props.setSelecedDevice(res.data.selectedDevice);
          spotifyApi.setAccessToken(res.data.token);
        })
        .catch(message => {
          setMessage(message);
        });
    }
  }, []);

  // ❗❗

  const handleTrackSearch = () => {
    spotifyApi.searchTracks(input).then(
      data => {
        setTracks(data.body.tracks.items);
      },
      function (err) {
        console.log(err);
      }
    );
  };

  const addTrackToQueue = track => {
    const existingTrackInQueue = queue.find(
      queueTrack => queueTrack.id === track.id
    );
    if (existingTrackInQueue) {
      return;
    } else {
      setQueue([...queue, track]);
      spotifyApi.addToQueue(track.uri).then(data => {
        console.log(data);
      });
    }
  };

  // ❗❗

  const [inviteKey, setInviteKey] = useState("");

  const handleInviteQ = e => {
    const requestBody = { selectedDevice, token, inviteKey };
    axios
      .post(`/api/queue`, requestBody)
      .then(res => {
        console.log("This is the res.data from /api/queue: ", res.data);
        setInviteKey(res.data.inviteCode);
      })
      .catch();
  };

  // ❗❗

  const createdQ_URL = `http://localhost:3000/${inviteKey}`;

  // if(createdQ_URL) return (
  //   <>
  //   <TrackSearch
  //   input={input}
  //   setInput={setInput}
  //   handleTrackSearch={handleTrackSearch}
  //   tracks={tracks}
  //   addTrackToQueue={addTrackToQueue}
  // />

  // <Queue queue={queue} />

  // <PlayBar spotifyAPI={spotifyApi} selectedDevice={selectedDevice} />
  // </>
  // )

  if (message)
    return (
      <div className="svenContainer">
        <img
          style={{ height: "400px" }}
          src="https://www.fazemag.de/wp-content/uploads/2016/02/sven_marquardt_c_mitteldeutscher_verlag__1000.jpg"
          alt="Sven Marquardt"
        />
        <br />
        <h1 style={{ textAlign: "center" }}>Heute leider nicht</h1>
      </div>
    );

  return (
    <div className="container">
      {/* <div>
        <Link to={{
          pathname: "/search",
          state:{
            handleTrackSearch: {handleTrackSearch},
            tracks: {tracks},
            addTrackToQueue: {addTrackToQueue}
          }
        }}>
          <button>Search for a track</button>
        </Link>
      </div> */}
    

      <TrackSearch
        input={input}
        setInput={setInput}
        handleTrackSearch={handleTrackSearch}
        tracks={tracks}
        addTrackToQueue={addTrackToQueue}
      />

      <Queue queue={queue} />

      <InviteAndCopy
        handleInviteQ={handleInviteQ}
        inviteCode={inviteKey}
        createdQ_URL={createdQ_URL}
        setToken={setToken}
        message={message}
        params={inviteCode}
      />

      <PlayBar spotifyAPI={spotifyApi} selectedDevice={selectedDevice} />
    </div>
  );
}
