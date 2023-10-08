import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="text-3xl text-center text-yellow-400">
        this is the home page
      </div>
      <div className=" mx-3 md:mx-6 lg:mx-0">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;
