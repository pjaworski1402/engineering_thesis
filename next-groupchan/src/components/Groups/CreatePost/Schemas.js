import * as Yup from "yup";

export const initialCreatePost = {
  postText: "",
  postImage: "",
  // isNSFW:false,
};

export const createPostSchema = Yup.object().shape({
  postText: Yup.string()
  .required("Tekst posta jest wymagany")
  .max(1000, "Tekst może zawierać maksymalnie 1000 znaków"),
  postImage: Yup.mixed()
  // .required("Obraz jest wymagany")
  .test("fileFormat", "Nieprawidłowy format obrazu", (value) => {
    if (!value) return true; // Brak obrazu to brak błędu
    return ["image/png", "image/jpeg", "image/jpg", "image/gif"].includes(
      value.type
    );
  }),
  // isNSFW: Yup.boolean().required("To pole jest wymagane"),
});
