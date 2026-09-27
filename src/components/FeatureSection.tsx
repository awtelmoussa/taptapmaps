import searchIcon from "../assets/icons/feature-search.svg";
import saveIcon from "../assets/icons/feature-save.svg";
import directionsIcon from "../assets/icons/feature-direction.svg";

type FeatureRowProps = {
  title: string;
  description: string;
  icon: string;
  imageSide?: "left" | "right";
};

function FeatureRow({
  title,
  description,
  icon,
  imageSide = "left",
}: FeatureRowProps) {
  const imageFirst = imageSide === "left";

  return (
    <div className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className={imageFirst ? "md:order-1" : "md:order-2"}>
            <div className="mx-auto h-[240px] w-[240px] rounded-[28px] bg-slate-300/70 shadow-sm sm:h-[280px] sm:w-[280px]" />
          </div>
          <div className={imageFirst ? "md:order-2" : "md:order-1"}>
            <div className="mx-auto max-w-md text-center">
              <div className="flex items-center justify-center gap-3">
                <h3 className="text-3xl font-extrabold italic tracking-tight text-slate-900">
                  {title}
                </h3>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100">
                  <img src={icon} alt="" className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {description}
              </p>
              <a
                href="#download"
                className="mt-6 inline-flex rounded-full bg-sky-700 px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-800"
              >
                Download app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold italic tracking-tight sm:text-5xl">
          <span className="text-sky-700">DISCOVER</span>{" "}
          <span className="text-slate-900">PLACES</span>
          <br />
          <span className="text-slate-900">USING SMART SEARCH</span>
        </h2>
      </div>
      <div className="mt-12">
        <FeatureRow
          title="SEARCH"
          description="Use smart search or ask AI to quickly discover cafés, gyms, and hidden spots near you, based on your location and preferences."
          icon={searchIcon}
          imageSide="left"
        />

        <FeatureRow
          title="SAVE PLACES"
          description="Save places you love and come back to them instantly whenever you need — no searching, no hassle."
          icon={saveIcon}
          imageSide="right"
        />

        <FeatureRow
          title="GET DIRECTIONS"
          description="Get accurate turn-by-turn GPS directions to anywhere you want to go, with real-time guidance that keeps you on the right path."
          icon={directionsIcon}
          imageSide="left"
        />
      </div>
    </section>
  );
}
