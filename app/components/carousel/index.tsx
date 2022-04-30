import { Carousel as ReactCarousel } from "react-responsive-carousel";

import { LinksFunction } from "remix";

// export const links: LinksFunction = () => {
//     return [
//       { rel: "stylesheet", href: carouselStyles }
//     ];
//   };

export const Carousel = () => {
  return (
    <section className="bg-bone">
      <div className="w-2/3 m-auto p-6">
        <ReactCarousel>
          <div>
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" />
          </div>
        </ReactCarousel>
      </div>
    </section>
  );
};
