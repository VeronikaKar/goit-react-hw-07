import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import toast, { Toaster } from "react-hot-toast";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
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
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    try {
      dispatch(addContact(values));
      actions.resetForm();
      toast.success("Contact added successfully!");
    } catch (error) {
      toast.error("Failed to add contact.");
    }
  };

  return (
    <div>
      <Toaster />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={s.input} />
          <ErrorMessage name="name" component="span" className={s.error} />
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={s.input}
          />
          <ErrorMessage name="number" component="span" className={s.error} />
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
