import { useTranslation } from "next-i18next";

export default function Navbar() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  return (
    <>
      <section className="relative mx-auto">
        <nav className="flex w-screen justify-between border-b border-gray-600 bg-black text-white">
          <div className="flex w-full items-center px-5 py-3 xl:px-12">
            <a className="font-heading text-3xl font-bold" href="#">
              {t("title")}
            </a>
            <ul className="font-heading align-end ml-auto mr-12 hidden space-x-12 font-semibold md:flex">
              <li>
                <a className="hover:text-gray-200" href="#home">
                  {t("home")}
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#about">
                  {t("about")}
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#skills">
                  {t("skills")}
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#works">
                  {t("works")}
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#contact">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          <a className="navbar-burger mr-12 self-center md:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
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
          </a>
        </nav>
      </section>
    </>
  );
}
