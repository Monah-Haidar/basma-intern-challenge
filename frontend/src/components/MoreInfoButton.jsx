import { Link } from "react-router-dom";

export default function MoreInfoButton({link, className, children}) {
  return (
    <Link
      to={link}
      className={`${className} text-white text-xs font-bold px-2 py-1 rounded-full`}
    >
      {children}
    </Link>
  );
}
