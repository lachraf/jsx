
import './App.css';
import myWonderfulImage from "./playlist-style.jpg"
import myWonderfulVideo from "./video/videoplayback.mp4"
import './style.css';

function App() {
  return (
    <div className="App">
      <div >
          <h1 className="title red"> Lachraf Music Playlist </h1>
          <br />
          <img src="/mus-image.jpg" alt="mus-imag" /> 
          <br />
          <h1 className="title red"> Music Playlist </h1>
          <br />
          <img className="music" src={myWonderfulImage} alt="playlist-style" />
          <img className="music" src={myWonderfulImage} alt="playlist-style" />
          <h1 className="title red"> video  </h1>
          </div>
          <video id="videos" controls>
          <source src={myWonderfulVideo} type="video/mp4" />
          </video>
    </div>
  );
}

export default App;
