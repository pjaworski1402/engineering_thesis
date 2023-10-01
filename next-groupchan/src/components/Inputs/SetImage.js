import React, { useRef, useState } from "react";
import { Container, SetImageButton, ImageStyled, AddImageContainer } from "./SetImage.styled";
import photoPlaceholder from "@/static/icons/image_ico.svg";
import { ErrorMessage } from "./Input.styled";
import { getIn } from "formik";

const SetImage = ({name, formik_props,classNameContainer}) => {
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
    <Container className={classNameContainer} onClick={handleClick}>
      <SetImageButton type="button">
        {selectedImage ? (
          <ImageStyled className="selectedImage" src={selectedImage} alt="selected image" width={96} height={96} onClick={handleClick} />
        ) : (
            <AddImageContainer>
          <ImageStyled
            src={photoPlaceholder}
            alt="select image"
          />
          Dodaj zdjęcie
          </AddImageContainer>
        )}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageChange}
          name={name}

        />
      </SetImageButton>
      <ErrorMessage>
          {getIn(formik_props.errors, name)}
        </ErrorMessage>
    </Container>
  );
};

export default SetImage;
