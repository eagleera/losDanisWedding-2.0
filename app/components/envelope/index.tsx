import React, { useEffect } from "react";
import styles from "./envelope.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const colors = {
  purple: "#A181A6",
  bone: "#F7EDE2",
  wedYellow: "#F6D294",
  orange: "#EBA57D",
  brown: "#BF8960",
};
interface Props {
  navigate: Function
}
;
export const Envelope = (props: Props) => {
  useEffect(() => openEnvelope(), [])
  function openEnvelope() {
    const seal = document.getElementById("seal");
    const triangle = document.getElementById("triangle");
    seal?.classList.add("open-seal");
    triangle?.classList.add("open");
    setTimeout(() => {
      props.navigate();  
    }, 2500);
  }
  return (
    <div className="envelope-wrapper bg-orange">
      <svg
        onClick={openEnvelope}
        preserveAspectRatio="xMidYMid meet"
        className="svg-envelope"
        id="envelope"
        width="100%"
        viewBox="0 0 20 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-envelope__group">
          <rect
            strokeWidth="0.2%"
            stroke={colors.brown}
            className="svg-envelope__bg"
            fill={colors.bone}
            height="100%"
            width="100%"
            rx=".3"
            ry=".3"
            x="0"
            y="0"
          />
          
          <path
            stroke={colors.brown}
            strokeWidth="0.2%"
            d="M0.3 0 L 10 7 L 19.7 0 L 12 0"
            fill={colors.wedYellow}
          />
          <defs>
            <pattern
              id="letter"
              x="0%"
              y="0%"
              height="100%"
              width="100%"
              viewBox="0 0 512 512"
            >
              <image
                x="0%"
                y="0%"
                width="512"
                height="512"
                href="/images/logo_full_white_brown.jpg"
              ></image>
            </pattern>
          </defs>
          <rect
            x="0%"
            y="-12%"
            height="75%"
            width="100%"
            rx="10"
            ry="20"
            fill="url(#letter)"
          />
          <polygon
            points="10,6 0.3,12 19.7,12"
            radius="0.5"
            fill={colors.bone}
            stroke={colors.brown}
            strokeWidth="0.2%"
          />
          <polygon
            points="10,6 0.3,12 0.3,0.3"
            fill={colors.bone}
          />
          <polygon
            points="10,6 19.7,12 19.7,0.3"
            fill={colors.bone}
          />
          <path
            strokeWidth="0.2%"
            strokeOpacity="0.5"
            stroke={colors.brown}
            id="triangle"
            opacity="1"
            d="M0.3 0 L 10 7 L 19.7 0 L 12 0"
            fill={colors.bone}
          />
          <defs>
            <pattern
              id="logo"
              x="0%"
              y="0%"
              height="100%"
              width="100%"
              viewBox="0 0 512 512"
            >
              <image
                x="0%"
                y="0%"
                width="512"
                height="512"
                href="/images/logo_small_brown.png"
              ></image>
            </pattern>
          </defs>
          <circle id="seal" cx="50%" cy="30%" r="12%" fill="url(#logo)" />
        </g>
      </svg>
    </div>
  );
};
