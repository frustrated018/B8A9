
const Gallery = () => {
  const eventPhotos = [
    "https://i.ibb.co/pfd4R85/promotion.jpg",
    "https://i.ibb.co/QdmJXFC/babyshower.jpg",
    "https://i.ibb.co/vVH6KmN/random2.jpg",
    "https://i.ibb.co/gDwqJpY/random.jpg",
    "https://i.ibb.co/H7pmprB/moivienight.jpg",
    "https://i.ibb.co/GQXknVj/graduation3.jpg",
    "https://i.ibb.co/PjPHjnz/graduation2.jpg",
    "https://i.ibb.co/MD4QmDN/graduation1.jpg",
    "https://i.ibb.co/J2d0khY/familyreunion.jpg",
    "https://i.ibb.co/3fwVqNj/engagement.jpg",
    "https://i.ibb.co/8YMbkL9/wedding.jpg",
    "https://i.ibb.co/F06pJCX/retirement.jpg",
    "https://i.ibb.co/4KX7sby/aniversary.jpg",
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 ">Event Gallery</h2>
        <p className="text-sm font-semibold text-center mb-8">Some special moments from events we hosted.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventPhotos.map((photo, index) => (
            <div key={index} className="relative">
              <img
                src={photo}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center">
                <span className="text-white text-xl font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
