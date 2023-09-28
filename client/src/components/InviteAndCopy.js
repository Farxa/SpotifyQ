import QRCode from 'qrcode.react'

export default function InviteAndCopy(props) {

  const inviteURL = props.createdQ_URL
  //const inviteQR = inviteURL + props.params


  

  return (
    <div className="row">
      <button onClick={props.handleInviteQ}>
        Invite friends to join your Q
      </button>
      {props.inviteCode && (
        <>
          <input type="text" value={inviteURL} id="createdQ" />
          <button
            onClick={() => {
              navigator.clipboard.writeText(inviteURL);
            }}
          >
            Copy to Clipboard
          </button>
          <br />
          <br />
          <div>
           <QRCode value={inviteURL}/>
          </div>
          <br />
          <br />
        </>
      )}
    </div>
  );
}
