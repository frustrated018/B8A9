import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";

const EventDetails = () => {

    const [event, setEvent] = useState({});

    const { id } = useParams();
  
    const events = useLoaderData();
  
    useEffect(() => {
      const clickedEvent = events?.find(
        (e) => parseInt(e.id) === parseInt(id)
      );
      setEvent(clickedEvent)
    }, [id, events]);


    return (
        <div>
            <DetailsBanner key={event.id} event={event}></DetailsBanner>
        </div>
    );
};

export default EventDetails;