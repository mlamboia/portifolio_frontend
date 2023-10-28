import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import Navbar from "../components/navbar";
import Home from "../components/home";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
      "pt-BR",
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
      <main className="flex min-h-screen flex-col items-center bg-black">
        <Navbar />

        <Home />
      </main>
    </>
  );
}
