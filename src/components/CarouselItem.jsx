import React from 'react';  
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss';
import iconPlay from '../assets/images/play-icon.png';
import iconPus from '../assets/images/plus-icon.png';


const CarouselItem = ({title, duration, year, cover, contentRating}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={iconPlay} alt="Play Icon"/> 
            <img className="carousel-item__details--img" src={iconPus} alt="Plus Icon"/> 
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{year} {contentRating} {duration} minutos</p>
        </div>
      </div>
)

CarouselItem.prototype = {
  title : PropTypes.string,
  duration: PropTypes.number,
  year: PropTypes.string,
  cover: PropTypes.string,
  cover: PropTypes.string
}


export default CarouselItem