import React from "react";
import {
  MAP_PIN_HEIGHT,
  MAP_PIN_WIDTH,
  VIETNAM_COORDINATE,
} from "../../utils/constants";
import useHover from "../../hooks/useHover";
import Modal from "./Modal";

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

  const [openPopUp, setOpenPopUp] = React.useState(false);

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        fontSize: 20,
        lineHeight: "22px",
      }}
    >
      <span
        className="cursor-pointer"
        ref={ref}
        onClick={() => setOpenPopUp(true)}
      >
        📷
      </span>
      {isHovered && (
        <div
          className="absolute rounded-md border border-light shadow-sm w-max p-3 bg-[#ffffff] duration-300 z-20"
          style={{
            top: 24,
            left: 24,
          }}
        >
          <p className="text-grey text-sm font-bold">📸 #{id}</p>
          <div className="pt-3">
            <img
              src="https://c0.wallpaperflare.com/preview/280/30/526/seoul-korea-mac-wallpaper-pc-wallpaper.jpg"
              alt="ffff"
              width={100}
              height={177.8}
              className="aspect-video rounded-md"
            />
            <p className="text-grey text-sm font-bold text-right">+3 more</p>
          </div>
        </div>
      )}
      <Modal open={openPopUp} onClose={() => setOpenPopUp(false)} />
    </div>
  );
};

export default Pin;
