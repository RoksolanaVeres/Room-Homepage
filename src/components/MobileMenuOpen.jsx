import { CloseIcon } from "./Icons";
import NavigationLinks from "./NavigationLinks";

export default function MobileMenuOpen({ setMenuOpen }) {
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div
      id="container--navigation"
      className="fixed bg-white top-0 left-0 right-0 z-10 flex justify-between px-6 items-center h-[110px]"
    >
      <button onClick={closeMenu}>
        <CloseIcon />
      </button>
      <NavigationLinks className="flex gap-7 font-bold" />
    </div>
  );
}
