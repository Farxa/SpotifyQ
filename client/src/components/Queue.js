import React from 'react';

export default function Queue(props) {
  return (
    <ul>
    <p>QUEUE TRACKS</p>
    {props.queue.map(queueTrack => (
      <li key={queueTrack.id}>
      <div>
      <img src={queueTrack.album.images[2].url} alt="" />
      </div>
       <div>
       <p>{queueTrack.name}</p>
       </div>
       <div>
       {queueTrack.artists[0].name}
       </div>
       </li>
     ))}
    </ul>
  )
}