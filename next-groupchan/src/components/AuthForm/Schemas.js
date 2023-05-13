import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Podaj prawidłowy adres e-mail")
    .required("Adres e-mail jest wymagany"),
    password: Yup.string()
    .min(8, "Hasło musi mieć przynajmniej 8 znaków")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
      "Hasło musi zawierać przynajmniej jedną dużą literę, jedną małą literę, jedną cyfrę oraz jeden znak specjalny."
    )
    .required("Hasło jest wymagane"),
});

export const initialLoginValues = {
    email: "",
    password: "",
  };
