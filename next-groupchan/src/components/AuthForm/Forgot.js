import Input from "../Inputs/Input";
import { forgotSchema, initialForgotalues } from "./Schemas";
import { Formik } from "formik";
import Button from "../Inputs/Button";
import {
    FormStyled,
    SwitchMode,
  } from "./AuthForm.styled";
import Link from 'next/link';

const Forgot = () => {
    const handleReset = (values)=>{
        console.log(values)
      }
    return ( 
        <Formik
        initialValues={initialForgotalues}
        validationSchema={forgotSchema}
        onSubmit={handleReset}
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
            <Button type="submit">Wyślij link resetujący</Button>
            <SwitchMode>
              <Link href="/auth/login" className="forgotPass">Wróć do strony logowania</Link>
            </SwitchMode>
          </FormStyled>
        )}
      </Formik>
     );
}
 
export default Forgot;