import xIcon from "../assets/icons/social-x.svg";
import fbIcon from "../assets/icons/social-fb.svg";
import instaIcon from "../assets/icons/social-insta.svg";

export default function Footer() {
  return (
    <footer className="relative z-10 pt-6 pb-0 sm:pt-8 -mb-24 sm:-mb-32">
      <div className="mx-auto w-full px-0 sm:px-6">
        <div className="rounded-[28px] bg-white/95 px-6 py-10 shadow-sm ring-1 ring-black/5 backdrop-blur sm:px-10 sm:py-14">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Smart Search
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#search" className="hover:text-slate-700">
                    Search AI beta
                  </a>
                </li>
                <li>
                  <a href="#spots" className="hover:text-slate-700">
                    Discover spots
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#careers" className="hover:text-slate-700">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#partner" className="hover:text-slate-700">
                    Partner up
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#privacy" className="hover:text-slate-700">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#campaigns" className="hover:text-slate-700">
                    Campaigns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
              <p className="mt-3 text-sm text-slate-500">
                <a
                  href="mailto:support@taptapmaps.com"
                  className="hover:text-slate-700"
                >
                  support@taptapmaps.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-black/5 pt-6 sm:flex-row">
            <p className="text-xs text-slate-500">
              © 2026 Taptap Maps. All Rights Reserved
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#x"
                aria-label="X"
                className="opacity-70 transition hover:opacity-100"
              >
                <img src={xIcon} alt="" className="h-4 w-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="opacity-70 transition hover:opacity-100"
              >
                <img src={instaIcon} alt="" className="h-4 w-4" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                className="opacity-70 transition hover:opacity-100"
              >
                <img src={fbIcon} alt="" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
