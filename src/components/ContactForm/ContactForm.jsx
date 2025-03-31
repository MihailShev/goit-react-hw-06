import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const alertMessage = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{6,7}$/, "Number must be 6-7 digits long")
    .required("Required"),
});

const initValue = {
  name: "",
  number: "",
};

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, form) => {
    const newUser = addContact({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });

    dispatch(newUser);
    form.resetForm();
  };

  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initValue}
      onSubmit={handleSubmit}
      validationSchema={alertMessage}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.input} id={nameId} type="text" name="name" />
          <ErrorMessage className={css.alert} name="name" component="span" />
        </div>

        <div className={css.box}>
          <label htmlFor={numberId}>Number</label>
          <Field className={css.input} id={numberId} type="tel" name="number" />
          <ErrorMessage className={css.alert} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
