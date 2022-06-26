interface Props {
  t: Function;
}

export const Details = ({ t }: Props) => {
  return (
    <section className="relative overflow-hidden m-6 pb-12" id="place">
      <div className="flex items-center justify-center relative">
        <p
          className="font-bodoni text-6xl text-center text-yellow-700 font-bold pb-16 mt-8"
          dangerouslySetInnerHTML={{ __html: t("details.where") }}
        ></p>
      </div>
      <div className="block lg:flex w-11/12 md:w-2/3 m-auto border-4 border-brown border-double rounded-tl rounded-bl">
        <img
          src="/images/la_cayetana.jpg"
          alt="la cayetana finca para eventos"
          className="w-full lg:w-1/2"
        />
        <div className="w-full lg:w-2/3 p-4 m-auto relative">
          <h3 className="text-4xl text-yellow-800 font-bold leading-10 text-center">
            La Cayetana Finca para Eventos
          </h3>
          <div className="p-12">
            <h3 className="text-3xl">{t("details.ceremony")}</h3>
            <ul className="pt-1">
              <li className="italic font-medium">8:00PM - 8:30PM Hrs </li>
              <li>{t("date")}</li>
            </ul>
          </div>
          <div className="px-12">
            <h3 className="pt-12 text-3xl border-t-2">{t("details.party")}</h3>
            <ul className="pt-1">
              <li className="italic font-medium">9:00PM - 2:00 AM Hrs </li>
              <li>{t("date")}</li>
            </ul>
          </div>
          <div className="text-center flex w-full p-12">
            <a
              href="https://www.google.com/maps/place/La+Cayetana+Finca+para+Eventos/@28.679629,-106.0212263,17z/data=!3m1!4b1!4m5!3m4!1s0x86ea4552b4630eff:0x20322dcd08985b8c!8m2!3d28.679629!4d-106.0190376?hl=es-MX&shorturl=1"
              target="_blank"
              className="focus:outline-none w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-800 rounded-lg px-5 py-4 mb-2"
            >
              {t("details.locationbtn")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
