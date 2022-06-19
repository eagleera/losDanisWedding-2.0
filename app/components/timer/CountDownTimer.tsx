import DateTimeDisplay from "./DateTimeDisplay";
import useCountDown from "./useCountDown";

interface Time { 
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  t: any
}

interface TimerProps {
  targetDate: Date
  t: any
}

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};


const ShowCounter = ({ days, hours, minutes, seconds, t }: Time) => {
  return (
    <div className="show-counter">
      <div className="countdown-link text-yellow-800">
        <DateTimeDisplay value={days} type={t("days")} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={t("hours")} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={t("mins")} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={t("secs")} />
      </div>
    </div>
  );
};



const CountDownTimer = ({ targetDate, t }: TimerProps) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        t={t}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountDownTimer;