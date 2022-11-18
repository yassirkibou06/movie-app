import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonOutline } from '../components/button/Button';
import HeroSlide from '../components/heroSlide/HeroSlide';

import { category, movieType, tvType } from '../api/tmdbApi';
import MovieList from '../components/movie-list/MovieList';

function Home() {
  return (
    <>
      <HeroSlide />
      <div className='container'>
        <div className='section mb-3 mt-2'>
          <div className='section_header mb-2'>
            <h2>Popular Movies</h2>
            <Link to='/movie'>
              <ButtonOutline className="small">View more</ButtonOutline>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className='section mb-3 mt-2'>
          <div className='section_header mb-2'>
            <h2>Top Rated Movie</h2>
            <Link to='/movie'>
              <ButtonOutline className="small">View more</ButtonOutline>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className='section mb-3 mt-2'>
          <div className='section_header mb-2'>
            <h2>Upcoming Movies</h2>
            <Link to='/movie'>
              <ButtonOutline className="small">View more</ButtonOutline>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming} />
        </div>

        <div className='section mb-3 mt-2'>
          <div className='section_header mb-2'>
            <h2>TV Shows Airing Today</h2>
            <Link to='/movie'>
              <ButtonOutline className="small">View more</ButtonOutline>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air} />
        </div>

        <div className='section mb-3 mt-2'>
          <div className='section_header mb-2'>
            <h2>Top Rated Tv</h2>
            <Link to='/tv'>
              <ButtonOutline className="small">View more</ButtonOutline>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  )
}

export default Home;