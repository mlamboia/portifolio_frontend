import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  return (
    <>
      <section id="home" className="m-auto grid w-full h-[calc(100vh-50px)] md:grid-cols-2">
        <div className="md:pl-14 flex flex-col justify-center">
          <h1 className="md:text-6xl text-4xl text-white md:text-left text-center">{t("hello")}</h1>
          <h1 className="md:text-6xl text-4xl text-white md:text-left text-center">{t("im_matheus")}</h1>
          <h1 className="md:block text-6xl hidden text-white md:text-left text-center">{t("fullstack_developer")}</h1>
        </div>
        <div></div>
      </section>
    </>
  );
}
