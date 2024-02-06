import { Logo } from "./Icons";
import NavigationLinks from "./NavigationLinks";

export default function DesktopHeader() {
  return (
    <div
      id="container-desktopHeader"
      className="xl:flex items-center justify-start gap-12 hidden"
    >
      <Logo />
      <NavigationLinks className="text-white gap-7 flex" />
    </div>
  );
}
