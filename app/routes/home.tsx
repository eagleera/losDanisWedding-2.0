import React from "react";
import { json, LoaderFunction, LinksFunction } from "remix";
import { useTranslation } from "react-i18next";
import { i18n } from "~/i18n.server";
import { Header } from "../components/header";
import Timer from "../components/timer/CountDownTimer";
import calendarBtnStyles from "add-to-calendar-button/assets/css/atcb.min.css";
import homeStyles from "../styles/home.css";
import timerStyles from "../styles/datetime.css";
import patternStyles from "../styles/pattern.css";

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
      <section className="py-16 text-center bg-bone">
        <div className="w-40 m-auto">
          <svg
            viewBox="120.303 37.766 245.27 390.61"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#BF8960"
            fill="#BF8960"
          >
            <path
              className="st0"
              d="M 241.973 414.916 C 181.513 414.916 132.323 365.726 132.323 305.266 L 132.323 159.616 C 132.323 99.156 181.513 49.966 241.973 49.966 C 302.433 49.966 351.623 99.156 351.623 159.616 L 351.623 305.266 C 351.623 365.726 302.433 414.916 241.973 414.916 Z M 241.973 53.636 C 183.533 53.636 135.993 101.176 135.993 159.616 L 135.993 305.266 C 135.993 363.706 183.533 411.256 241.973 411.256 C 300.413 411.256 347.953 363.706 347.953 305.266 L 347.953 159.616 C 347.953 101.176 300.413 53.636 241.973 53.636 Z"
            />
            <path
              className="st0"
              d="M 245.633 428.376 L 240.243 428.376 C 174.103 428.376 120.303 374.566 120.303 308.436 L 120.303 157.706 C 120.303 91.566 174.103 37.766 240.243 37.766 L 245.633 37.766 C 311.773 37.766 365.573 91.566 365.573 157.706 L 365.573 308.426 C 365.573 374.566 311.773 428.376 245.633 428.376 Z M 240.243 41.436 C 176.133 41.436 123.973 93.596 123.973 157.706 L 123.973 308.426 C 123.973 372.546 176.133 424.706 240.243 424.706 L 245.633 424.706 C 309.743 424.706 361.903 372.546 361.903 308.426 L 361.903 157.706 C 361.903 93.596 309.743 41.436 245.633 41.436 L 240.243 41.436 L 240.243 41.436 Z"
            />
            <path
              className="st0"
              d="M 283.083 106.896 C 287.893 111.706 291.563 117.166 294.093 123.306 C 296.623 129.436 297.893 135.886 297.893 142.636 L 297.893 156.046 C 297.893 162.776 296.623 169.206 294.093 175.336 C 291.553 181.466 287.883 186.936 283.083 191.746 C 274.633 200.076 264.583 204.916 252.933 206.256 C 252.263 206.316 249.563 206.366 244.823 206.406 C 240.093 206.446 234.733 206.496 228.743 206.536 C 222.753 206.576 215.143 206.626 205.913 206.686 C 206.813 206.686 207.543 206.196 208.103 205.196 C 208.653 204.206 209.083 202.956 209.393 201.456 C 209.703 199.956 209.913 198.386 210.023 196.756 C 210.053 196.146 210.063 191.036 210.063 181.446 C 210.063 171.846 210.063 161.146 210.063 149.356 C 210.063 137.556 210.063 126.856 210.063 117.266 C 210.063 107.666 210.053 102.566 210.023 101.956 C 209.903 100.326 209.693 98.766 209.393 97.276 C 209.083 95.796 208.653 94.556 208.103 93.566 C 207.553 92.576 206.823 92.086 205.913 92.086 L 247.333 92.086 C 250.533 92.086 253.683 92.376 256.773 92.956 C 266.853 94.876 275.623 99.526 283.083 106.896 Z M 243.843 93.836 L 225.583 93.836 C 225.553 93.836 225.513 93.886 225.473 93.986 C 225.433 94.086 225.373 94.226 225.323 94.376 C 225.263 94.536 225.203 94.686 225.123 94.836 C 225.053 94.986 225.003 95.096 224.973 95.186 C 224.363 97.076 223.963 99.226 223.793 101.606 C 223.733 102.306 223.693 102.986 223.663 103.656 C 223.663 104.206 223.663 108.966 223.663 117.926 C 223.663 126.886 223.653 137.236 223.643 148.996 C 223.623 160.746 223.623 175.776 223.623 194.066 C 223.623 194.186 223.633 194.446 223.663 194.856 C 223.693 195.266 223.723 195.676 223.753 196.106 C 223.783 196.526 223.793 196.866 223.793 197.136 C 223.963 199.526 224.363 201.666 224.973 203.556 C 225.033 203.726 225.103 203.926 225.193 204.146 C 225.283 204.366 225.363 204.546 225.433 204.696 C 225.503 204.846 225.553 204.916 225.583 204.916 L 247.343 204.826 C 248.213 204.826 249.093 204.796 249.983 204.736 C 250.873 204.676 251.643 204.616 252.303 204.556 C 252.963 204.496 253.333 204.466 253.413 204.466 C 255.533 204.026 257.333 203.406 258.783 202.606 C 260.243 201.806 261.153 201.246 261.533 200.926 C 261.563 200.896 261.583 200.876 261.603 200.856 C 261.613 200.846 261.633 200.826 261.643 200.816 C 261.653 200.796 261.683 200.796 261.713 200.796 C 265.873 197.536 269.483 193.686 272.523 189.236 C 275.563 184.786 277.933 179.906 279.623 174.576 C 281.313 169.246 282.153 163.626 282.153 157.716 L 282.153 143.336 C 282.153 136.606 281.063 130.246 278.903 124.266 C 276.733 118.276 273.713 112.926 269.833 108.206 C 265.963 103.486 261.433 99.596 256.243 96.536 C 254.643 95.666 253.063 95.036 251.503 94.656 C 249.943 94.276 248.643 94.046 247.593 93.956 C 247.593 93.926 247.593 93.926 247.593 93.956 C 246.413 93.876 245.163 93.836 243.843 93.836 Z"
            />
            <path
              className="st0"
              d="M 283.083 283.586 C 287.893 288.396 291.563 293.856 294.093 299.996 C 296.623 306.126 297.893 312.576 297.893 319.326 L 297.893 332.736 C 297.893 339.466 296.623 345.896 294.093 352.026 C 291.553 358.156 287.883 363.626 283.083 368.436 C 274.633 376.766 264.583 381.606 252.933 382.946 C 252.263 383.006 249.563 383.056 244.823 383.096 C 240.093 383.136 234.733 383.186 228.743 383.226 C 222.753 383.266 215.143 383.316 205.913 383.376 C 206.813 383.376 207.543 382.886 208.103 381.886 C 208.653 380.896 209.083 379.646 209.393 378.146 C 209.703 376.646 209.913 375.076 210.023 373.446 C 210.053 372.836 210.063 367.726 210.063 358.136 C 210.063 348.536 210.063 337.836 210.063 326.046 C 210.063 314.246 210.063 303.546 210.063 293.956 C 210.063 284.366 210.053 279.256 210.023 278.646 C 209.903 277.016 209.693 275.456 209.393 273.966 C 209.083 272.486 208.653 271.246 208.103 270.256 C 207.553 269.266 206.823 268.776 205.913 268.776 L 247.333 268.776 C 250.533 268.776 253.683 269.066 256.773 269.646 C 266.853 271.566 275.623 276.216 283.083 283.586 Z M 243.843 270.526 L 225.583 270.526 C 225.553 270.526 225.513 270.576 225.473 270.676 C 225.433 270.776 225.373 270.916 225.323 271.066 C 225.273 271.216 225.203 271.376 225.123 271.526 C 225.053 271.676 225.003 271.786 224.973 271.876 C 224.363 273.766 223.963 275.916 223.793 278.296 C 223.733 278.996 223.693 279.676 223.663 280.346 C 223.663 280.896 223.663 285.656 223.663 294.616 C 223.663 303.576 223.653 313.926 223.643 325.686 C 223.623 337.436 223.623 352.466 223.623 370.756 C 223.623 370.876 223.633 371.136 223.663 371.546 C 223.693 371.956 223.723 372.366 223.753 372.796 C 223.783 373.216 223.793 373.556 223.793 373.826 C 223.963 376.216 224.363 378.356 224.973 380.246 C 225.033 380.416 225.103 380.616 225.193 380.836 C 225.283 381.056 225.363 381.236 225.433 381.386 C 225.503 381.536 225.553 381.606 225.583 381.606 L 247.343 381.516 C 248.213 381.516 249.093 381.486 249.983 381.426 C 250.873 381.366 251.643 381.306 252.303 381.246 C 252.963 381.186 253.333 381.156 253.413 381.156 C 255.533 380.716 257.333 380.096 258.783 379.296 C 260.243 378.496 261.153 377.936 261.533 377.616 C 261.563 377.586 261.583 377.566 261.603 377.546 C 261.613 377.536 261.633 377.516 261.643 377.506 C 261.653 377.486 261.683 377.486 261.713 377.486 C 265.873 374.226 269.483 370.376 272.523 365.926 C 275.563 361.476 277.933 356.596 279.623 351.266 C 281.313 345.936 282.153 340.316 282.153 334.406 L 282.153 320.026 C 282.153 313.296 281.063 306.936 278.903 300.956 C 276.733 294.966 273.713 289.616 269.833 284.896 C 265.953 280.176 261.433 276.286 256.243 273.226 C 254.643 272.356 253.063 271.726 251.503 271.346 C 249.943 270.966 248.643 270.736 247.593 270.646 C 247.593 270.616 247.593 270.616 247.593 270.646 C 246.413 270.566 245.163 270.526 243.843 270.526 Z"
            />
            <path
              className="st0"
              d="M 310.703 236.716 L 249.323 236.716 C 248.783 235.206 247.373 234.106 245.673 234.106 C 243.973 234.106 242.563 235.206 242.023 236.716 L 180.643 236.716 L 180.643 239.316 L 242.023 239.316 C 242.563 240.826 243.973 241.926 245.673 241.926 C 247.373 241.926 248.783 240.826 249.323 239.316 L 310.703 239.316 L 310.703 236.716 Z"
            />
          </svg>
        </div>
        <p className="text-6xl pt-4 font-parisienne text-brown">
          {t("landing.ourStory")}
        </p>
        <div className="w-5/6 md:w-2/3 m-auto p-8">
          <p className="text-yellow-900 text-xl">{t("landing.storySummary")}</p>
        </div>
        <div className="flex justify-center pt-4">
          <div className="border-t-4 item-start w-1/3 border-brown">
            <p className="p-4 text-5xl italic text-yellow-700">Daniela</p>
          </div>
          <img
            className="p-4 rounded-full w-1/4 "
            src="https://images.unsplash.com/photo-1602900032867-2eb876772a81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt=""
          />
          <div className="border-b-4 self-end w-1/3 border-brown">
            <p className="p-4 text-5xl italic text-yellow-900">Daniel</p>
          </div>
        </div>
      </section>
      <section>
        <div className="text-yellow-800 pattern-cross-dots-xl p-24">
          <div className="text-center m-auto bg-bone border-4 border-brown border-double">
            <div className="w-48 relative">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 57 57"
                className="absolute"
              >
                <g>
                  <circle style={{fill: "#EBA57D"}} cx="18.5" cy="31.5" r="5.5" />
                  <path
                    style={{fill: "#EBA57D"}}
                    d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z
                  M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z"
                  />
                </g>
                <g>
                  <circle style={{fill: "#EBA57D"}} cx="35.5" cy="31.5" r="5.5" />
                  <path
                    style={{fill: "#EBA57D"}}
                    d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z
                  M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z"
                  />
                </g>
                <path
                  style={{fill: "#EBA57D"}}
                  d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
                c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z"
                />
                <path
                  style={{fill: "#EBA57D"}}
                  d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
                c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z"
                />
              </svg>
            </div>
            <p className="text-4xl py-24 px-36">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore officiis modi ratione harum quibusdam voluptas in! Molestias recusandae voluptates totam excepturi, perspiciatis, nobis cupiditate vero ex rerum quo fugiat.</p>
            <div className="w-48 m-auto mr-0 relative">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 57 57"
                className="absolute rotate-180 -top-48"
              >
                <g>
                  <circle style={{fill: "#EBA57D"}} cx="18.5" cy="31.5" r="5.5" />
                  <path
                    style={{fill: "#EBA57D"}}
                    d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z
                  M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z"
                  />
                </g>
                <g>
                  <circle style={{fill: "#EBA57D"}} cx="35.5" cy="31.5" r="5.5" />
                  <path
                    style={{fill: "#EBA57D"}}
                    d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z
                  M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z"
                  />
                </g>
                <path
                  style={{fill: "#EBA57D"}}
                  d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
                c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z"
                />
                <path
                  style={{fill: "#EBA57D"}}
                  d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
                c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
