import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';

// NEW FEATURE Display the title and some other data.
// NEW FEATURE Might have to create a new component.

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // console.log(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        <div className='row__card'>
          {movies.map((movie) => {
            return (
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
            );
          })}
          {/* {movies.map((movie) => console.log(movie.original_name))} */}
        </div>
      </div>
    </div>
  );
};

export default Row;
