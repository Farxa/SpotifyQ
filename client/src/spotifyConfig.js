const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "ea28d4ba34f34b44b59c640052c6e098";

const scopes = [
  "streaming",
  "playlist-modify-public",
  "ugc-image-upload",
  "user-read-email",
  "user-read-private",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state"
];

// export const getTokenFromResponse = () => {
//   return window.location.hash
//     .substring(1)
//     .split("&")
//     .reduce((initial, item) => {
//       var parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);

//       return initial;
//     }, {});
// };

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;