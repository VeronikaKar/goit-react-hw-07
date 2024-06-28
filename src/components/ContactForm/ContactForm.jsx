import * as Yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps.js";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const action = addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    dispatch(action);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <label>Name</label>
        <Field type="text" name="name" className={s.input}></Field>
        <ErrorMessage name="name" component="span" className={s.error} />
        <label>Number</label>
        <Field type="text" name="number" className={s.input}></Field>
        <ErrorMessage name="number" component="span" className={s.error} />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
