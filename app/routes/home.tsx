import React from "react";
import { json, LoaderFunction, LinksFunction } from "remix";
import { useTranslation } from "react-i18next";
//import i18next from "~/i18n.server";
import { Header } from "~/components/header";
import { Quote } from "~/components/quote";
import { Carousel } from "~/components/carousel";
import { Story } from "~/components/story";
import calendarBtnStyles from "add-to-calendar-button/assets/css/atcb.min.css";
import homeStyles from "../styles/home.css";
import timerStyles from "../styles/datetime.css";
import patternStyles from "../styles/pattern.css";
import carouselStyles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Details } from "~/components/details";
import { Registry } from "~/components/registry";
import { Rules } from "~/components/rules";
import { InstaRsvp } from "~/components/instaRsvp";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";

//export let loader: LoaderFunction = async ({ request }) => {
//  return json({
//    i18n: await i18next.getTranslations(request, ["index"]),
//  });
//};

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
      <Hero t={t} />
      <Story t={t} />
      <Quote t={t} />
      <Carousel />
      <Details t={t} />
      <Registry t={t} />
      <Rules t={t} />
      <InstaRsvp t={t} />
      <Footer t={t} />
    </React.Fragment>
  );
}
