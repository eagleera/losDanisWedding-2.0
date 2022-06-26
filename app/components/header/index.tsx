import { useState, useEffect } from "react";

interface Props {
  t: Function;
}
export const Header = ({ t }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
    const header = document.getElementById("header")
    if (window.pageYOffset > 800) {
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      let position = element.getBoundingClientRect();
      window.scrollTo({left: position.left, top: position.top + window.scrollY - 60, behavior: "smooth"});
    }
  }

  return (
    <header id="header" className="p-6 bg-brown z-50 flex justify-around text-xl opacity-0 absolute top-0 transition-opacity duration-200">
      <div className="cursor-pointer" onClick={() => scrollTo("carousel")}>{t("header.photos")}</div>
      <div className="cursor-pointer" onClick={() => scrollTo("place")}>{t("header.place")}</div>
      <div className="cursor-pointer" onClick={() => scrollTo("registry")}>{t("registry")}</div>
      <div className="cursor-pointer" onClick={() => scrollTo("rsvp")}>{t("header.rsvp")}</div>
    </header>
  );
};
