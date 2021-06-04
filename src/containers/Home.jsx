import React from "react";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Categories from "../components/Categories";
import Search from "../components/Search";
import useInitialState from "../hooks/useInitialState";

import "../assets/App.scss";

const Home = ({mylist, trends, originals}) => {
  return (
    <div className="App">
      <Search />
      {mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {originals.length > 0 && (
        <Categories title="Originales de Platzi Video">
          <Carousel>
            {originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
    </div>
  );
};

const mapSateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapSateToProps, null)(Home);
