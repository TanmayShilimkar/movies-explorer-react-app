import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchSearchResults = async () => {
    let searchBox = document.getElementById("search-box");
    if (!query) return;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`
      );
      const result = res.data.results;
      // Filter out only movie and tv types
      const filteredResults = result.filter(
        (item) => item.media_type === "movie" || item.media_type === "tv"
      );
      setResults(filteredResults); // Set to state or use as needed
      
      searchBox.classList.add("hidden");
      document.getElementById("search-results").classList.remove("hidden");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearchResults();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-screen w-full" id="search-box">
        <div className="absolute z-10 w-full max-w-xl">
          <h1 className="text-3xl font-bold mb-2">Find Your Favorite Movies</h1>
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition text-white font-medium"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="p-6 hidden" id="search-results">
          <h2 className='text-white py-8 text-4xl'>Showing Search Results for : {query}</h2>
        {results.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-2">
            {results.map((movie) => 
              movie.poster_path ? (
                <Link key={movie.id} to={`/${movie.media_type}/${movie.id}`}>
                <div key={movie.id} className="relative group overflow-hidden rounded-lg shadow-md">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  {/* <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className="text-sm font-semibold truncate">{movie.title}</h2>
                    <p className="text-xs text-gray-400">{movie.release_date}</p>
                  </div> */}
                </div>
                </Link>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
