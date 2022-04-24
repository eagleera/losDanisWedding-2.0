import React, { useState, useEffect } from "react";

interface Props {
  t: Function;
}
export const Header = ({ t }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
    const header = document.getElementById("header")
    console.log(window.pageYOffset)
    if(window.pageYOffset > 800) {
      header?.classList.remove("opacity-0");
      header?.classList.remove("absolute");
      header?.classList.add("sticky");
    } else {
      header?.classList.add("opacity-0");
      header?.classList.add("absolute");
      header?.classList.remove("sticky");  
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <header id="header" className="p-6 bg-brown flex justify-around text-xl opacity-0 absolute top-0 transition-opacity duration-200">
      <div>{t("header.people")}</div>
      <div>{t("header.party")}</div>
      <div>{t("header.place")}</div>
      <div>{t("header.accomodations")}</div>
      <div>{t("header.rsvp")}</div>
      <div>{t("header.photos")}</div>
    </header>
  );
};
