interface Props {
  t: Function;
}

export const Details = ({ t }: Props) => {
  return (
    <section className="relative overflow-hidden m-6">
      <div className="flex items-center justify-center relative">
        <p className="font-bodoni text-6xl text-center text-yellow-700 font-bold pb-6">
          ¿Donde <br /> y a que hora?
        </p>
      </div>
      <div className="flex w-2/3 m-auto border-4 border-brown border-double rounded">
        <img
          src="/images/la_cayetana.jpg"
          alt="la cayetana finca para eventos"
          className="w-1/2 rounded"
        />
        <div className="w-2/3 p-4">
          <h3 className="text-4xl text-yellow-800 font-bold leading-10 text-center">La Cayetana Finca para Eventos</h3>
          <div>
            <p>Ceremonia Espiritual</p>
            <ul>
              <li>8:00PM - 8:30PM Hrs </li>
              <li>Sabado, 1 Octubre 2022</li>
            </ul>
          </div>
          <div>
            <p>Fiesta</p>
            <ul>
              <li>9:00PM - 2:00 AM Hrs </li>
              <li>Sabado, 1 Octubre 2022</li>
            </ul>
          </div>
          <a href="https://www.google.com/maps/place/La+Cayetana+Finca+para+Eventos/@28.679629,-106.0212263,17z/data=!3m1!4b1!4m5!3m4!1s0x86ea4552b4630eff:0x20322dcd08985b8c!8m2!3d28.679629!4d-106.0190376?hl=es-MX&shorturl=1">
            Ver ubicación
          </a>
        </div>
      </div>
    </section>
  );
};
