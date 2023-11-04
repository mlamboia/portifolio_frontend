import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  return (
    <>
      <section id="contact" className="m-auto grid py-2 w-full h-[calc(100vh-50px)]">
        <div className="ml-14 text-6xl sm:text-4xl">
          <h1 className="text-white">{t("contact")}</h1>
        </div>
        <div></div>
      </section>
    </>
  );
}
