"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/Blog",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  const session = true;
  const isAdmin = true;
  return (
    <div>
      <nav className=" ">
        <div className=" justify-between lg:flex lg:justify-between lg:px-[50px]  mx-auto  md:items-center md:flex md:px-8  ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block ">
              <Link href="/">
                <h2 className="text-2xl text-white font-bold">RIYA</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className=" flex flex-col lg:block items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                {links.map((link) => (
                  <Link
                    href={link.path}
                    key={link.title}
                    className={
                      isActive(link.path)
                        ? "bg-white text-black px-3 py-2  rounded-full"
                        : ""
                    }
                  >
                    {link.title}
                  </Link>
                ))}
                {session ? (
                  <>
                    {isAdmin && <Link href="/admin">Admin</Link>}
                    <button className="bg-white text-black px-3 py-2 rounded-full">
                      Logout
                    </button>
                  </>
                ) : (
                  <Link href="/login">Login</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
