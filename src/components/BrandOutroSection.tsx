import logo from "../assets/images/outer.png";

export default function BrandOutroSection() {
  return (
    <section className="relative bg-sky-700">
      <div className="absolute top-0 left-0 h-26 w-full bg-gradient-to-b from-white to-transparent" />
      <div className="relative pt-36 pb-12">
        <div className="mx-auto max-w-7xl px-4 flex justify-center">
          <img src={logo} alt="TapTap Maps" className="h-28 opacity-80" />
        </div>
      </div>
    </section>
  );
}
