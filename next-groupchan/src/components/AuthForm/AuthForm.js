"use client";
import React from "react";
import Input from "../Inputs/Input";
import {
  Container,
  H1,
  H2,
  TextContainer,
  FormStyled,
  SwitchMode,
} from "./AuthForm.styled";
import { LoginSchema, initialLoginValues } from "./Schemas";
import { Formik } from "formik";
import Button from "../Inputs/Button";
import communityImage from "@/static/images/community.svg";
import Image from "next/image";
import Link from "next/link";

const AuthForm = () => {
  return (
    <Container className="container">
      <TextContainer>
        <H1>Witamy ponownie!</H1>
        <H2>Zaloguj się i bądź na bieżąco z wydarzeniami w Twoich grupach.</H2>
      </TextContainer>
      <Formik
        initialValues={initialLoginValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          // Tutaj możesz wywołać funkcję, która będzie przesyłać dane do serwera lub inaczej je przetwarzać
        }}
      >
        {(formik_props) => (
          <FormStyled>
            <Input
              required
              type="email"
              name="email"
              formik_props={formik_props}
            >
              Email
            </Input>
            <Input
              required
              type="password"
              name="password"
              formik_props={formik_props}
            >
              Hasło
            </Input>
            <SwitchMode>
              <Link href="/" className="forgotPass">Nie pamiętasz hasła?</Link>
            </SwitchMode>
            <Button type="submit">Zaloguj się</Button>
          </FormStyled>
        )}
      </Formik>
      <SwitchMode>
        Nie masz jeszcze konta? <br /><Link href="/">Zarejestruj się</Link>
      </SwitchMode>
      <Image src={communityImage} alt="" className="communityImage" />
    </Container>
  );
};

export default AuthForm;
