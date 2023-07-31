import React from "react";
import {
  MAP_PIN_HEIGHT,
  MAP_PIN_WIDTH,
  VIETNAM_COORDINATE,
} from "../../utils/constants";
import useHover from "../../hooks/useHover";

interface IPinProps {
  lng: number;
  lat: number;
  key: string;
  ratioMap: number;
  id: string;
}

const Pin: React.FC<IPinProps> = ({ lng, lat, key, ratioMap, id }) => {
  const { ref, isHovered } = useHover();

  const top = (VIETNAM_COORDINATE.LAT_N - lat) * ratioMap - MAP_PIN_HEIGHT;
  const left = (lng - VIETNAM_COORDINATE.LNG_W) * ratioMap - MAP_PIN_WIDTH;

  return (
    <div
      style={{
        position: "absolute",
        cursor: "pointer",
        top,
        left,
        fontSize: 20,
        lineHeight: "22px",
      }}
    >
      <span ref={ref}>🌴</span>
      {isHovered && (
        <div
          className="absolute rounded-md border border-light shadow-sm w-max p-3 bg-[#ffffff] duration-300 z-20"
          style={{
            top: 24,
            left: 24,
          }}
        >
          <p className="text-grey text-sm font-bold">🌴 #{id}</p>
        </div>
      )}
    </div>
  );
};

export default Pin;
