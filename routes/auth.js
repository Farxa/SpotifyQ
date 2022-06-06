const router = require('express').Router();
const Queue = require("../models/Queue")
const spotifyWebApi = require("spotify-web-api-node");
require('dotenv').config();

const credentials = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI || "http://localhost:3000/"
  };
   //console.log("these are the credentials:", credentials)
  
  router.post('refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    console.log("this is the refreshToken:", refreshToken)
  
    let spotifyApi = new SpotifyWebApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: process.env.REDIRECT_URI,
      refreshToken
    });
  
    spotifyApi
    .refreshAccessToken()
    .then(() => {
      console.log(data.body)
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in
      })
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
  });
  
  
  
  router.post('/login', (req,res) => {
    //  setup 
        let spotifyApi = new spotifyWebApi(credentials)
    
    //  Get the "code" value posted from the client-side and get the user's accessToken from the spotify api     
        const code = req.body.code
    
        // Retrieve an access token
        spotifyApi.authorizationCodeGrant(code).then((data) => {
    
            // Returning the User's AccessToken in the json formate  
            res.json({
                accessToken : data.body.access_token,
            }) 
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400)
        })
    
    });


    router.get('/:inviteCode',  (req, res, next) => {
      Queue.findOne({inviteCode: req.params.inviteCode})
      .then(queueDoc=> {
        if (queueDoc) {
          console.log("5ara on the route")
          res.status(200).json(queueDoc);
        } else  {
          res.status(401).json({message: 'heute leider nicht'})
        }
      }).catch(err => {
        next(err);
      })
    });

    module.exports = router;