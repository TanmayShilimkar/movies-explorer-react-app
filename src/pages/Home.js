import React, {useEffect, useState} from 'react';
import axios from 'axios';
import HeroSection from '../components/Herosection';
import MovieRow from '../components/MovieRow';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;

 const fetchData = async (endpoint) => {
  const res = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
  return res.data.results;
};

const getPopular = () => fetchData('/movie/popular');
const getTopRated = () => fetchData('/movie/top_rated');
const getUpcoming = () => fetchData('/movie/upcoming');
const getTrending = () => fetchData('/trending/movie/day');
  

function Home() {

  const [popularMovies, setPopular] = useState([]);
  const [trendingMovies, setTrending] = useState([]);
  const [topRatedMovies, setTopRated] = useState([]);
  const [upcomingMovies, setUpcoming] = useState([]);

 
  useEffect(() => {
    getTopRated().then(setTopRated);
    getUpcoming().then(setUpcoming);
    getPopular().then(setPopular);
    getTrending().then(setTrending);
  }, []);

  return (
    <div>
      {trendingMovies[0] && <HeroSection movie={trendingMovies[0]}/>}
      <MovieRow title="Trending Movies" movies={trendingMovies} type="movie"/>
      <MovieRow title="Popular Movies" movies={popularMovies} type="movie"/>
      <MovieRow title="Top Rated Movies" movies={topRatedMovies} type="movie"/>
      <MovieRow title="Upcomimg Movies" movies={upcomingMovies} type="movie"/>
    </div>
  )
}

export default Home
