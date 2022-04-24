interface TimeDisplay {
  value: number;
  type: string;
}
const DateTimeDisplay = ({ value, type }: TimeDisplay) => {
  return (
    <div className="countdown">
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;