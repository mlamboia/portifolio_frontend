import { type AppType } from "next/dist/shared/lib/utils";
import { appWithTranslation } from 'next-i18next'
import nextI18nConfig from "../../next-i18next.config.mjs";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp, nextI18nConfig);
