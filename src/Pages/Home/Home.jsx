import { useLoaderData } from "react-router-dom";
import Events from "../../Components/Events/Events";
import Slider from "../../Components/Slider/Slider";
import UserReview from "../../Components/UserReview/UserReview";
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";

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
        <div className="my-8">
          <UserReview></UserReview>
        </div>
        <div className="my-8">
          <Faq></Faq>
        </div>
        <div className="mt-8">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
