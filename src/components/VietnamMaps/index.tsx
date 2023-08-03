import React, { useEffect } from "react";
import vietnam_paths from "../../utils/vietnam";
import Province from "./Province";
import useMouse from "../../hooks/useMouse";
import { VIETNAM_COORDINATE } from "../../utils/constants";
import Pin from "./Pin";
import IPin from "../../types/pin";

interface VietNamMapsProps {
  pinLocations?: IPin[];
}

const VietNamMaps: React.FC<VietNamMapsProps> = ({ pinLocations }) => {
  const actives: string[] = [];
  const [currentProvinceRect, setCurrentProvinceRect] =
    React.useState<DOMRect | null>(null);
  const [ratioMap, setRatioMap] = React.useState<number>(1);
  const [provinceKey, setProvinceKey] = React.useState<string>("");
  const mapRef = React.useRef<SVGSVGElement>(null);

  const { x, y } = useMouse();

  const onHovered = (
    _rect: DOMRect,
    _provinceKey: string,
    _isHovered: boolean
  ) => {
    if (!_isHovered) {
      setCurrentProvinceRect(null);
      setProvinceKey("");
      return;
    }
    setTimeout(() => {
      setCurrentProvinceRect(_rect);
      setProvinceKey(_provinceKey);
    }, 0);
  };

  useEffect(() => {
    const rectMap = mapRef.current?.getBoundingClientRect() || new DOMRect();
    const ratio =
      (rectMap.bottom - rectMap.top) /
      (VIETNAM_COORDINATE.LAT_N - VIETNAM_COORDINATE.LAT_S);
    setRatioMap(ratio);
  }, []);

  return (
    <div className="relative h-full w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 388.614 540.548"
        className="h-full w-fit mx-auto"
        ref={mapRef}
      >
        <g id="_2022">
          {Object.entries(vietnam_paths).map(([key, value]) => {
            // HOANGSA-TRUONGSA
            if (Array.isArray(value)) {
              return (
                <g key={key}>
                  {value.map((v) => {
                    return <Province key={v} d={v} />;
                  })}
                </g>
              );
            } else {
              const isActive = actives.includes(key);
              return (
                <Province
                  isVisited={isActive}
                  key={key}
                  id={key}
                  d={value}
                  onHovered={onHovered}
                />
              );
            }
          })}
        </g>
      </svg>

      <div
        className={`maps-popover-sticky ${
          currentProvinceRect ? "show" : "hide"
        }`}
        style={{
          top: y - 40,
          left: x - (mapRef.current?.getBoundingClientRect()?.left || 0) + 40,
        }}
      >
        <p className="text-grey text-sm font-bold">#{provinceKey}</p>
      </div>

      <div>
        {pinLocations?.map((pin) => {
          return (
            <Pin
              lat={pin.lat}
              lng={pin.lng}
              key={pin.key}
              id={pin.key}
              ratioMap={ratioMap}
              images={pin.images || []}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VietNamMaps;
