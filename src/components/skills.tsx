import { useTranslation } from "next-i18next";

export default function Skills() {
  const { t } = useTranslation("common") as { t: (key: string) => string };

  const skills = [
    { id: "ruby", name: "Ruby" },
    { id: "nodejs", name: "Node.js" },
    { id: "jquery", name: "JQuery" },
    { id: "react", name: "React" },
    { id: "tailwind", name: "Tailwind" },
    { id: "bootstrap", name: "Bootstrap" },
    { id: "postgres", name: "Postgres" },
    { id: "redis", name: "Redis" }
  ]

  return (
    <>
      <section id="skills" className="m-auto flex flex-col py-2 w-full h-[calc(100vh-50px)]">
        <div className="flex justify-center text-6xl sm:text-4xl">
          <h1 className="text-white">{t("skills")}</h1>
        </div>

        <div className="font-heading text-white h-full my-10 font-semibold grid grid-cols-2 gap-4 text-center place-items-center">
          {
            skills.map(({ id, name }) => (
              <div className="border-b-2 border-stone-700 w-10/12 hover:scale-105 duration-300 cursor-default" key={id} data-icon={id}>
                <span className="ml-8">{name}</span>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
}
