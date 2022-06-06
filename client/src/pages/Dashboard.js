import React, { useEffect, useState } from "react";
import { useAuth } from "../useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import Devices from "../components/Devices";
import CreateQ from "../components/CreateQ";



// import Logout from '../components/Logout';

const spotifyApi = new SpotifyWebApi({
  clientId: "ea28d4ba34f34b44b59c640052c6e098",
});

export default function Dashboard(props) {
  const [token, setToken] = useState(null);
  const accessToken = useAuth(props.code);

  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (!accessToken) return;
    const _token = accessToken;
    setToken(_token);
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.getMe().then(data => {
      setName(data.body.display_name)
      setImg(data.body.images[0].url)
    });
    
  }, [accessToken]);

  console.log("USER: ", name, img);

  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState("");

  const getAllDevices = () => {
    spotifyApi.getMyDevices().then(data => {
      setDevices(data.body.devices);
      console.log("DEVICES", data.body.devices);
    });
  };

  const selectDevice = e => {
    setSelectedDevice(e.target.value);
  };


  return (
    <div>
      {/* <Logout token={accessToken}/> */}
      {name && img ? (
        <>
        <div>
          <h3>Hi {name}</h3>
          <img src={img} alt="" width="60px"/>
        </div>
        <div>
        <Devices
          getAllDevices={getAllDevices}
          selectDevice={selectDevice}
          devices={devices}
        />
      </div>

      <div>
        <CreateQ
          token={token}
          spotifyApi={spotifyApi}
          selectedDevice={selectedDevice}
          setToken={setToken}
          setSelecedDevice={selectDevice}
        />
      </div>
      </>
      ) : (
        <>
        <div>
        <Devices
          getAllDevices={getAllDevices}
          selectDevice={selectDevice}
          devices={devices}
        />
      </div>

      <div>
        <CreateQ
          token={token}
          spotifyApi={spotifyApi}
          selectedDevice={selectedDevice}
          setToken={setToken}
          setSelecedDevice={selectDevice}
        />
      </div>
      </>
      )}
    </div>
  );
}
