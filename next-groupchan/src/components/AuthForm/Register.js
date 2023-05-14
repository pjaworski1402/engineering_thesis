import React from "react";
import Input from "../Inputs/Input";
import { registerSchema, initialRegisterValues } from "./Schemas";
import { Formik } from "formik";
import Button from "../Inputs/Button";
import Checkbox from "../Inputs/Checkbox";
import { FormStyled, SwitchMode } from "./AuthForm.styled";
import Link from "next/link";
import DateSelector from "../Inputs/Date";

const Register = () => {
  const handleRegister = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialRegisterValues}
      validationSchema={registerSchema}
      onSubmit={handleRegister}
    >
      {(formik_props) => (
        <FormStyled>
          <Input required type="email" name="email" formik_props={formik_props}>
            Email
          </Input>
          <Input
            required
            type="text"
            name="username"
            formik_props={formik_props}
          >
            Nazwa użytkownika
          </Input>
          <Input
            required
            type="password"
            name="password"
            formik_props={formik_props}
          >
            Hasło
          </Input>
          <DateSelector
              required
              formik_props={formik_props}
            >
              Data urodzenia
            </DateSelector>
          <Checkbox
            required
            type="checkbox"
            name="terms"
            formik_props={formik_props}
          >
            Przeczytałem(-łam) i akceptuję{" "}
            <Link href="/">Warunki Korzystania z Usługi</Link> oraz{" "}
            <Link href="/">Politykę Prywatności</Link> Groupchan
          </Checkbox>
          <Button type="submit">Zarejestruj się</Button>
        </FormStyled>
      )}
    </Formik>
  );
};

export default Register;
