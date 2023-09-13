"use client";

import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  let Links = [
    { name: "Asosiy", link: "/" },
    { name: "Mahsulotlarimiz", link: "/products" },
    { name: "Biz haqimizda", link: "/about" },
    { name: "Faq", link: "/faq" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md">
      <nav className="container max-w-1200 py-5 ">
        <div className="flex justify-between items-center">
          <div className="z-50">
            <Link href={"/"}>
              <Image
                src="/source/image/logo-no-background.svg"
                width={130}
                height={24}
                alt="logo"
              />
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-0 top-2 cursor-pointer md:hidden z-30  "
          >
            <Hamburger toggled={open} toggle={setOpen} />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0  pb-12 absolute md:static md:bg-white bg-white z-10 md:z-auto left-0 w-full h-full md:h-[0] md:w-auto pl-0 transition-all duration-500 ease-in ${
              open ? "top-10 " : "top-[-1000px]"
            }`}
          >
            <hr className="h-px mt-5 bg-gray-200 border-0" />
            {Links.map((link) => (
              <li
                onClick={(e) => setOpen(false)}
                key={link.name}
                className={`ps-5 text-base  md:ml-8 md:my-0 my-7 `}
              >
                <Link
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
