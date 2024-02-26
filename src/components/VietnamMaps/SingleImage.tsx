import React from "react";
import { IImage } from "../../types/image";
import ModalSinglePhoto from "./ModalSinglePhoto";

interface Props {
  image: IImage;
}

const SingleImage: React.FC<Props> = ({ image }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const onClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="image_square" onClick={onClick}>
      <img src={image.url} alt={image.title} width={220} height={220} />
      {openModal && (
        <ModalSinglePhoto
          open={true}
          image={image}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default SingleImage;
