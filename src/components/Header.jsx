import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <>
      <DesktopHeader />
      <MobileHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
