import Timer from "../timer/CountDownTimer";
import { atcb_action } from 'add-to-calendar-button'
import { motion } from "framer-motion"

interface Props {
    t: Function;
}

export const Hero = ({ t }: Props) => {
    return (
        <section>
            <div className="flex items-center min-h-screen justify-center bg-img">
                <div className="w-11/12 mt-40 md:mt-0">
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-3xl md:text-5xl text-bone mb-4 mt-12 md:mt-0">
                            {t("landing.ourWedding")}
                        </h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-9xl text-wedYellow">
                            Daniela & Daniel
                        </h2>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="py-1 pt-6 md:text-center text-xl text-bone">
                            SAVE THE DATE
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                    >
                        <div className="counter-container">
                            <Timer targetDate={new Date("2022-10-01T20:00:00")} t={t} />
                            <p className="text-center text-bone font-bold md:text-2xl text-xl uppercase">
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
                                            endDate: "2022-10-02",
                                            startTime: "19:00",
                                            endTime: "02:00",
                                            location: "la cayetana finca para eventos",
                                            options: ['Apple', 'Google', 'iCal', 'Outlook.com'],
                                            trigger: "click",
                                            timeZone: "America/Chihuahua",
                                            iCalFileName: "Wedding Danis",
                                        })
                                    }
                                }
                            >
                                {t("landing.addCalendar")}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};
