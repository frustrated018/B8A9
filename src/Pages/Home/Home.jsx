import { useLoaderData } from "react-router-dom";
import Events from "../../Components/Events/Events";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  const events = useLoaderData();

  return (
    <div>
      <div className=" mx-3 md:mx-6 lg:mx-0">
        <Slider></Slider>
        <h2 className="text-center text-yellow-400 text-4xl my-10">
          Our services
        </h2>
        <div className="mb-10">
          <Events events={events}></Events>
        </div>
      </div>
    </div>
  );
};

export default Home;
