import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import Navbar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
import Skills from "../components/skills";
import Works from "../components/works";
import Contact from "../components/contact";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
      "pt",
    ])),
  },
});

export default function App() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Matheus Lamboia portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center bg-gradient-to-b dark:from-black dark:to-stone-950 from-slate-800 to-slate-700">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
    </>
  );
}
