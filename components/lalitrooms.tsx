import Image from "next/image";

type Room = {
  name: string;
  description?: string;
  image?: string;
  guests?: number;
  bookingUrl?: string;
};

type LalitRoomsProps = {
  rooms: Room[];
};

export default function LalitRooms({ rooms }: LalitRoomsProps) {
  if (!rooms || rooms.length === 0) {
    return null;
  }

  return (
    <section
      id="rooms"
      className="bg-obsidian px-6 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-gold">
            Stay in Luxury
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-white">
            Suites Designed for
            <span className="block italic text-gold">
              Exceptional Stays
            </span>
          </h2>

          <div className="w-20 h-px bg-gold/50 mx-auto mt-7" />

          <p className="mt-7 text-sm md:text-base leading-relaxed text-sandstone/60">
            Discover thoughtfully designed suites at Hotel Lalit Imperial,
            where refined interiors, intimate spaces and modern comforts
            come together for an unforgettable Udaipur stay.
          </p>

        </div>


        {/* Rooms */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {rooms.map((room, index) => (

            <article
              key={`${room.name}-${index}`}
              className="group overflow-hidden rounded-[28px] border border-gold/20 bg-white/[0.03]"
            >

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">

                {room.image ? (
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/5" />
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />


                {/* Guest Badge */}
                {room.guests && (
                  <div className="absolute top-5 right-5 rounded-full bg-gold px-4 py-2 text-xs font-medium text-obsidian">
                    {room.guests} Guests
                  </div>
                )}


                {/* Availability */}
                <div className="absolute bottom-5 left-5">

                  {room.bookingUrl ? (
                    <a
                      href={room.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-5 py-2.5 text-xs text-white transition hover:bg-gold hover:text-obsidian"
                    >
                      Live Rates & Availability
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-5 py-2.5 text-xs text-white">
                      Luxury Suite
                    </span>
                  )}

                </div>

              </div>


              {/* Content */}
              <div className="p-7 md:p-8">

                <h3 className="font-serif text-2xl md:text-3xl text-white">
                  {room.name}
                </h3>

                {room.description && (
                  <p className="mt-4 text-sm leading-relaxed text-sandstone/60">
                    {room.description}
                  </p>
                )}

                {room.bookingUrl && (
                  <a
                    href={room.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mt-6 items-center gap-2 text-sm text-gold transition hover:gap-3"
                  >
                    Explore Suite
                    <span>→</span>
                  </a>
                )}

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}