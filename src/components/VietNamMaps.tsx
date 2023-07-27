import React from "react";
import vietnam_paths from "../utils/vietnam";

const VietNamMaps: React.FC = () => {
  const actives = ["DAKLAK", "DAKKNONG", "PHUYEN", "KHANHHOA", "BINHDUONG"];
  return (
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
              <g>
                {value.map((v, i) => {
                  return (
                    <path
                      key={i}
                      d={v}
                      style={{
                        fill: "#cecece",
                        stroke: "#bfbfbf",
                        strokeMiterlimit: 2,
                        strokeWidth: "0.75px",
                      }}
                    />
                  );
                })}
              </g>
            );
          } else {
            const isActive = actives.includes(key);
            return (
              <path
                key={key}
                id={key}
                d={value}
                style={{
                  fill: isActive ? "#C0FFD9" : "#cecece",
                  stroke: "#bfbfbf",
                  strokeMiterlimit: 2,
                  strokeWidth: "0.75px",
                  cursor: "pointer",
                }}
                className={`hover:!fill-[${
                  isActive ? "#9DFCBF" : "#9E9E9E"
                }] hover:!fill-[#9DFCBF] transition-colors duration-300`}
              />
            );
          }
        })}
      </g>
    </svg>
  );
};

export default VietNamMaps;
