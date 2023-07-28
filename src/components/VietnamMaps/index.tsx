import React from "react";
import vietnam_paths from "../../utils/vietnam";
import Province from "./Province";
import useMouse from "../../hooks/useMouse";

const VietNamMaps: React.FC = () => {
  const actives = ["DAKLAK", "DAKKNONG", "PHUYEN", "KHANHHOA", "BINHDUONG"];
  const [rect, setRect] = React.useState<DOMRect | null>(null);
  const [provinceKey, setProvinceKey] = React.useState<string>("");

  const { x, y } = useMouse();

  const onHovered = (_rect: DOMRect, _provinceKey: string) => {
    setRect(_rect);
    setProvinceKey(_provinceKey);
  };

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 388.614 540.548"
        className="h-full w-fit mx-auto"
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
      {rect && (
        <div
          className="rounded-md shadow-md w-max p-3 bg-[#ffffff]"
          style={{
            position: "absolute",
            top: y + 4,
            left: x + 4,
            // border: "1px solid #000",
            // zIndex: 100,
          }}
        >
          <p className="text-grey font-light text-sm">{provinceKey}</p>
        </div>
      )}
    </div>
  );
};

export default VietNamMaps;
