import { useEffect, useState } from "react";
import logoUrl from "../assets/images/logo.svg";

const links = [
  { href: "#partner", label: "Partner Up" },
  { href: "#availability", label: "Availability" },
  { href: "#careers", label: "Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>

      <header className="fixed top-0 left-0 z-50 w-full pt-10">
        <div className="page-shell flex justify-center">
          <nav
            className="
              inline-flex
              h-[60px]
              max-w-[616px]
              items-center
              rounded-full
              bg-[#187AB1]/[0.16]
              px-[6px]
              ring-1 ring-sky-200/50
              shadow-[0_16px_40px_rgba(15,23,42,0.08)]
              backdrop-blur-[128px]
            "
          >
            <div className="hidden md:inline-flex items-center gap-4">
              <img
                src={logoUrl}
                alt="TapTap Maps"
                className="h-7 shrink-0"
                draggable={false}
              />

              <div className="inline-flex items-center gap-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-[13px] leading-none font-semibold tracking-[-0.01em] text-sky-700 transition hover:text-sky-900"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <a
                href="#download"
                className="
                  inline-flex
                  h-[44px]
                  items-center justify-center
                  rounded-full
                  bg-sky-700
                  px-5
                  text-[13px]
                  leading-none
                  font-semibold
                  text-white
                  transition hover:bg-sky-800
                "
              >
                Download app
              </a>
            </div>
            <div className="flex md:hidden items-center gap-3">
              <img
                src={logoUrl}
                alt="TapTap Maps"
                className="h-7 shrink-0"
                draggable={false}
              />

              <button
                onClick={() => setOpen((v) => !v)}
                className="
                  ml-2
                  h-[44px] w-[44px]
                  rounded-full
                  bg-white/40
                  ring-1 ring-sky-200/50
                  backdrop-blur-[128px]
                  text-xl
                "
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </nav>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-[60]">
          <button
            className="absolute inset-0 bg-black/10"
            aria-label="Close menu backdrop"
            onClick={() => setOpen(false)}
          />

          <div className="relative mx-auto mt-3 w-[calc(100%-24px)] max-w-lg rounded-3xl bg-white/95 shadow-xl ring-1 ring-black/10 backdrop-blur">
            <div className="flex items-center justify-between px-5 py-4">
              <img src={logoUrl} alt="TapTap Maps" className="h-6" />

              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 rounded-full bg-slate-100 text-xl"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3 px-5 pb-6">
              <a
                href="#download"
                className="w-full rounded-full bg-sky-700 px-6 py-4 text-center text-sm font-semibold text-white hover:bg-sky-800"
                onClick={() => setOpen(false)}
              >
                Download app
              </a>

              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-sky-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}