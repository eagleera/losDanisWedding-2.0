import {Envelope, links as envelopeLink } from "../components/envelope";
import { useNavigate } from "react-router-dom";


export const links = () => [
  ...envelopeLink()
];

export default function Index() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("home", { replace: true });
  }
  return (
    <div>
      <Envelope navigate={() => goHome()} />
    </div>
  );
}
