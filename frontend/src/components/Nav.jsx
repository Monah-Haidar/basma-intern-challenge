import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {

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
      <nav className="hidden sm:flex z-10 absolute left-1/2 -translate-x-1/2 ">
        <ul className="flex divide-x divide-gray-300">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index} >
              <li className="sm:py-4 sm:px-6 md:px-7 md:text-lg font-bold text-white">
                {link.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
