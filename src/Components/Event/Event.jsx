import { BsPerson } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import PropTypes from "prop-types";

const Event = ({ eventdata }) => {
  const { description, id, event_name, img, price, seating_size, venue_name } =
    eventdata;

  console.log(event_name);

  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto ">
        {/* image */}
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={img} alt="image" className="h-full w-full object-cover" />
        </div>
        {/* text content */}
        <div className="p-6">
          {/* pricing */}
          <div className="mb-4 font-sans text-xl font-bold leading-relaxed tracking-normal text-yellow-500 antialiased flex justify-center items-center gap-6">
            <div className=" flex gap-1 justify-center items-center">
              <BsPerson></BsPerson> 300
            </div>
            <div className=" flex gap-1 justify-center items-center">
              <BiSolidDollarCircle></BiSolidDollarCircle> 400
            </div>
          </div>
          {/* title and description */}
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {event_name}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
          <a className="inline-block" href="#">
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-yellow-500 transition-all hover:bg-yellow-500/10 active:bg-yellow-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Book A date
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  eventdata: PropTypes.object,
};

export default Event;
