import React from 'react';
import { useCycle } from 'framer-motion';
import {Container,CheckboxLabel,CheckboxInput,ToggleSwitch,Circle,TextLabel} from "./Switch.styled"


const CustomCheckbox = ({ children, formik_props, name }) => {
  const [isChecked, toggle] = useCycle(false, true);

  const handleToggle = () => {
    toggle()
    const newValue = !formik_props.values[name];
    formik_props.setFieldValue(name, newValue);
  };
  return (
    <Container>
      <CheckboxLabel>
        <CheckboxInput name={name} type="checkbox" checked={isChecked} onChange={handleToggle} />
        <ToggleSwitch
            initial={false}
            animate={{ backgroundColor:isChecked ? 'var(--contrast)' : 'white' }}
        >
          <Circle
            initial={false}
            animate={{ x: isChecked ? '24px' : '2px', backgroundColor:isChecked ? 'white' : '#ebebeb' }}
            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          />
        </ToggleSwitch>
        <TextLabel>
            {children}
        </TextLabel>
      </CheckboxLabel>
    </Container>
  );
};

export default CustomCheckbox;
