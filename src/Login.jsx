function Login() {
    const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPES = [
      "user-read-private",
      "user-read-email",
      "playlist-read-private",
      "user-library-read",
    ];
  
    const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
      "%20"
    )}&response_type=${RESPONSE_TYPE}&show_dialog=true`;
  
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-300">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold text-pink-600 mb-4">🎀 Welcome to Cute Spotify 🎶</h1>
          <p className="mb-6 text-gray-600">Login to start your playlist party!</p>
          <a
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow"
            href={loginUrl}
          >
            Login with Spotify
          </a>
        </div>
      </div>
    );
  }
  
  export default Login;
  