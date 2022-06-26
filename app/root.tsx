import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  LinksFunction
} from "remix";
import type { MetaFunction } from "remix";
import { json, LoaderFunction } from "remix";
import i18next from "~/i18n.server";
import { useTranslation } from "react-i18next";
import styles from "./tailwind.css";
import { useChangeLanguage } from "remix-i18next";

export let loader: LoaderFunction = async ({ request }) => {
  let locale = await i18next.getLocale(request);
  return json({ locale });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "http://fonts.cdnfonts.com/css/leky-calgria"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
  }
];

export const meta: MetaFunction = () => {
  return { title: "Los Danis Wedding" };
};
export let handle = {
  i18n: "index"
}

export default function App() {
  let { i18n } = useTranslation();
  let { locale } = useLoaderData<{ locale: string }>();
  useChangeLanguage(locale);
  
  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
