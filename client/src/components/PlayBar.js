import React, { useState, useEffect } from "react";

export default function PlayBar(props) {
  const [nowPlaying, setNowPlaying] = useState([]);

  //useEffect(()=> {
		// const handleNowPlaying = setTimeout(
    //   () => {
    //     props.spotifyAPI.getMyCurrentPlayingTrack()
    //     .then(data => {
    //       if (data.body) {
    //           console.log(data.body)
    //         setNowPlaying(data.body.item);
    //         console.log("nowPlaying:", nowPlaying.album);
    //       }
    //         }
    //     );
    //   }, 1000);	
	//}, []) 

  
		const handleNowPlaying = setTimeout(
      () => {
        props.spotifyAPI.getMyCurrentPlayingTrack()
        .then(data => {
          if (data.body) {
              console.log(data.body)
            setNowPlaying(data.body.item);
            console.log("nowPlaying:", nowPlaying.album);
          }
            }
        );
      }, 1000);

  
  const handlePlayClick = () => {
   
    props.spotifyAPI
      .transferMyPlayback([props.selectedDevice], { play: true })
      .then(function () {
        //handleNowPlaying()
        console.log("Transfering playback to " + props.selectedDevice);
      }).then(
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log("Something went wrong!", err);
      })
  };

  const handlePauseClick = () => {
    props.spotifyAPI
      .transferMyPlayback([props.selectedDevice], { play: false })
      .then(
        function () {
          console.log("Transfering playback to " + props.selectedDevice);
        })
        .then(
        function (err) {
          //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
          console.log("Something went wrong!", err);
        })
  };

  const handleNextClick = () => {
    props.spotifyAPI.skipToNext().then(
      data => {
        console.log("skip to next track", data);
      }).then(
      err => {
        console.log(err);
      })
  };

  const handlePreviousClick = () => {
    props.spotifyAPI.skipToPrevious().then(
      data => {
        console.log("skip to previous track", data);
      })
      .then(
      err => {
        console.log(err);
      })
  };

  if (props.selectedDevice && nowPlaying.album){ return (
    <div>
      <div>
        Now Playing:
        <img
          src={nowPlaying.album.images[0].url}
          alt=""
          style={{ width: 50, height: 50 }}
        />  
        {nowPlaying.name}
      </div>

      <button
        type="button"
        onClick={() => {
          handlePreviousClick();
        }}
      >
        <i className="fa fa-backward fa-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => {
          handlePlayClick();
        }}
      >
        <i className="fa fa-play fa-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => {
          handlePauseClick();
        }}
      >
        <i className="fa fa-pause fa-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => {
          handleNextClick();
        }}
      >
        <i className="fa fa-forward fa-lg"></i>
      </button>
    </div>
  )} else {
    return (
    
    <div>
      <button
        type="button"
        onClick={() => {
          handlePreviousClick();
        }}
      >
        <i className="fa fa-backward fa-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => {
          handlePlayClick();
        }}
      >
        <i className="fa fa-play fa-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => {
          handlePauseClick();
        }}
      >
        <i className="fa fa-pause fa-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => {
          handleNextClick();
        }}
      >
        <i className="fa fa-forward fa-lg"></i>
      </button>
    </div>
  );}
}

