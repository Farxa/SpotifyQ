import React from 'react';
import { loginUrl } from '../spotifyConfig';
// import { logout } from '../useAuth';

export default function Login() {
    
    return (
        <div>
            <a href={loginUrl}>
                <button>LOGIN WITH SPOTIFY</button>
            </a>

            <div className="links">
                <p>
                    ⚠ When joining or creating a Queue, open Spotify to be able to queue up tracks
                </p>
			</div>
        </div>
    )
}
