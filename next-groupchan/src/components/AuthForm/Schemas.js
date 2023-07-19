import * as Yup from "yup";
const currentYear = new Date().getFullYear();

export const initialLoginValues = {
  email: "",
  password: "",
};

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Podaj prawidłowy adres e-mail")
    .required("Adres e-mail jest wymagany"),
  password: Yup.string().required("Hasło jest wymagane"),
});

export const initialRegisterValues = {
  email: "",
  username: "",
  password: "",
  day:"0",
  month:"0",
  year:currentYear,
  terms: false,
};

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Nieprawidłowy adres e-mail")
    .required("Adres e-mail jest wymagany"),
  username: Yup.string().required("Nazwa użytkownika jest wymagana"),
  password: Yup.string()
    .min(8, "Hasło musi mieć przynajmniej 8 znaków")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
      "Hasło musi zawierać przynajmniej jedną dużą literę, jedną małą literę, jedną cyfrę oraz jeden znak specjalny."
    )
    .required("Hasło jest wymagane"),
  day: Yup.number()
    .typeError("Dzień musi być liczbą")
    .required("Dzień jest wymagany")
    .positive("Dzień musi być liczbą dodatnią")
    .integer("Dzień musi być liczbą całkowitą")
    .min(1, "Wybierz dzień")
    .max(31, "Dzień nie może być większy niż 31"),
  month: Yup.number()
    .typeError("Miesiąc musi być liczbą")
    .required("Miesiąc jest wymagany")
    .positive("Miesiąc musi być liczbą dodatnią")
    .integer("Miesiąc musi być liczbą całkowitą")
    .min(1, "Wybierz miesiąc")
    .max(12, "Miesiąc nie może być większy niż 12"),
  year: Yup.number()
    .typeError("Rok musi być liczbą")
    .required("Rok jest wymagany")
    .positive("Rok musi być liczbą dodatnią")
    .integer("Rok musi być liczbą całkowitą")
    .min(1900, "Rok nie może być wcześniejszy niż 1900")
    .max(
      new Date().getFullYear()-1,
      "Wybierz rok"
    ),
  terms: Yup.boolean()
    .oneOf(
      [true],
      "Zaakceptuj warunki korzystania z serwisu, aby się zarejestrować"
    )
    .required("Warunki korzystania z serwisu muszą być zaakceptowane"),
});

export const initialForgotalues = {
  email: "",
};

export const forgotSchema = Yup.object().shape({
  email: Yup.string()
    .email("Podaj prawidłowy adres e-mail")
    .required("Adres e-mail jest wymagany"),
});