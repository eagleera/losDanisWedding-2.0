import React from "react";
import { json, LoaderFunction, LinksFunction } from "remix";
import { useTranslation } from "react-i18next";
import { i18n } from "~/i18n.server";
import { Header } from "~/components/header";
import { Quote } from "~/components/quote";
import { Carousel } from "~/components/carousel";
import { Story } from "~/components/story";
import Timer from "../components/timer/CountDownTimer";
import calendarBtnStyles from "add-to-calendar-button/assets/css/atcb.min.css";
import homeStyles from "../styles/home.css";
import timerStyles from "../styles/datetime.css";
import patternStyles from "../styles/pattern.css";
import carouselStyles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Details } from "~/components/details";

export let loader: LoaderFunction = async ({ request }) => {
  return json({
    i18n: await i18n.getTranslations(request, ["index"]),
  });
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: homeStyles },
    { rel: "stylesheet", href: timerStyles },
    { rel: "stylesheet", href: calendarBtnStyles },
    { rel: "stylesheet", href: patternStyles },
    { rel: "stylesheet", href: carouselStyles }
  ];
};

export default function Index() {
  let { t } = useTranslation();

  return (
    <React.Fragment>
      <Header t={t} />
      <section>
        <div className="flex items-center min-h-screen justify-center bg-img">
          <div>
            <h1 className="text-5xl text-yellow-700 mb-4">
              {t("landing.ourWedding")}
            </h1>
            <h2 className="text-4xl md:text-7xl lg:text-9xl text-yellow-900">
              Daniela & Daniel
            </h2>
            <p className="py-1 pt-6 md:text-center text-xl text-yellow-700">
              SAVE THE DATE
            </p>
            <div className="counter-container">
              <Timer targetDate={new Date("2022-10-01T20:00:00")} t={t} />
              <p className="text-center text-yellow-800 font-bold md:text-2xl text-xl">
                {t("date")}
              </p>
            </div>
            <div className="w-full flex">
              <button
                id="calendar-button"
                className="md:m-auto font-bold w-full md:w-auto"
              >
                {t("landing.addCalendar")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Story t={t} />
      <Quote t={t} />
      <Carousel />
      <Details t={t} />
    </React.Fragment>
  );
}
