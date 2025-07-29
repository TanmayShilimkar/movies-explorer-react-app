import React from 'react';
import { Play } from 'lucide-react';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function HeroSection({movie, isNetflixSeries = true}) {
  return(
    <div className="flex relative w-full h-[500px] bg-white text-white">
      <div className="flex-initial w-1/3">
        <div className="inset-0 p-8 flex flex-col justify-center bg-black h-full">
          {isNetflixSeries && (
            <div className="text-sm font-semibold text-gray-300 tracking-widest mb-1">
              <span className="text-red-600 mr-1">N</span>SERIES
            </div>
          )}
            <h1 className="text-6xl font-bold mb-8 uppercase">
              <span className="text-white ">{movie.title}</span>{" "}
              {/* <span className="text-red-600"></span> */}
            </h1>
            <p className="text-lg my-4"><span className='bg-amber-500 px-1 font-bold text-black'>IMDb</span> {movie.vote_average.toFixed(1)}/10</p>
            <div className="mt-4 flex gap-4">
              <button className="bg-red-600 text-white text-lg flex items-center gap-2 px-4 py-2 rounded-3xl">
                <Play className="w-4 h-4" /> Play
              </button>
              <button className="border border-white text-lg text-white px-4 py-2 rounded-3xl">
                Watch Trailer
              </button>
            </div>
          </div>
      </div>
      <div className="relative flex-1 w-2/3">
          <img
            src={`${IMG_URL}${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading='lazy'
          />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent via-50% to-black"></div>
      </div>
    </div>
  )
}

export default HeroSection;