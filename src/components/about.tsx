import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  return (
    <>
      <section id="about" className="m-auto grid py-2 w-full h-[calc(100vh-50px)] md:grid-cols-2 gap-4">
        <div className="flex self-center justify-center relative">
          <img src="/assets/images/man-coding.png" className="about-man-coding hidden md:block h-[80vh]"/>
        </div>
        <div className="flex flex-col text-center md:text-left text-white">
          <h1 className="mb-7 text-6xl sm:text-4xl">{t("about")}</h1>
          <p className="mb-2 leading-relaxed">
            {t('about_first_paragraph')}
          </p>
          <p className="mb-2 hidden md:block leading-relaxed">
            {t('about_second_paragraph')}
          </p>

          <p className="hidden md:block leading-relaxed">
            {t('about_third_paragraph')}
          </p>
        </div>
      </section>
    </>
  );
}
