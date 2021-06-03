import React, { useState, useEffect } from "react";

import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import useInitialState from '../hooks/useInitialState';

import "../assets/App.scss";

const API = 'http://localhost:3000/initalState';


const App = () => {
 
  const initialSate = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {initialSate.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {
              initialSate.mylist.map(item => (
                <CarouselItem key={item.id} {...item} />
              ))
            }
          </Carousel>
        </Categories>
      )}

      {initialSate.trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {
              initialSate.trends.map(item=>(
                <CarouselItem key={item.id} {...item} />
              ))
            }
          </Carousel>
        </Categories>
      )}

      {
        initialSate.originals.length > 0 &&
        <Categories title="Originales de Platzi Video">
        <Carousel>
          {
            initialSate.originals.map(item =>(
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categories>
      }
      <Footer />
    </div>
  );
};

export default App;
