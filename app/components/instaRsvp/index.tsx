interface Props {
    t: Function;
}

export const InstaRsvp = ({ t }: Props) => {
    return (
        <section className="relative md:flex" id="rsvp">
            <div className="w-full md:w-1/2 m-auto p-16 py-6">
                <div className="">
                    <p className="font-bodoni text-3xl text-center text-yellow-900 font-bold pb-6 mt-8">
                        {t("rsvp")}
                    </p>
                    <p className="text-xl text-yellow-800">{t("rsvpDesc")}</p>
                    <p className="text-sm pt-8 text-yellow-700">{t("rsvpFootnote")}</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 m-auto bg-yellow-900 p-8 py-32 text-white text-center">
                <p className="font-bodoni text-2xl text-center font-bold pb-6 mt-8">
                    {t("shareMoments")}
                </p>
                <p className="text-xl">{t("hashtag")}</p>
                <p className="font-bold text-4xl mt-4">#LosDanisWedding</p>
            </div>
        </section>
    );
};
