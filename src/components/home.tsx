import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  return (
    <>
      <section id="home" className="m-auto grid w-full h-[calc(100vh-50px)] md:grid-cols-2">
        <div className="md:pl-14 flex flex-col justify-center">
          <h1 className="md:text-6xl text-4xl text-white md:text-left text-center">{t("hello")}</h1>
          <h2 className="md:text-6xl text-4xl text-white md:text-left text-center">{t("im_matheus")}</h2>
          <h2 className="md:text-4xl text-2xl mt-4 text-white md:text-left text-center">{t("fullstack_developer")}</h2>

          <Link className="flex align-center justify-center self-center md:self-start mt-4 text-2xl md:text-3xl text-white bg-stone-900 dark:bg-blue-950 rounded p-1 w-60" href="#contact">
            {t("contact")}
          </Link>
        </div>

        <div className="flex self-center justify-center relative">
          <svg className="photo-pentagon" viewBox="0 0 278 255" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M141.057 2.60768C146.815 -0.307267 153.761 0.522562 158.67 4.71198L271.461 100.965C277.037 105.723 278.666 113.662 275.414 120.232L213.615 245.106C210.61 251.179 204.105 254.7 197.377 253.897L44.7351 235.66C38.0072 234.856 32.515 229.901 31.0249 223.291L0.384072 87.3727C-1.22801 80.2217 2.22565 72.8899 8.76578 69.579L141.057 2.60768Z" fill="#CCCCCC"/>
            <clipPath id="clip-path">
              <path d="M141.057 2.60768C146.815 -0.307267 153.761 0.522562 158.67 4.71198L271.461 100.965C277.037 105.723 278.666 113.662 275.414 120.232L213.615 245.106C210.61 251.179 204.105 254.7 197.377 253.897L44.7351 235.66C38.0072 234.856 32.515 229.901 31.0249 223.291L0.384072 87.3727C-1.22801 80.2217 2.22565 72.8899 8.76578 69.579L141.057 2.60768Z"/>
            </clipPath>

            <image clipPath="url(#clip-path)" href="/assets/images/profile-no-bg.png" x="0" y="0" width="100%" height="100%"/>
          </svg>
        </div>
      </section>
    </>
  );
}
