import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTrack } from "../redux/slices/playerSlice";
import { toggleLike } from "../redux/slices/LikesSlice";
import "../App.css";

const MainLinks = () => (
  <div className="row">
    <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
      <a href="#">TRENDING</a>
      <a href="#">PODCAST</a>
      <a href="#">MOODS AND GENRES</a>
      <a href="#">NEW RELEASES</a>
      <a href="#">DISCOVER</a>
    </div>
  </div>
);

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();
  const isLiked = useSelector((state) => state.likes.likedSongs.includes(song.id));
  const handleClick = () => {
    dispatch(setCurrentTrack(song));
  };
  const handleLike = () => {
    dispatch(toggleLike(song.id));
  };

  return (
    <div className="col text-center position-relative albumCard">
      <img className="img-fluid albumCard" src={song.album.cover_medium} alt="track" onClick={handleClick} />
      <p>
        Track: {song.title}
        <br />
        Artist: {song.artist.name}
      </p>
      <button
        className={`btn rounded-circle position-absolute likeButton bottom-0 end-0 m-2 ${
          isLiked ? "btn-light bg-success border-success text-white" : "text-secondary"
        }`}
        onClick={handleLike}
      >
        <i className={`bi ${isLiked ? "bi-heart-fill" : "bi-plus"}`}></i>
      </button>
    </div>
  );
};

const Section = ({ id, title, fetchUrl }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        let response = await fetch(fetchUrl);
        if (response.ok) {
          let { data } = await response.json();
          setSongs(data.slice(0, 4));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchSongs();
  }, [fetchUrl]);

  return (
    <div className="row">
      <div className="col-10">
        <div id={id}>
          <h2>{title}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {songs.map((song) => (
              <AlbumCard key={song.id} song={song} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Player = () => {
  const currentTrack = useSelector((state) => state.player.currentTrack);

  return (
    <div className="container-fluid fixed-bottom bg-container w-100 m-0 px-0 pt-1">
      <div className="w-100 row h-100">
        <div className="px-0 col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="d-flex px-0 justify-content-between col-6 col-md-4 playerControls text-left">
              {currentTrack && (
                <div className="d-flex mt-3 me-2 ms-5 text-center">
                  <img className="img-fluid imgPlaybar" src={currentTrack.album.cover_small} alt="track" />
                  <p className="m-0">Now Playing: {currentTrack.title}</p> {/* volevo mettere una card con immagine album ed info però non faccio in tempo */}
                  <p className="mb-3">Artist: {currentTrack.artist.name}</p>
                </div>
              )}
              <div className="d-flex mx-5 w-50 mt-4">
                <a href="#">
                  <img src="../img/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="../img/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="../img/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="../img/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="../img/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage ">
      <MainLinks />
      <Section id="rock" title="Rock Classics" fetchUrl="https://striveschool-api.herokuapp.com/api/deezer/search?q=queen" />
      <Section id="pop" title="Pop Culture" fetchUrl="https://striveschool-api.herokuapp.com/api/deezer/search?q=katyperry" />
      <Section id="hiphop" title="#HipHop" fetchUrl="https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem" />
      <Player />
    </main>
  );
};

export default MainPage;
