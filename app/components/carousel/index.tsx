import { Carousel as ReactCarousel } from "react-responsive-carousel";

import { LinksFunction } from "remix";

// export const links: LinksFunction = () => {
//     return [
//       { rel: "stylesheet", href: carouselStyles }
//     ];
//   };

export const Carousel = () => {
  return (
    <section className="bg-bone scroll-mt-16" id="carousel">
      <div className="w-11/12 md:w-2/3 m-auto p-6">
        <ReactCarousel>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP4179.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP5676.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP4251.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP5554.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP4288.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP5466.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP4312.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP5275.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP4541.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP5213.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP4745.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP5138.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP5058.webp" />
          </div>
          <div>
            <img loading="lazy" src="/images/carousel/_OVP5102.webp" />
          </div>
        </ReactCarousel>
      </div>
    </section>
  );
};
