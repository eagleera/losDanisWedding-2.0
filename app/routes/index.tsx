import { json, LoaderFunction } from "remix";
import { useTranslation } from "react-i18next";
import { i18n } from "~/i18n.server"; // this is the first file you created

export let loader: LoaderFunction = async ({ request }) => {
  return json({
    i18n: await i18n.getTranslations(request, ["index"]),
  });
};

export default function Index() {
  let { t } = useTranslation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{t("title")}</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
