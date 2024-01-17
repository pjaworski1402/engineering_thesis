"use client";

import { useState } from "react";
import { Container, CloseButton, Title, FormStyled } from "./CreatePost.styled";
import { initialCreatePost, createPostSchema } from "./Schemas";
import Textarea from "@/components/Inputs/Textarea";
import { Formik } from "formik";
import CustomCheckbox from "@/components/Inputs/Switch";
import { Button } from "@/components/Inputs/Button.styled";
import SetImage from "@/components/Inputs/SetImage";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { apiVars } from "@/api/strapiQueries";

const CreatePost = ({ params }) => {
  const groupname = decodeURI(params.groupname);
  const [errorsCMS, setErrorsCMS] = useState([]);
  const router = useRouter();
  const { data } = useSession();
  const handleSubmit = async (values) => {
    try {
      if (values.postImage) {
        let file = new FormData();
        file.append("files", values.postImage);
        axios
          .post(`${apiVars.API_URL}/api/upload`, file, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${data.jwt}`,
            },
          })
          .then((response) => {
            const fileId = response.data[0].id;
            axios
              .post(
                `${apiVars.API_URL}/api/posts`,
                {
                  data: {
                    content: values.postText,
                    nsfw: false,
                    image: fileId,
                    groupname: groupname,
                  },
                },
                {
                  headers: {
                    Authorization: `Bearer ${data.jwt}`,
                  },
                }
              )
              .then(() => {
                router.push(`/dashboard/group/${groupname}`);
              });
          })
          .catch((error) => {
            return console.log(error);
          });
      } else {
        axios
          .post(
            `${apiVars.API_URL}/api/posts`,
            {
              data: {
                content: values.postText,
                nsfw: false,
                groupname: groupname,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${data.jwt}`,
              },
            }
          )
          .then(() => {
            router.push(`/dashboard/group/${groupname}`);
          })
          .catch((error) => {
            return console.log(error);
          });
      }
    } catch (error) {
      console.error("Wystąpił błąd podczas tworzenia posta:", error);
      return setErrorsCMS([error.message]);
    }
  };
  const handleCancel = () => {
    router.push(`/dashboard/group/${groupname}`);
  };
  return (
    <Container>
      <Title>{groupname} - Napisz post</Title>
      <Formik
        initialValues={initialCreatePost}
        validationSchema={createPostSchema}
        onSubmit={handleSubmit}
      >
        {(formik_props) => (
          <FormStyled>
            {console.log(formik_props)}
            <Textarea
              required
              type="text"
              name="postText"
              formik_props={formik_props}
              errorsCMS={errorsCMS}
              max={1000}
            >
              Tekst posta
            </Textarea>
            <SetImage
              classNameContainer="setImage"
              name="postImage"
              formik_props={formik_props}
            />
            {/* <CustomCheckbox name="isNSFW" formik_props={formik_props}>
              NSFW
            </CustomCheckbox> */}
            <div className="buttons">
              <Button type="submit">Opublikuj</Button>
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

export default CreatePost;
