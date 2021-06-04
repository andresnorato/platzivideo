import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../assets/styles/components/CarouselItem.scss";
import iconPlay from "../assets/images/play-icon.png";
import iconPus from "../assets/images/plus-icon.png";
import iconRemove from '../assets/images/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png'
import { setFavorite, deleteFavorite } from "../actions";

const CarouselItem = (props) => {
  const { id , title, duration, year, cover, contentRating } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      title,
      duration,
      year,
      cover,
      contentRating,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={iconPlay}
            alt="Play Icon"
          />
            <img
              className="carousel-item__details--img"
              src={iconPus}
              alt="Plus Icon"
              onClick = {handleSetFavorite}
            />

            <img
              className="carousel-item__details--img"
              src={iconRemove}
              alt="Plus Remove"
              onClick = {()=> handleDeleteFavorite(id)}
            />


        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {year} {contentRating} {duration} minutos
        </p>
      </div>
    </div>
  );
};

CarouselItem.prototype = {
  id: PropTypes.number,
  title: PropTypes.string,
  duration: PropTypes.number,
  year: PropTypes.string,
  cover: PropTypes.string,
  cover: PropTypes.string,
};

const mapdispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapdispatchToProps)(CarouselItem);
