import { useTranslation } from "next-i18next";
import ReactHtmlParser from 'react-html-parser';

export default function Works() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  const works = [
    { id: "test", name: t('work_test'), description: t('work_test_description') },
    { id: "dev-jr", name: t('work_dev_jr'), description: t('work_dev_jr_description') },
    { id: "dev", name: t('work_dev'), description: t('work_dev_description') },
    { id: "s-dev", name: t('work_s_dev'), description: t('work_s_dev_description') },
  ]

  return (
    <>
      <section id="works" className="m-auto flex flex-col py-2 w-full">
        <div className="flex justify-center text-6xl sm:text-4xl">
          <h1 className="text-white">{t("works")}</h1>
        </div>
        <div className="text-white grid md:grid-cols-2 gap-14 my-8">
          {
            works.map(({id, name, description}) => (
              <div className="flex justify-center relative rounded align-center cursor-pointer" key={id}>
                <div data-image={id}>
                  <span className="work-description text-sm absolute top-0 left-0 m-4 opacity-0 delay-200">{ ReactHtmlParser(description) }</span>
                  <span className="text-4xl sm:text-xl absolute bottom-0 right-0 z-10 opacity-90 dark:bg-black bg-slate-800 px-2 rounded">
                    {name}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
}
