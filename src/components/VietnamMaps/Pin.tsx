import React from "react";
import {
  MAP_PIN_HEIGHT,
  MAP_PIN_WIDTH,
  VIETNAM_COORDINATE,
} from "../../utils/constants";
import useHover from "../../hooks/useHover";
// import Modal from "./Modal";
import { IImage } from "../../types/image";
import ModalGallery from "./ModalGallery";

interface IPinProps {
  lng: number;
  lat: number;
  pinKey: string;
  ratioMap: number;
  id: string;
  images: IImage[];
}

const Pin: React.FC<IPinProps> = ({
  lng,
  lat,
  pinKey,
  ratioMap,
  id,
  images,
}) => {
  const { ref, isHovered } = useHover();

  const top = (VIETNAM_COORDINATE.LAT_N - lat) * ratioMap - MAP_PIN_HEIGHT;
  const left = (lng - VIETNAM_COORDINATE.LNG_W) * ratioMap - MAP_PIN_WIDTH;

  const first4Images = images.slice(0, 4);
  const restImages = images.slice(4);

  const [openPopUp, setOpenPopUp] = React.useState(false);

  const onPinClick = () => {
    if (first4Images.length) {
      setOpenPopUp(true);
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top,
          left,
          fontSize: 20,
          lineHeight: "22px",
        }}
      >
        <span className="cursor-pointer" ref={ref} onClick={onPinClick}>
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
            <p className="text-grey text-sm font-bold">#{id}</p>
            <div className="pt-3 flex flex-wrap max-w-[136px] gap-1">
              {first4Images.length > 0 ? (
                first4Images.map((img, index) => (
                  <img
                    key={index}
                    src={img.url}
                    alt={img.title}
                    width={60}
                    height={60}
                    className="rounded-md object-cover w-[60px] h-[60px]"
                  />
                ))
              ) : (
                <p className="text-grey text-sm">No images 😭</p>
              )}
              {restImages.length > 0 && (
                <p className="text-grey text-sm font-bold text-right">
                  +{restImages.length} more
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <ModalGallery
        open={openPopUp}
        onClose={() => setOpenPopUp(false)}
        pinId={id}
        images={images}
        pinKey={pinKey}
      />
    </>
  );
};

export default Pin;
