import Marquee from "react-fast-marquee";

const UserReview = () => {
  return (
    <>
        <div className=" text-center text-4xl font-bold my-5">User Reviews</div>
      <Marquee>
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto ">
          {/* image */}
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src="https://i.ibb.co/Vqvz08T/christina-wocintechchat-com-Zpzf7-TLj-g-A-unsplash.jpg" alt="image" className="h-full w-full object-cover" />
          </div>
          {/* text content */}
          <div className="p-6">
            {/* title and description */}
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Hannah Peters
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            I had the pleasure of working with the event management team at XYZ Events for my wedding, and I couldnt be happier with the results! From the initial planning stages to the big day itself, they were attentive, creative, and extremely organized. They transformed my vision into a reality, and the attention to detail was impeccable. Our guests were blown away by the beautiful decor and seamless execution. Thank you, XYZ Events, for making our special day absolutely perfect!
            </p>
          </div>
        </div>
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto ">
          {/* image */}
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src="https://i.ibb.co/0VZsNLh/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" alt="image" className="h-full w-full object-cover" />
          </div>
          {/* text content */}
          <div className="p-6">
            {/* title and description */}
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Mark Rutherford
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            I recently hired XYZ Events to organize a corporate conference, and they exceeded all expectations. Their professionalism and expertise were evident from the start. They handled everything from venue selection to audiovisual setup flawlessly. What impressed me the most was their ability to adapt to unexpected challenges and solve them with ease. The event ran smoothly, and our attendees were highly satisfied. I highly recommend XYZ Events for any event planning needs.
            </p>
          </div>
        </div>
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto ">
          {/* image */}
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src="https://i.ibb.co/z2nrJGn/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg" alt="image" className="h-full w-full object-cover" />
          </div>
          {/* text content */}
          <div className="p-6">
            {/* title and description */}
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Jhon Davis
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            I cant say enough good things about XYZ Events! They planned my daughters sweet sixteen party, and it was a huge success. The teams creativity in designing a theme for the party was remarkable. The attention to detail, from the decorations to the entertainment, was outstanding. They made sure every aspect of the event was tailored to my daughters preferences. It was a stress-free experience, and the smiles on everyones faces were priceless. Thank you, XYZ Events, for creating wonderful memories for our family!
            </p>
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default UserReview;
