import React, { useRef, useState } from "react";
import { Container, GroupImage, ImageStyled } from "./SetAvatar.styled";
import photoPlaceholder from "@/static/icons/photo_placeholder.svg";

const SetAvatar = ({name, formik_props}) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageSrc = event.target.result;
        console.log(event)
        setSelectedImage(imageSrc);
        formik_props.setFieldValue(name, selectedFile);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <Container>
      <GroupImage type="button">
        {selectedImage ? (
          <ImageStyled src={selectedImage} alt="selected image" width={96} height={96} onClick={handleClick} />
        ) : (
          <ImageStyled
            src={photoPlaceholder}
            alt="select image"
            onClick={handleClick}
          />
        )}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageChange}
          name={name}

        />
      </GroupImage>
    </Container>
  );
};

export default SetAvatar;
