// import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios"

// const useAuth = (code) => {
//     const [accessToken, setAccessToken] = useState();

//     useEffect(() => {
//         axios
//             .post("http://localhost:8000/login", {code})
//             .then((res) => {

//                 window.history.pushState({}, null, "/");

//                 console.log("accessToken:", res.data.accessToken);
//                 setAccessToken(res.data.accessToken);
//             })
//             .catch(() => {
//                 window.location = "/";
//             });

//     }, [code]);

//     return accessToken;
// }

const useAuth = code => {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
  
    useEffect(() => {
      ;(async () => {
        try {
          const {
            data: { access_token, refresh_token, expires_in },
          } = await axios.post("http://localhost:8000/login", {
            code,
          })
          setAccessToken(access_token)
          setRefreshToken(refresh_token)
          setExpiresIn(expires_in)
          window.history.pushState({}, null, "/")
        } catch {
          window.location = "/"
        }
      })()
    }, [code])
  
    useEffect(() => {
      if (!refreshToken || !expiresIn) return
      const interval = setInterval(async () => {
        try {
          const {
            data: { access_token, expires_in },
          } = await axios.post(`${process.env.REACT_APP_BASE_URL}/refresh`, {
            refreshToken,
          })
          setAccessToken(access_token)
          setExpiresIn(expires_in)
        } catch {
          window.location = "/"
        }
      }, (expiresIn - 60) * 1000)
  
      return () => clearInterval(interval)
    }, [refreshToken, expiresIn])
  
    return accessToken
  }


export {useAuth};