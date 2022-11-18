import React, { useState, useEffect } from 'react';
import './HeroSlide.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import Youtube from 'react-youtube';
import Button, { ButtonOutline, ButtonPlay } from './../button/Button';
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import Modal from '../modal/Modal';
import { FaPlay } from 'react-icons/fa';
import ApiConfig from '../../api/apiConfig';
import tmdbApi, { movieType, category } from '../../api/tmdbApi';
import { useHistory } from 'react-router-dom';

const HeroSlide = () => {
  const [moviesItems, setMoviesItems] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);


  let history = useHistory();

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
        setMoviesItems(response.results.slice(3, 6));
      } catch (error) {
        console.log(error.response);
      }
    }
    getMovies();
  }, []);

  const fetchTrailer = async (movie) => {

    await tmdbApi.getVideos(category.movie, movie.id)
      .then((responseData) => {
        setTrailerUrl(responseData.results[0].key)
      })
      .catch((error) => console.log(error))
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      fetchTrailer(movie)
    }
  };

  const opts = {
    playerVars: { 
      autoplay: 1,
      controls: 0,
      autohide: 1,
      wmode: 'opaque',
      origin: 'http://localhost:8100' 
  },
  }

  return (
    <>
      <Swiper
        direction={"vertical"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        style={{
          "--swiper-pagination-color": "black",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1"
        }}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {moviesItems.map((movie) => (
          <SwiperSlide key={movie.id} style={{
            backgroundImage: `url(${ApiConfig.originalImage(movie.backdrop_path)})`,
            backgroundPosition: 'center', backgroundSize: 'cover'
          }}>
            <div className='content-overlay'></div>
            <div className='content_movie_content_info'>
              <h1 className='content-title'>{movie.title || movie.name}</h1>
              <p className='content-desc'>{movie.overview}</p>
              <Button className='btn-content' onClick={() => history.push('/movie/' + (movie.id))}>
                WATCH NOW
              </Button>
              <ButtonOutline onClick={() => { setOpenModal(true); handleClick(movie) }} >
                Watch Trailer
              </ButtonOutline>
              <Modal open={openModal} onClose={() => { setOpenModal(false); handleClick(movie) }} >
              </Modal>
              <div className='content-trailer'>
                <img src={`${ApiConfig.w500Image(movie.poster_path)}`} alt={movie.name} />
                <ButtonPlay className='btn-play'>
                  <FaPlay size={20} className="Faplay" onClick={() => { setOpenModal(true); handleClick(movie) }} />
                </ButtonPlay>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {trailerUrl && <Youtube className='player-yt' videoId={trailerUrl} iframeClassName='iframe-yt' opts={opts} />}
      </Swiper>
    </>
  )
}

export default HeroSlide;