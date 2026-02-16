export default function Hero() {
  return (
    <div className="container mx-auto mt-10 grid gap-4 px-6 md:grid-cols-2">
      <div className="order-2 mr-5 flex flex-col justify-center md:order-1">
        <div className="space-y-6">
          <h1 className="text-[48px] font-bold text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
            corrupti?
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            consequuntur voluptatem culpa consectetur facilis voluptas mollitia
            nam! Culpa a voluptate tenetur accusantium quasi dolorum.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            <div className="flex w-fit rounded-full bg-white p-2">Hotel</div>
            <div className="flex w-fit rounded-full bg-white p-2">
              Luxury Staycation
            </div>
            <div className="flex w-fit rounded-full bg-white p-2">
              Tour Guide
            </div>
            <div className="flex w-fit rounded-full bg-white p-2">
              Local Experiences
            </div>
            <div className="flex w-fit rounded-full bg-white p-2">Airbnb</div>
            <div className="flex w-fit rounded-full bg-white p-2">
              Culinary Tours
            </div>
          </div>
          <div className="my-4 flex gap-2">
            <button className="rounded-md bg-black p-2 text-white hover:bg-white hover:text-black hover:transition">
              Lihat Program
            </button>
            <button className="rounded-md bg-black p-2 text-white">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
      <div className="order-1 h-[500px]">
        <img
          src="/SeoulCityGuide_04-1800x2452.avif"
          className="h-full w-full rounded-md object-cover"
          alt=""
        />
      </div>
    </div>
  );
}
