"use client";
import { useState } from "react";
import { Container, Label, ErrorMessage, TextAreaStyled } from "./Input.styled";
import { getIn } from "formik";

export const valueHandler = (name, values) => {
  if (!name) return "";
  let res = name.split(".");
  let el = values[res[0]][res[1]];
  if (res.length === 2) {
    return el;
  } else if (res.length === 3) {
    return el[res[2]];
  }
};

export const changeClass = (touched, error, value) => {
  if (touched) {
    if (value === null) return "error";
    if (error || (value && value.length === 0)) {
      return "error";
    } else {
      if (value !== undefined && value.length !== 0) {
        return "done";
      }
    }
  }
  return "";
};

const TextArea = ({ children, required, name, formik_props, type, errorsCMS, max }) => {
  const [isActive, setIsActive] = useState("");
  let value = valueHandler(name, formik_props.values);

  function handleTextChange(e) {
    formik_props.handleChange(e);

    if (e.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return (
    <Container className="inputContainer">
      <TextAreaStyled
        name={name}
        onChange={(e) => handleTextChange(e)}
        value={value}
        onBlur={() => {
          formik_props.setFieldTouched(name, true);
        }}
        placeholder=""
      />
      <div className={`length${formik_props.values[name].length>max?" error":""}`}>{formik_props.values[name].length||0} / {max}</div>
      <Label className={isActive ? "active" : ""} htmlFor={name}>
        {children}
        {required && " *"}
      </Label>
      {changeClass(
        getIn(formik_props.touched, name),
        getIn(formik_props.errors, name),
        getIn(formik_props.values, name)
      ) === "error" && (
        <ErrorMessage>
          {getIn(formik_props.errors, name)}
        </ErrorMessage>
      )}
      <ErrorMessage>
        {errorsCMS?.filter((error) => error.path === name)[0]?.message}
      </ErrorMessage>
    </Container>
  );
};

export default TextArea;
