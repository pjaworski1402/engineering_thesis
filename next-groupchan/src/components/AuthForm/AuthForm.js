"use client";
import React from "react";
import {
  Container,
  H1,
  H2,
  TextContainer,
  SwitchMode,
} from "./AuthForm.styled";

import communityImage from "@/static/images/community.svg";
import welcome from "@/static/images/welcome.svg";
import forgotImage from "@/static/images/forgot_password.svg";
import Image from "next/image";
import Link from "next/link";
import Login from "./Login";
import Register from "./Register";
import Forgot from "./Forgot";

const formText = {
  login:{
    h1:"Witamy ponownie!",
    h2:"Zaloguj się i bądź na bieżąco z wydarzeniami w Twoich grupach.",
    form: <Login />,
    switch:<>Nie masz jeszcze konta? <br /><Link href="/auth/register">Zarejestruj się</Link></>,
    image:<Image src={communityImage} alt="" priority className="communityImage login" />
  },
  register:{
    h1:"Załóż konto",
    h2:"Zarejestruj się w aplikacji Groupchan i dołącz do naszej społeczności.",
    form: <Register />,
    switch:<>Masz już konto? <br /><Link href="/auth/login">Zaloguj się</Link></>,
    image:<Image src={welcome} alt="" priority className="communityImage register" />
  },
  forgot_password:{
    h1:"Odzyskiwanie hasła",
    h2:"Nie pamiętasz swojego hasła? Nic straconego! Wpisz swój adres e-mail poniżej, a my prześlemy Ci link do resetowania hasła.",
    form: <Forgot />,
    image:<Image src={forgotImage} alt="" priority className="communityImage forgot" />
  }
}

const AuthForm = ({form}) => {
  return (
    <Container className="container">
      <div className="formContainer">
      <TextContainer>
        <H1>{formText[form].h1}</H1>
        <H2>{formText[form].h2}</H2>
      </TextContainer>
      {formText[form].form}
      <SwitchMode>
      {formText[form].switch}
      </SwitchMode>
      </div>
      {formText[form].image}
    </Container>
  );
};

export default AuthForm;
