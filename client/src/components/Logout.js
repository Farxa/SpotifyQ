import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { logout } from '../useAuth';

export default function Logout(props) {
	const [token, setToken] = useState(props.token);
	console.log("TOKEN", token)

    const handleLogout = () => {
		logout().then(() => {
			setToken(null);
		})
	}


    return (
        <Link to="/" onClick={() => handleLogout()}>
			<button>Logout</button>
		</Link>
    )
}
