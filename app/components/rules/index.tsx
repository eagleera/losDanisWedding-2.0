interface Props {
    t: Function;
}

export const Rules = ({ t }: Props) => {
    return (
        <section className="relative pt-6 bg-bone">
            <div className="w-11/12 md:w-3/4 xl:w-2/3 m-auto">
                <div className="flex items-center justify-center">
                    <p className="font-bodoni text-6xl text-center text-yellow-900 font-bold pb-6 mt-8">
                        {t("rules")}
                    </p>
                </div>
                <p className="text-center text-yellow-800">
                    {t("rulesDesc")}
                </p>
                <div className="flex w-full justify-evenly flex-wrap mt-8">
                    <div className="text-center w-1/3 p-4">
                        <img loading="lazy" className="w-20 m-auto" src="/images/dresscode.png" alt="dress code" />
                        <p className="mt-4 font-bold text-yellow-800">{t("dressCode")}</p>
                        <p className="text-yellow-800">{t("dressCodeDesc")}</p>
                    </div>
                    <div className="text-center w-1/3 p-4">
                        <img loading="lazy" className="w-20 m-auto" src="/images/nokids.png" alt="no kids" />
                        <p className="mt-4 font-bold text-yellow-800">{t("kids")}</p>
                        <p className="text-yellow-800">{t("kidsDesc")}</p>
                    </div>
                    <div className="text-center w-1/3 p-4">
                        <img loading="lazy" className="w-20 m-auto" src="/images/time.png" alt="clock" />
                        <p className="mt-4 font-bold text-yellow-800">{t("punctuality")}</p>
                        <p className="text-yellow-800">{t("puntDesc")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
