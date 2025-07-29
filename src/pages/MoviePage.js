import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Star, CalendarDays, Timer, Play} from "lucide-react"

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function MoviePage({type}) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    if (!type) return;

    axios
      .get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`)
      .then(res => setMovie(res.data))
      .catch(err => console.error("Error fetching movie:", err));
  }, [id, type]);

  if (!movie) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${IMG_URL}${movie.backdrop_path})` }}
      ></div>

      <div className="relative z-10 p-6 md:p-16 flex flex-col md:flex-row items-start gap-10">
        <img
          src={`${IMG_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-64 rounded-xl shadow-lg hidden md:block"
        />

        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{movie.title}</h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-100 mb-4 items-center">
            <span className="flex gap-1"><Star color="yellow" size={20}/> {movie.vote_average.toFixed(1)}</span>
            <span className="flex gap-1"><CalendarDays color="white"/> {movie.release_date}</span>
            <span className="flex gap-1"><Timer color="white"/> {movie.runtime} mins</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map(genre => (
              <span
                key={genre.id}
                className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-6">
            {movie.overview}
          </p>

          <button className="flex gap-2 items-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition">
            <Play size={24}/> Play Trailer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
