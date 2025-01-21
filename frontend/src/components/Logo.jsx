import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Logo({className}) {
  return (
    <>
      <Link to={"/"} className={`${className} w-24 sm:w-32 relative curser-pointer`}>
        <img src={logo} alt="logo" />
        <span className="text-green-800 text-xs sm:text-sm font-medium absolute left-0 bottom-1">الاخبار المحلية</span>
      </Link>
    </>
  );
}
