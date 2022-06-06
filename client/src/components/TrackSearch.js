import React from 'react';

export default function TrachSearch(props) {


  return (
    <div className="row">
    <p>Search for a Track</p>
    <input value={props.input} onChange={e=> props.setInput(e.target.value)}/>
    <button onClick={props.handleTrackSearch}>Search</button>
    <ul>
      { props.tracks.map(track=> (
       <div key={track.id}>
       <div>
        <img src={track.album.images[2].url} alt="" />
      </div>
       <a href={track.external_urls.spotify}>{track.name}</a>
       <div>
       {track.artists[0].name}
       </div>
       <button onClick={()=> props.addTrackToQueue(track)}>Add to Queue</button>
       </div>
      ))}
    </ul>
    </div>
  )
}
