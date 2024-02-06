export default function Overlay({ setMenuOpen }) {
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div
      id="overlay"
      className="bg-black/65 absolute top-0 left-0 right-0 bottom-0 min-h-screen h-full z-10"
      onClick={closeMenu}
    ></div>
  );
}
