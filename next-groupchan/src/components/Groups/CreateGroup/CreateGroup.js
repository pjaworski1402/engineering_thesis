"use client";
import React, { useState } from "react";
import { Container, Title, Subtitle, FormStyled } from "./CreateGroup.styled";
import Input from "@/components/Inputs/Input";
import Textarea from "@/components/Inputs/Textarea";
import { Formik } from "formik";
import { initialCreateGroup, createGroupSchema } from "./Schemas";
import Button from "@/components/Inputs/Button";
import CustomCheckbox from "@/components/Inputs/Switch";
import SetAvatar from "@/components/Inputs/SetAvatar";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreateGroup = () => {
  const router = useRouter();
  const [errorsCMS, setErrorsCMS] = useState([]);
  const { data } = useSession();
  const handleSubmit = async (values) => {
    try {
      // Upload Icon
      let file = new FormData();
      file.append("files", values.image);
      axios
        .post("http://localhost:1337/api/upload", file, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${data.jwt}`,
          },
        })
        .then((response) => {
          const fileId = response.data[0].id;
          axios.post(
            "http://localhost:1337/api/groups",
            {
              data: {
                name: values.groupName,
                description: values.description,
                public: values.isPublic,
                nsfw: values.isNSFW,
                icon: fileId,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${data.jwt}`,
              },
            }
          );
        })
        .catch((error) => {
          return console.log(error);
        });
    } catch (error) {
      console.error("Wystąpił błąd podczas tworzenia grupy:", error);
      return setErrorsCMS([error.message]);
    }
  };
  const handleCancel = ()=>{
    router.push("/dashboard");
  }
  return (
    <Container className="container">
      <Title>Stwórz grupę</Title>
      <Subtitle>
        Spersonalizuj nową grupę. Możesz w każdej chwili edytować jej
        ustawienia.
      </Subtitle>
      <Formik
        initialValues={initialCreateGroup}
        validationSchema={createGroupSchema}
        onSubmit={handleSubmit}
      >
        {(formik_props) => (
          <FormStyled>
            <SetAvatar classNameContainer="setAvatar" name="image" formik_props={formik_props} />
            <Input
              required
              type="text"
              name="groupName"
              formik_props={formik_props}
              errorsCMS={errorsCMS}
            >
              Nazwa grupy
            </Input>
            <Textarea
              required
              type="text"
              name="description"
              formik_props={formik_props}
              errorsCMS={errorsCMS}
              max={500}
            >
              Opis
            </Textarea>
            <CustomCheckbox name="isPublic" formik_props={formik_props}>
              Publiczny
            </CustomCheckbox>
            <CustomCheckbox name="isNSFW" formik_props={formik_props}>
              NSFW
            </CustomCheckbox>
            <div className="buttons">
              <Button type="submit">Stwórz grupę</Button>
              <Button invert="true" type="button" onClick={handleCancel}>
                Anuluj
              </Button>
            </div>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default CreateGroup;
