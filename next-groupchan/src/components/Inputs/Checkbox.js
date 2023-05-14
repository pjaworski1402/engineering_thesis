"use client";
import { useState } from "react";
import { ErrorMessage } from "./Input.styled";
import {CheckboxInput, Container, Label } from "./Checkbox.styled" 
import { getIn } from "formik";
import {changeClass} from "./Input"

export const valueHeandler = (name, values) => {
  if (!name) return "";
  let res = name.split(".");
  let el = values[res[0]][res[1]];
  if (res.length === 2) {
    return el;
  } else if (res.length === 3) {
    return el[res[2]];
  }
};

const Checkbox = ({ children, required, name, formik_props,type }) => {
  const [isActive, setIsActive] = useState("");
  let value = valueHeandler(name, formik_props.values);
  function handleTextChange(v) {
    formik_props.handleChange(v);

    if (v.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return (
    <Container className="checkboxContainer">
      <CheckboxInput
        name={name}
        onChange={(e) => handleTextChange(e)}
        value={value}
        onBlur={() => {
          formik_props.setFieldTouched(name, true);
        }}
        type={type}
      />
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
    </Container>
  );
};

export default Checkbox;
