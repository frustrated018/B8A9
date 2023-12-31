import Event from "../Event/Event";
import PropTypes from "prop-types";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Events = ({ events }) => {
  const [showAll, setShowAll] = useState(false);

  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-40  gap-5" data-aos="fade-zoom-in" data-aos-delay="300" data-aos-duration="600">
        {showAll
          ? events.map((eventData, idx) => <Event key={idx} eventData={eventData}></Event>)
          : events
              .slice(0, 6)
              .map((eventData, idx) => <Event key={idx} eventData={eventData}></Event>)}
      </div>
      <div className="flex justify-center my-10">
        <button
          className="px-3 py-2 rounded-lg bg-blue-200 "
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show All"}
        </button>
      </div>
    </>
  );
};
Events.propTypes = {
  events: PropTypes.array,
};
export default Events;
