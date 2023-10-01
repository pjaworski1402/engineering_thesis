import * as Yup from "yup";

export const initialCreateGroup = {
  groupName: "",
  description: "",
  image: "",
  isPublic: false,
  isNSFW: false,
};

export const createGroupSchema = Yup.object().shape({
  groupName: Yup.string()
    .required("Nazwa grupy jest wymagana")
    .min(3, "Nazwa grupy musi zawierać co najmniej 3 znaki")
    .max(50, "Nazwa grupy może zawierać maksymalnie 50 znaków"),
  description: Yup.string()
    .required("Opis jest wymagany")
    .max(500, "Opis może zawierać maksymalnie 500 znaków"),
  image: Yup.mixed()
    .required("Obraz jest wymagany")
    .test("fileFormat", "Nieprawidłowy format obrazu", (value) => {
      if (!value) return true; // Brak obrazu to brak błędu
      return ["image/png", "image/jpeg", "image/jpg", "image/gif"].includes(
        value.type
      );
    }),
  isPublic: Yup.boolean().required("To pole jest wymagane"),
  isNSFW: Yup.boolean().required("To pole jest wymagane"),
});
