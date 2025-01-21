import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import background from "../assets/background.jpg";

export default function Layout() {
  return (
    <>
      <main
        className="bg-none p-0 md:bg-green-700 xl:p-32"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Outlet />
      </main>
    </>
  );
}
