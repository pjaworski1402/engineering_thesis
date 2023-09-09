import React, { useState } from "react";
import Input from "../Inputs/Input";
import { registerSchema, initialRegisterValues } from "./Schemas";
import { Formik } from "formik";
import Button from "../Inputs/Button";
import Checkbox from "../Inputs/Checkbox";
import { FormStyled } from "./AuthForm.styled";
import Link from "next/link";
import DateSelector from "../Inputs/Date";
import axios from 'axios';
import { useRouter } from "next/navigation";

const Register = () => {
  const [errorsCMS, setErrorsCMS] = useState([])
  const router = useRouter();
  const handleRegister = (values) => {
    const year = values.year;
    const month = values.month.toString().padStart(2, '0');
    const day = values.day.toString().padStart(2, '0');

    const data = {
      email: values.email,
      username: values.username,
      password: values.password,
      birthdate: `${year}-${month}-${day}`
    };
  
    axios.post('http://localhost:1337/api/auth/local/register', data)
      .then(response => {
        router.push('/auth/login?status="success"')
      })
      .catch(err => {
        console.log(err)
        const {error} = err.response.data
        if(error?.message){
          const errorsList = []
          switch (error.message) {
            case "Email or Username are already taken":
              errorsList.push({
                path:"email",
                message:"Email lub nazwa użytkownika jest już zajęta"
              })
              break;
          
            default:
              break;
          }
          setErrorsCMS(errorsList)
        }
      });
  };
  return (
    <Formik
      initialValues={initialRegisterValues}
      validationSchema={registerSchema}
      onSubmit={handleRegister}
    >
      {(formik_props) => (
        <FormStyled>
          <Input required type="email" name="email" formik_props={formik_props} errorsCMS={errorsCMS}>
            Email
          </Input>
          <Input
            required
            type="text"
            name="username"
            formik_props={formik_props}
            errorsCMS={errorsCMS}
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
