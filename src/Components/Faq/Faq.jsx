const Faq = () => {
  return (
    <>
      <div className=" text-center text-4xl font-bold my-5">FA&apos;Q </div>
      <div className="max-w-[1300px] mx-auto">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-bold">
            What services does Eventador offer for event planning?
          </div>
          <div className="collapse-content">
            <p>
              At Eventador, we offer a wide range of event planning services,
              including venue selection, event design and decoration, catering,
              entertainment booking, and logistics coordination. Whether
              you&apos;re planning a wedding, corporate event, or private party,
              we&apos;ve got you covered.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold">
            How experienced is Eventador&apos;s team in event management?
          </div>
          <div className="collapse-content">
            <p>
              Our event management team at Eventador has years of experience in
              the industry. We&apos;ve successfully organized a wide range of
              events, from small intimate gatherings to large-scale conferences
              and weddings. Our experienced professionals are dedicated to
              ensuring the success of your event.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold">
            Can Eventador customize event packages to fit our needs?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we understand that every event is unique. Eventador offers
              customizable event packages to meet your specific requirements and
              budget. Our team will work closely with you to tailor our services
              to create an unforgettable event that aligns with your vision.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
