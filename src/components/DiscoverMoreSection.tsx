export default function DiscoverMoreSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="page-shell">
        <div
          className="
            relative overflow-hidden
            rounded-[32px]
            border border-white/25
            text-center
            backdrop-blur-[8px]
            shadow-[0_18px_50px_rgba(15,23,42,0.06)]
          "
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `
                conic-gradient(
                  from 45deg at 50% 50%,
                  rgba(254, 207, 16, 0.38) 0deg,
                  rgba(24, 122, 177, 0.38) 90deg,
                  rgba(254, 207, 16, 0.38) 180deg,
                  rgba(24, 122, 177, 0.38) 270deg,
                  rgba(254, 207, 16, 0.38) 360deg
                )
              `,
            }}
          />

          <div className="pointer-events-none absolute inset-0 -z-10 bg-white/35" />
          <div className="px-6 py-10 sm:px-12 sm:py-12 lg:px-[209px] lg:py-[48px]">
            <div className="mx-auto inline-flex rounded-full bg-gradient-to-r from-[#187AB1] to-[#0A344B] p-[2px]">
              <span className="inline-flex h-[28px] items-center justify-center rounded-full bg-white/60 px-5 text-[11px] font-semibold text-sky-700 backdrop-blur-[8px]">
                Start exploring
              </span>
            </div>

            <h3 className="mt-10 text-3xl font-extrabold italic -skew-x-12 tracking-tight text-slate-900 sm:text-5xl">
              <span className="italic -skew-x-12">DISCOVER</span>{" "}
              <span className="italic -skew-x-12 text-sky-700">MORE</span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-xs text-slate-600 sm:text-sm">
              Find places worth visiting, not just popular ones — personalized to
              where you are.
            </p>

            <a
              href="#download"
              className="mt-10 inline-flex rounded-full bg-sky-700 px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(2,132,199,0.22)] transition hover:bg-sky-800"
            >
              Download app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
