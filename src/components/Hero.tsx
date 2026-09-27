import shopImg from "../assets/images/hero-shop.png";
import mapImg from "../assets/images/hero-map.png";
import googlePlay from "../assets/images/play-store.png";
import appStore from "../assets/images/apple-store.png";

type HeroProps = {
  showInternalBg?: boolean;
};

export default function Hero({ showInternalBg = false }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-[220px] sm:pt-[180px] md:pt-[180px] pb-10 sm:pb-14 md:pb-16">
      {showInternalBg && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[30px] h-[520px] w-[min(1100px,92%)] -translate-x-1/2 rounded-[72px] bg-sky-100/60" />
          <div className="absolute left-1/2 top-[10px] h-[620px] w-[min(1200px,96%)] -translate-x-1/2 rounded-[90px] bg-sky-200/25 blur-3xl" />
          <div className="absolute -left-72 top-24 h-[520px] w-[520px] rounded-full bg-sky-100/35 blur-3xl" />
          <div className="absolute -right-72 top-24 h-[520px] w-[520px] rounded-full bg-sky-100/35 blur-3xl" />
        </div>
      )}

      <div className="page-shell">
        <div className="relative">
          <img
            src={shopImg}
            alt="Shop illustration"
            draggable={false}
            className="
              pointer-events-none select-none hidden md:block
              absolute left-[100px] lg:left-[210px] top-[190px]
              w-[160px] lg:w-[170px]
              drop-shadow-sm
            "
          />
          <img
            src={mapImg}
            alt="Map illustration"
            draggable={false}
            className="
              pointer-events-none select-none hidden md:block
              absolute right-[100px] lg:right-[200px] top-[175px]
              w-[170px] lg:w-[185px]
              drop-shadow-sm
            "
          />
          <div className="text-center">
            <div className="mx-auto inline-flex rounded-full bg-gradient-to-r from-[#187AB1] to-[#0A344B] p-[4px]">
              <span
                className="
                  inline-flex items-center justify-center
                  h-[40px]
                  rounded-full
                  bg-white/70
                  px-[24px]
                  text-[13px]
                  font-semibold
                  text-sky-700
                  backdrop-blur-[128px]
                "
              >
                New way to explore
              </span>
            </div>
            <div className="relative mx-auto mt-6 w-full max-w-[520px] sm:mt-7 md:max-w-none">
              <img
                src={shopImg}
                alt="Shop illustration"
                draggable={false}
                className="
                  pointer-events-none select-none md:hidden
                  absolute left-[-40px] top-[73px]
                  w-[96px]
                  drop-shadow-sm
                "
              />
              <img
                src={mapImg}
                alt="Map illustration"
                draggable={false}
                className="
                  pointer-events-none select-none md:hidden
                  absolute right-[-40px] top-[48px]
                  w-[106px]
                  drop-shadow-sm
                "
              />

              <h1 className="font-extrabold leading-[0.98] tracking-tight">
                <span className="inline-flex items-baseline justify-center gap-3 whitespace-nowrap text-[44px] sm:text-[56px] md:text-[86px]">
                  <span className="text-sky-700 italic -skew-x-12">DISCOVER</span>
                  <span className="text-slate-900 italic -skew-x-12">PLACES</span>
                </span>

                <span className="mt-2 block text-[44px] text-slate-900 italic -skew-x-12 sm:text-[56px] md:text-[86px]">
                  IN ONE TAP
                </span>
              </h1>
            </div>

            <p className="mx-auto mt-4 max-w-sm text-sm text-slate-600 sm:mt-5">
              Find cafés, gyms, and unique{" "}
              <span className="text-sky-700">places</span> near you.
            </p>

            <div className="mt-7 flex justify-center gap-4 sm:mt-9">
              <a
                href="#download"
                className="rounded-full bg-sky-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
              >
                Download app
              </a>

              <a
                href="#learn"
                className="rounded-full border border-sky-700/70 bg-white/50 px-7 py-3 text-sm font-semibold text-sky-700 backdrop-blur transition hover:bg-white/70"
              >
                Learn more
              </a>
            </div>

            <div className="mt-10 text-center sm:mt-12">
              <p className="text-xs text-slate-400">Available on</p>

              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <a
                  href="#google-play"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/55 px-5 py-3 text-sm text-slate-600 backdrop-blur transition hover:bg-white/80"
                >
                  <img src={googlePlay} alt="Google Play" className="h-6 w-6" />
                  <span className="font-medium">Google Play</span>
                </a>

                <a
                  href="#app-store"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/55 px-5 py-3 text-sm text-slate-600 backdrop-blur transition hover:bg-white/80"
                >
                  <img src={appStore} alt="App Store" className="h-6 w-6" />
                  <span className="font-medium">App Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}