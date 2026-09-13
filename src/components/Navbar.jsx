import { Link } from "react-router-dom";
import { QrCode, Languages } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [language, setLanguage]= useState("en");
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
            <QrCode size={24} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              QR Platform
            </h1>
            <p className="text-xs text-slate-500">
              Smart QR solutions
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3 sm:gap-6">

          <Link
            to="/about"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:block"
          >
            About
          </Link>

          {/* Language */}
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <Languages size={17} className="text-slate-500" />

            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="cursor-pointer bg-transparent text-sm font-medium text-slate-700 outline-none"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
            </select>
          </div>

          {/* Login */}
          <Link
            to="/login"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;