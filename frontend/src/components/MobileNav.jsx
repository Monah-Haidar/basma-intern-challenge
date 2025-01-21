import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function MobileNav() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const navLinks = [
    { title: "أراء", href: "/" },
    { title: "فيديووصور", href: "/" },
    { title: "ثقافة", href: "/" },
    { title: "رياضة", href: "/" },
    { title: "اقتصاد ", href: "/" },
    { title: "اخبار", href: "/" },
    { title: "الرئيسية", href: "/" },
  ];

  return (
    <>
      <Bars3Icon
        className="sm:hidden block w-8 h-8 curser-pointer"
        onClick={() => setisMenuOpen(!isMenuOpen)}
      />

      {isMenuOpen && (
        <ul
          className={`z-40 absolute top-28 right-0 left-0 w-full h-fit p-4 flex flex-col divide-y divide-gray-300 bg-black transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        >
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              onClick={() => setisMenuOpen(false)}
            >
              <li className="w-full text-center p-4 text-white hover:bg-orange-500">
                {link.title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
