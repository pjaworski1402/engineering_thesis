import Input from "../Inputs/Input";
import { loginSchema, initialLoginValues } from "./Schemas";
import { Formik } from "formik";
import Button from "../Inputs/Button";
import {
  FormStyled,
  SwitchMode,
} from "./AuthForm.styled";
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Login = () => {
  const [errorsCMS, setErrorsCMS] = useState([])
  const router = useRouter();
  const handleLogin = async (values) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    if (result.error === null) {
      router.push('/dashboard')
    }else{
      setErrorsCMS([{
        path:"email",
        message:"Niepoprawny e-mail lub hasło"
      }])
    }
  };

  return (
    <Formik
      initialValues={initialLoginValues}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
    >
      {(formik_props) => (
        <FormStyled>
          <Input
            required
            type="email"
            name="email"
            formik_props={formik_props}
            errorsCMS={errorsCMS}
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
            <Link href="/auth/forgot_password" className="forgotPass">Nie pamiętasz hasła?</Link>
          </SwitchMode>
          <Button type="submit">Zaloguj się</Button>
        </FormStyled>
      )}
    </Formik>
  );
}

export default Login;
