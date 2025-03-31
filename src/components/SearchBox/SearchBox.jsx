import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/filtersSlice";
import { Field, Form, Formik } from "formik";

function SearchBox() {
  const dispatch = useDispatch();
  const filterId = useId();

  const handleSubmit = (e) => {
    const filterAction = filter(e.target.value);
    dispatch(filterAction);
  };

  return (
    <Formik>
      <Form className={css.box}>
        <label htmlFor={filterId}>Find contacts dy name </label>

        <Field
          onChange={handleSubmit}
          className={css.input}
          id={filterId}
          type="text"
          name="filterValue"
        />
      </Form>
    </Formik>
  );
}
export default SearchBox;
