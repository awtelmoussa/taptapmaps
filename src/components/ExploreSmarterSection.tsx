export default function ExploreSmarterSection() {
  return (
    <section id="download" className="py-16 sm:py-24">
      <div className="page-shell text-center">
        <div className="mx-auto inline-flex rounded-full bg-gradient-to-r from-[#187AB1] to-[#0A344B] p-[4px]">
          <span
            className="
              inline-flex items-center justify-center
              h-[40px]
              rounded-full
              bg-white/60
              px-[24px]
              text-[13px]
              font-semibold
              text-sky-700
              backdrop-blur-[8px]
            "
          >
            Try TapTap Maps
          </span>
        </div>
        <h2 className="mt-8 font-extrabold leading-[1.02] tracking-tight text-slate-900 text-[40px] sm:text-[64px]">
          <span className="block italic -skew-x-12">EXPLORE</span>
          <span className="block italic -skew-x-12 mt-1">SMARTER TODAY</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-xs text-slate-600 sm:text-sm">
          Search, save, and navigate places you actually care about — all in one
          app.
        </p>
        <a
          href="#download"
          className="
            mt-8 inline-flex
            rounded-full
            bg-sky-700
            px-8 py-3
            text-sm font-semibold text-white
            shadow-[0_18px_40px_rgba(2,132,199,0.22)]
            transition hover:bg-sky-800
          "
        >
          Download app
        </a>
      </div>
    </section>
  );
}
