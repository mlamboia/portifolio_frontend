import { useTranslation } from "next-i18next";

export default function skills() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  return (
    <>
      <section id="skills" className="m-auto grid py-14 w-full h-[calc(100vh-50px)] grid-cols-2 gap-4">
        <div className="ml-14 text-6xl sm:text-4xl">
          <h1 className="text-white">{t("skills")}</h1>
        </div>
        <div></div>
      </section>
    </>
  );
}
