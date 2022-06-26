import Timer from "../timer/CountDownTimer";
import { atcb_action } from 'add-to-calendar-button'


interface Props {
    t: Function;
}

export const Hero = ({ t }: Props) => {
    return (
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
                        <p className="text-center text-yellow-800 font-bold md:text-2xl text-xl uppercase">
                            {t("date")}
                        </p>
                    </div>
                    <div className="w-full flex">
                        <button
                            id="calendar-button"
                            className="md:m-auto font-bold w-full md:w-auto"
                            onClick={
                                () => {
                                    atcb_action({
                                        name: "Los Danis Wedding",
                                        startDate: "2022-10-01",
                                        endDate: "2022-10-01",
                                        options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'MicrosoftTeams', 'Yahoo'],
                                        trigger: "click",
                                        iCalFileName: "Wedding Danis",
                                      })
                                }
                            }
                        >
                            {t("landing.addCalendar")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};
