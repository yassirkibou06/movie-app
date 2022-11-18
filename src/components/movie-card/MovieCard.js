import React from 'react';
import './movieCard.scss';
import { FaPlay } from 'react-icons/fa';

import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const MovieCard = props => {
  const item = props.item;

  const link = '/' + category[props.category] + '/' + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div className='movie-card' style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <FaPlay size={20} className='Faplay' />
        </Button>
      </div>
      <h3 className='card-title'>{item.title || item.name}</h3>
    </Link>
  )
}

export default MovieCard;