import { useState } from "react";
interface Props {
  t: Function;
}

export const Registry = ({ t }: Props) => {
  const [country, setCountry] = useState("mexico");
  return (
    <section className="relative pt-6 bg-wedYellow" id="registry">
      <div className="block w-11/12 m-auto">
        <p className="font-bodoni text-6xl text-center text-yellow-900 font-bold pb-6 mt-8">
          {t("registry")}
        </p>
        <p className="text-center text-yellow-800">
          {t("registryDesc")}
        </p>
      </div>
      <div className="w-full lg:w-2/3 p-4 m-auto relative">
        <div className="text-center mb-8">
          <button
            onClick={() => setCountry("mexico")}
            type="button"
            className={
              country === "mexico"
                ? "focus:outline-none text-bone bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-lg px-10 py-4 mr-2 mb-2"
                : "focus:outline-none text-yellow-800 bg-bone hover:bg-bone focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-lg px-10 py-4 mr-2 mb-2"
            }
          >
            México
          </button>
          <button
            onClick={() => setCountry("usa")}
            type="button"
            className={
                country === "usa"
                  ? "focus:outline-none text-bone bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-lg px-10 py-4 mr-2 mb-2"
                  : "focus:outline-none text-yellow-800 bg-bone hover:bg-bone focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-lg px-10 py-4 mr-2 mb-2"
              }
          >
            USA
          </button>
        </div>
        {country === "mexico" ? (
          <div className="flex w-full justify-evenly flex-wrap">
            <div>
              <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50945120" className="" target="_blank">
                <div className="w-48 h-36 mb-4 bg-bone rounded-xl flex justify-center items-center hover:bg-white transition">
                  <img
                    className="py-4 px-8 h-full w-full"
                    src="/images/liverpool.svg"
                    alt="liverpool mesa de regalos"
                  />
                </div>
              </a>
            </div>
            <div>
              <a href="/images/transferencia.jpg" className="" target="_blank">
                <div className="w-48 h-36 mb-4 bg-bone rounded-xl flex justify-center items-center hover:bg-white transition">
                  <img
                    className="py-4 px-8 w-full"
                    src="/images/spei.png"
                    alt="transferencia SPEI"
                  />
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-evenly flex-wrap">
            <div>
              <a href="https://amazon.com/wedding/Losdaniswedding" className="" target="_blank">
                <div className="w-48 h-36 mb-4 bg-bone rounded-xl flex justify-center items-center hover:bg-white transition">
                  <img
                    className="py-4 px-8 w-full"
                    src="/images/amazon-wedding-registry.png"
                    alt="amazon wedding registry"
                  />
                </div>
              </a>
            </div>
            <div>
              <a href="https://www.target.com/gift-registry/gift/losdaniswedding" className="" target="_blank">
                <div className="w-48 h-36 mb-4 bg-bone rounded-xl flex justify-center items-center hover:bg-white transition relative">
                  <img
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-full"
                    src="/images/target.png"
                    alt="target wedding registry"
                  />
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
