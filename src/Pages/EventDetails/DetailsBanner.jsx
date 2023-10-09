import PropTypes from "prop-types";
import { BsPerson } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BsFillBuildingsFill } from "react-icons/bs";

const DetailsBanner = ({ event }) => {
  const { description, event_name, img, price, seating_size, venue_name } =
    event;

    const handleBooking = () =>{
        alert("thank you for booking with us")
    }

  return (
    <div>
        {/* Image */}
        <div className="max-w-[1300px] mx-auto">
            <img src={img} className=" w-full h-[40vh] object-contain" />
        </div>
      {/* pricing */}
      <div className="mb-4 font-sans text-xl font-bold leading-relaxed tracking-normal text-yellow-400 antialiased flex flex-col justify-center items-center gap-2">
        <div className=" flex gap-1 justify-center items-center">
          <BsPerson></BsPerson> Seating Capacity: {seating_size} People
        </div>
        <div className=" flex gap-1 justify-center items-center">
          <BiSolidDollarCircle></BiSolidDollarCircle> Price: {price}$
        </div>
        <div className=" flex gap-1 justify-center items-center">
          <BsFillBuildingsFill></BsFillBuildingsFill> Location: {venue_name}
        </div>
      </div>
      <div className="text-4xl font-bold text-center text-yellow-500">
        {event_name}
      </div>
      <div className="text-xl font-bold text-center text-slate-400">
        {description}
      </div >
      <div className="flex justify-center my-5">
      <button onClick={handleBooking} className=" bg-yellow-200 py-2 px-3 rounded-lg font-bold">Book Now</button>
      </div>
    </div>
  );
};
DetailsBanner.propTypes = {
  event: PropTypes.object,
};
export default DetailsBanner;
