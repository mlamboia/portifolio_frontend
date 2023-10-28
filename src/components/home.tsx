import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  return (
    <>
      <section className="m-auto grid h-full w-full grid-cols-2 gap-4">
        <div className="ml-14 text-6xl sm:text-4xl sm:text-sm">
          <h1 className="text-white">{t("hello")}</h1>
          <h1 className="text-white">{t("im_matheus")}</h1>
          <h1 className="text-white">{t("fullstack_developer")}</h1>
        </div>
        <div></div>
      </section>
    </>
  );
}
