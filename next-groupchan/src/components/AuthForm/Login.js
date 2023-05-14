import Input from "../Inputs/Input";
import { loginSchema, initialLoginValues } from "./Schemas";
import { Formik } from "formik";
import Button from "../Inputs/Button";
import {
    FormStyled,
    SwitchMode,
  } from "./AuthForm.styled";
import Link from 'next/link';

const Login = () => {
    const handleLogin = (values)=>{
        console.log(values)
      }
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
     );
}
 
export default Login;