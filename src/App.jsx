import { Link } from "react-router-dom";
import { QrCode, Zap, Palette, BarChart3 } from "lucide-react";

function App() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 text-slate-900">

      {/* HERO SECTION */}
      <main>
        <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <QrCode size={16} />
              Create • Customize • Track
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Create smarter QR codes for everything you share.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Generate, customize, organize, and manage your QR codes from one
              simple platform.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/register"
                className="w-full rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:w-auto"
              >
                Get Started
              </Link>

              <a
                href="#about"
                className="w-full rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 sm:w-auto"
              >
                Learn More
              </a>

            </div>

            {/* Mini Features */}
            <div className="mt-16 grid gap-4 text-left sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>

                <h3 className="font-semibold text-slate-900">
                  Quick Generation
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Create QR codes quickly for links, files, WiFi and more.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Palette size={20} />
                </div>

                <h3 className="font-semibold text-slate-900">
                  Custom Design
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Customize your QR codes with templates, colors and logos.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <BarChart3 size={20} />
                </div>

                <h3 className="font-semibold text-slate-900">
                  Track Performance
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Monitor scans and understand how your QR codes perform.
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>

    </div>
  );
}

export default App;