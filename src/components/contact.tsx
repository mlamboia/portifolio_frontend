import { useTranslation } from "next-i18next";
import React, { useState, FormEvent } from 'react'
import Link from "next/link";
import { env } from "../env.mjs";

function isEmailValid(email: string | undefined) {
  if (!email) return false;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

interface EmailFormData {
  from: string;
  message: string;
}

const initialEmailFormData: EmailFormData = {
  from: '',
  message: '',
};

export default function Contact() {
  const { t } = useTranslation("common") as { t: (key: string) => string };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emaiError, setEmailError] = useState<string>();

  const [formData, setFormData] = useState<EmailFormData>(initialEmailFormData);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    setIsLoading(true);
    setEmailError("");

    if (!isEmailValid(formData.get("from")?.toString())) {
      setEmailError(t("error_email_not_valid"))
    } else if(String(formData.get("message")).length < 10) {
      setEmailError(t("error_message_too_short"))
    } else {
      try {
        const response = await fetch(env.NEXT_PUBLIC_EMAIL_API, {
          method: 'POST',
          body: formData,
        })

        if (response.ok) {
          setFormData(initialEmailFormData);
        } else {
          const responseMessage = await response.json();
          setEmailError(responseMessage.message);
        }
      } catch(e) {
        setEmailError(t("unknow_error"));
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      <section id="contact" className="m-auto flex flex-col py-2 w-full md:w-4/6 mb-8">
        <div className="flex justify-center text-6xl sm:text-4xl">
          <h1 className="text-white">{t("contact")}</h1>
        </div>

        <form onSubmit={handleSubmit} className="my-8">
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                {t('to')}
              </label>
              <input
                id="email_form_to"
                type="text"
                value={t('placeholder_to')}
                readOnly
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                {t('from')}
              </label>
              <input id="email_form_from"
                type="text"
                name="from"
                placeholder={t('placeholder_from')}
                value={formData.from}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full px-3">
              <label
                htmlFor="grid-last-name"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {t('email_content')}
              </label>
              <input
                id="grid-last-name"
                placeholder={t('placeholder_email_content')}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="appearance-none resize-none h-20 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>

          {
            emaiError && <span className="mx-3 text-red-500">{emaiError}</span>
          }
          <div className="flex justify-center mx-3">
            <button className="w-full shadow bg-stone-800 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded" type="submit" disabled={isLoading}>
            {isLoading ? t('sending_email') : t('send_email') }
            </button>
          </div>
        </form>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex justify-center mx-3">
            <Link
              data-icon="whatsapp"
              href="https://api.whatsapp.com/send?phone=5511944889842&text=Hello%20Matheus!"
              target="_blank"
              className="w-full text-center shadow bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              <span className="ml-8">Whatsapp</span>
            </Link>
          </div>

          <div className="flex justify-center mx-3">
            <Link
              data-icon="telegram"
              href="https://t.me/matheusvnl?text=Hello%20Matheus!"
              target="_blank"
              className="w-full text-center shadow bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <span className="ml-8">Telegram</span>
            </Link>
          </div>

          <div className="flex justify-center mx-3">
            <Link
              data-icon="linkedin"
              href="https://linkedin.com/in/matheus-viana-nunes-lamboia-a1a70b1a4"
              target="_blank"
              className="w-full text-center shadow bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
              <span className="ml-8">Linkedin</span>
            </Link>
          </div>

          <div className="flex justify-center mx-3">
            <Link
              data-icon="github"
              href="https://github.com/mlamboia"
              target="_blank"
              className="w-full text-center shadow bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded">
              <span className="ml-8">Github</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
