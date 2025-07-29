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

const getPopular = () => fetchData('/tv/popular');
const getTopRated = () => fetchData('/tv/top_rated');
const getTrending = () => fetchData('/trending/tv/day');

function Movies() {

  const [popularTv, setPopular] = useState([]);
  const [trendingTv, setTrending] = useState([]);
  const [topRatedTv, setTopRated] = useState([]);

 
  useEffect(() => {
    getTopRated().then(setTopRated);
    getPopular().then(setPopular);
    getTrending().then(setTrending);
  }, []);

  return (
    <div>
      {popularTv[0] && <HeroSection movie={popularTv[0]}/>}
      <MovieRow title="Trending TV Shows" movies={trendingTv} type="tv"/>
      <MovieRow title="Popular TV Shows" movies={popularTv} type="tv"/>
      <MovieRow title="Top Rated TV Shows" movies={topRatedTv} type="tv"/>
    </div>
  )
}

export default Movies
