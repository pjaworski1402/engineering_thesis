import {
  DateSelectorContainer,
  DateLabel,
  DateSelect,
  DateOption,
} from "./Date.styled";
import { ErrorMessage } from "./Input.styled";
import { changeClass } from "./Input";
import { getIn } from "formik";

const monthOptions = [
  { value: 0, label: "Miesiąc", hidden:true },
  { value: 1, label: "Styczeń" },
  { value: 2, label: "Luty" },
  { value: 3, label: "Marzec" },
  { value: 4, label: "Kwiecień" },
  { value: 5, label: "Maj" },
  { value: 6, label: "Czerwiec" },
  { value: 7, label: "Lipiec" },
  { value: 8, label: "Sierpień" },
  { value: 9, label: "Wrzesień" },
  { value: 10, label: "Październik" },
  { value: 11, label: "Listopad" },
  { value: 12, label: "Grudzień" },
];

const DateSelector = ({ children, required, formik_props }) => {
  let {day,month,year} = formik_props.values;

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const handleDayChange = (e) => {
    formik_props.handleChange(e);
  };

  const handleMonthChange = (e) => {
    formik_props.handleChange(e);
    const days = daysInMonth(parseInt(e.target.value), year);
    if (day > days) {
      formik_props.setFieldValue("day", days);
    }
  };

  const handleYearChange = (e) => {
    formik_props.handleChange(e);
    const days = daysInMonth(month, parseInt(e.target.value));
    if (day > days) {
      formik_props.setFieldValue("day", days);
    }
  };

  const dayOptions = [];
  const days = daysInMonth(month, year);
  for (let i = 0; i <= days; i++) {
    dayOptions.push({ value: i, label: i>0?i:"Dzień", hidden:i==0 });
  }

  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 100; i <= currentYear; i++) {
    yearOptions.push({ value: i, label: i===currentYear?"Rok":i, hidden:i===currentYear });
  }

  return (
    <DateSelectorContainer>
      <DateLabel>
        {children}
        {required && " *"}
      </DateLabel>
      <DateSelect name="day" value={day} onChange={handleDayChange}>
        {dayOptions.map((option) => (
          <DateOption key={option.value} value={option.value} hidden={option.hidden}>
            {option.label}
          </DateOption>
        ))}
      </DateSelect>
      <DateSelect name="month" value={month} onChange={handleMonthChange}>
        {monthOptions.map((option) => (
          <DateOption key={option.value} value={option.value} hidden={option.hidden}>
            {option.label}
          </DateOption>
        ))}
      </DateSelect>
      <DateSelect name="year" value={year} onChange={handleYearChange}>
        {yearOptions.map((option) => (
          <DateOption key={option.value} value={option.value} hidden={option.hidden}>
            {option.label}
          </DateOption>
        ))}
      </DateSelect>
        <ErrorMessage>
          <div>{getIn(formik_props.errors, "day")}</div>
          <div>{getIn(formik_props.errors, "month")}</div>
          <div>{getIn(formik_props.errors, "year")}</div>
        </ErrorMessage>
    </DateSelectorContainer>
  );
};

export default DateSelector;
