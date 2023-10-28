import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const { t } = useTranslation("common") as { t: (key: string) => string };
  const [nav, setNav] = useState(false);
  const links = [
    {
      link: "home",
      content: t("home")
    },
    {
      link: "about",
      content: t("about")
    },
    {
      link: "skills",
      content: t("skills")
    },
    {
      link: "works",
      content: t("works")
    },
    {
      link: "contact",
      content: t("contact")
    }
  ]

  console.log(nav)

  return (
    <>
      <section className="sticky top-0 w-full mx-auto z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50">
        <nav className="flex justify-between border-b-2 text-white px-4 border-stone-700">
          <div className="flex w-full items-center md:px-10 py-3">
            <Link className="font-heading text-2xl md:ml-6 ml-4 font-bold" href="#">
              {t("title")}
            </Link>
            <ul className="font-heading align-end ml-auto mr-6 hidden space-x-12 font-semibold md:flex">
              {
                links.map(({link, content}) => (
                  <li className="cursor-pointer capitalize text-xl hover:text-stone-400" key={link}>
                    <Link href={"#" + link}>
                      {content}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <span className="navbar-burger md:mr-12 mr-4 self-center md:hidden" onClick={() => { setNav(!nav)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-stone-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>

          {nav && (
            <div className="flex flex-col absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-stone-950">
              <span className="text-end pr-8 pt-8 text-4xl text-white" onClick={() => setNav(!nav)}>X</span>
              <ul className="flex flex-col m-auto pb-8 justify-center items-center">
                {links.map(({ link, content }) => (
                  <li className="px-4 cursor-pointer capitalize py-6 text-4xl" key={link}>
                    <Link onClick={() => setNav(!nav)} href={"#" + link}>
                      {content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </section>
    </>
  );
}
