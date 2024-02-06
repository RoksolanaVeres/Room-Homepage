import { HamburgerIcon, Logo } from "../components/Icons";
import MobileMenuOpen from "./MobileMenuOpen";

export default function MobileHeader({ menuOpen, setMenuOpen }) {
  function openMenu() {
    setMenuOpen(true);
  }

  return (
    <div id="container-mobileHeader" className="flex gap-28 xl:hidden">
      <button onClick={openMenu} className="z-20 xl:hidden">
        {!menuOpen && <HamburgerIcon />}
      </button>
      <Logo />
      {menuOpen && <MobileMenuOpen setMenuOpen={setMenuOpen} />}
    </div>
  );
}
