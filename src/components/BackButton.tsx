import { navigate } from "gatsby";
import React from "react";

interface Props {
  href?: string;
}

const BackButton: React.FC<Props> = ({ href }) => {
  const onClick = () => {
    if (href) {
      navigate(href);
    } else {
      navigate(-1);
    }
  };
  return (
    <button
      className="hover:text-neutral hover:cursor-pointer mb-3 text-grey font-light"
      onClick={onClick}
    >
      ⏪ Back
    </button>
  );
};

export default BackButton;
