import React from "react";
import XClose from "../../images/x-close.svg";
import ChevronLeft from "../../images/chevron-left.svg";
import ChevronRight from "../../images/chevron-right.svg";
import { useKeyPress } from "../../hooks/useKeyPress";

interface IModalProps {
  open?: boolean;
  onClose?: () => void;
  totalImages?: number;
}

const img = [
  "https://i.imgur.com/tAkvCW2.jpg",
  "https://i.imgur.com/6phTr2j.jpeg",
  "https://i.imgur.com/IpQciJs.jpeg",
];

const Modal: React.FC<IModalProps> = ({
  open = false,
  onClose,
  totalImages = 3,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const imageBasedClass =
    "object-contain rounded-lg mx-auto border border-neutral h-full duration-700 border-dashed absolute";
  const imageSlidePrev = " left-[-50%] top-0 opacity-0 scale-50";
  const imageSlideNext = " left-[50%] top-0 opacity-0 scale-50";
  const imageSlideCurrent = " scale-100 left-0 right-0 opacity-1";

  useKeyPress(() => onPrev(), ["ArrowLeft"]);
  useKeyPress(() => onNext(), ["ArrowRight"]);

  const onNext = () => {
    if (activeIndex === totalImages - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const onPrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(totalImages - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 backdrop-blur-sm z-[199]" />
      <div
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8
        duration-200 rounded-lg z-[200] w-[80%] h-[80%]"
      >
        <p className="font-normal text-[16px] text-center my-2 leading-6 text-neutral">
          {`${activeIndex + 1} / ${totalImages}`}
        </p>
        <button className="absolute top-2 right-2" onClick={onClose}>
          <XClose />
        </button>
        <div className="relative h-[calc(100%-24px)]">
          {img.map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt="cc"
                className={
                  imageBasedClass +
                  (index === activeIndex
                    ? imageSlideCurrent
                    : index > activeIndex
                    ? imageSlideNext
                    : imageSlidePrev)
                }
              />
            );
          })}
        </div>
        <button className="absolute top-[50%] left-2" onClick={onPrev}>
          <ChevronLeft />
        </button>
        <button className="absolute top-[50%] right-2" onClick={onNext}>
          <ChevronRight />
        </button>
        <p className="font-normal text-[16px] text-center my-2 leading-6 text-neutral">
          Một góc bảo tàng cà phê Tp. BMT
        </p>
      </div>
    </>
  );
};

export default Modal;
