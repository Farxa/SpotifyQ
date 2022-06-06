// import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios"

const useAuth = (code) => {
    const [accessToken, setAccessToken] = useState();

    useEffect(() => {
        axios
            .post("http://localhost:8000/login", {code})
            .then((res) => {

                window.history.pushState({}, null, "/");

                console.log("accressToken:", res.data.accessToken);
                setAccessToken(res.data.accessToken);
            })
            .catch(() => {
                window.location = "/";
            });

    }, [code]);

    return accessToken;
}



const logout = () => {
    return axios.delete('/logout')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.res.data;
        });
}

export {useAuth, logout};