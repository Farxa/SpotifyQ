import React from 'react';


export default function Devices(props) {
	


  return (
      <div>
      Devices
          <button style={{marginBottom: '20px'}} onClick={()=> props.getAllDevices()}>Select a device  <i className="far fa-hand-pointer"></i></button>
          				{props.devices.length > 0 && (
                			<select style={{marginBottom: '15px', width: '170px', marginRight: '20px'}} 
							name="device" id="" onChange={props.selectDevice}>
                    		<option value="">Choose a device</option>
                    		{props.devices.map(device => (
                    		<option value={device.id} key={device.id}>{device.name}</option>
                   		 	))}
               		 		</select>
            			)}
      </div>
  )
}
