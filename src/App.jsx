import Overlay from "./components/Overlay";
import HeroBlock from "./components/HeroBlock";
import AboutBlock from "./components/AboutBlock";

import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      id="app-layout"
      className="flex items-center justify-center font-spartan relative"
    >
      <div
        id="container--main"
        className="w-full max-w-[1440px] grid xl:grid-cols-16 xl:max-h-[800px]"
      >
        {menuOpen && <Overlay setMenuOpen={setMenuOpen} />}

        <HeroBlock menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <AboutBlock />
      </div>
    </div>
  );
}
