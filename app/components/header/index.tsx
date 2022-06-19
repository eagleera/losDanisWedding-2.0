import { useState, useEffect } from "react";

interface Props {
  t: Function;
}
export const Header = ({ t }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
    const header = document.getElementById("header")
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
    <header id="header" className="p-6 bg-brown flex justify-around text-xl opacity-0 absolute top-0 transition-opacity duration-200 z-10">
      <div>{t("header.photos")}</div>
      <div>{t("header.place")}</div>
      <div>{t("header.rsvp")}</div>
      <div>{t("header.accomodations")}</div>
    </header>
  );
};
