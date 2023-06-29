import { navigate } from "gatsby";
import React from "react";

const BackButton: React.FC = () => {
  return (
    <button
      className="hover:text-neutral hover:cursor-pointer mb-3 text-grey font-light"
      onClick={() => navigate(-1)}
    >
      ⏪ Back
    </button>
  );
};

export default BackButton;
