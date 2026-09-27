import mapImg from "../assets/images/map.png";

export default function MapSection() {
  return (
    <section id="availability" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl font-extrabold italic tracking-tight text-slate-900 sm:text-4xl">
          WHERE CAN YOU GO?
        </h2>
        <div className="mt-10 flex justify-center">
          <img
            src={mapImg}
            alt="Availability map"
            className="
  w-[280px]
  sm:w-[360px]
  md:w-[440px]
  lg:w-[520px]
  xl:w-[600px]
  drop-shadow-sm
"
          />
        </div>
      </div>
    </section>
  );
}
