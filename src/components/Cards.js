import React from 'react';
import {Link} from 'react-router-dom';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function Cards({movie, type}) {
  return (
    <div className="min-w-[200px] bg-black text-white cursor-pointer hover:scale-110 duration-200">
        <Link key={movie.id} to={`/${type}/${movie.id}`}>
          <div className="p-2">
          <img src={`${IMG_URL}${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg" />
          {/* <div className="h-60 bg-gray-800 rounded mb-2 flex items-center justify-center">
              <span className="text-xs">{movie.title}</span>
          </div> */}
        </div>
      </Link>
    </div>
  )
}

export default Cards
