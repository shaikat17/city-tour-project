import React, { useState } from 'react'
import Tour from "../Tour";
import "./tourlist.css";
import { tourData } from "../../tourData";

const TourList = () => {

  const [tours, setTours] = useState(tourData)

  const removeTour = id => {
    const sortedTours = tours.filter(tour => tour.id !== id);
    setTours(sortedTours)
  };

  // console.log(tours);
  
  return (
    <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))}
      </section>
  )
}

export default TourList