import { Carousel } from "react-carousel-minimal";

const Slider = () => {
  const data = [
    {
      image: "https://i.ibb.co/8YMbkL9/wedding.jpg",
      caption: "Love's big day, unforgettable moments.",
    },
    {
      image: "https://i.ibb.co/ZgsnKzH/birthday.jpg",
      caption: "Fun, surprises, and birthday joy.",
    },
    {
      image: "https://i.ibb.co/4KX7sby/aniversary.jpg",
      caption: "Elegant night celebrating enduring love.",
    },
    {
      image: "https://i.ibb.co/3fwVqNj/engagement.jpg",
      caption: "Celebrating love's next chapter.",
    },
    {
      image: "https://i.ibb.co/F06pJCX/retirement.jpg",
      caption: "Cheers to a well-deserved retirement.",
    },
    {
      image: "https://i.ibb.co/gDwqJpY/random.jpg",
      caption: "Welcoming new life with love.",
    },
    {
      image: "https://i.ibb.co/J2d0khY/familyreunion.jpg",
      caption: "Bonds strengthened, memories cherished.",
    },
    {
      image: "https://i.ibb.co/vVH6KmN/random2.jpg",
      caption: "New home, warm hearts.",
    },
    {
      image: "https://i.ibb.co/QcKtWcJ/graduation4.jpg",
      caption: "High school farewell in style.",
    },
    {
      image: "https://i.ibb.co/pfd4R85/promotion.jpg",
      caption: "Cheers to career success.",
    },
    {
      image: "https://i.ibb.co/H7pmprB/moivienight.jpg",
      caption: "Movie magic, themed fun.",
    },
    {
      image: "https://i.ibb.co/GQXknVj/graduation3.jpg",
      caption: "Farewell to new beginnings.",
    },
    {
      image: "https://i.ibb.co/Wzz5gs3/genderreveal.jpg",
      caption: "Joyful baby gender reveal.",
    },
    {
      image: "https://i.ibb.co/cN0RLJ1/engagement2.jpg",
      caption: "Cherishing love's spark.",
    },
    {
      image: "https://i.ibb.co/MD4QmDN/graduation1.jpg",
      caption: "Diploma in hand, future awaits.",
    },
    {
      image: "https://i.ibb.co/jD2nJks/housewarming.jpg",
      caption: "New home, new memories.",
    },
    {
      image: "https://i.ibb.co/QdmJXFC/babyshower.jpg",
      caption: "Celebrating a bundle of joy.",
    },
  ];

  const captionStyle = {
    fontSize: "30px",
    fontWeight: "200",
    color: "#ffea00",
  };

  return (
    <>
      <div>
        <Carousel
          data={data}
          time={2000}
          width="1300px"
          height="500px"
          captionStyle={captionStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            textAlign: "center",
            maxWidth: "1300px",
            maxHeight: "500px",
            margin: "20px auto",
          }}
        />
      </div>
    </>
  );
};

export default Slider;
