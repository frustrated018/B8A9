import Event from "../Event/Event";
import PropTypes from 'prop-types';

const Events = ({events}) => {


  return (
    <>
      <div className="flex flex-col gap-5">
        {
          events?.map(eventdata =><Event key={eventdata.id} eventdata={eventdata}></Event>)
        }
      </div>
    </>
  );
};
Events.propTypes = {
  events: PropTypes.array
}
export default Events;
