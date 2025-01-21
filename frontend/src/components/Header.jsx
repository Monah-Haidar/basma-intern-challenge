import Logo from "../components/Logo";
import MobileNav from "./MobileNav";
import Auth from "./Auth";

export default function Header() {
  return (
    <>
      <header className="px-8 mb-5 mx-auto lg:px-24 h-28 sm:h-36 relative flex items-baseline">
        <Auth />
        <Logo className="mx-auto" />
        <MobileNav />
        
      </header>
    </>
  );
}
