import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./ContactForm.module.css";
import { v4 as generatedId } from "uuid";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice.js";
import { useDispatch } from "react-redux";

const FeedbackSchema = Yup.object().shape({
  id: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const addNewContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleSubmit = (value, actions) => {
    addNewContact({
      id: generatedId(),
      name: value.name,
      number: value.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id: generatedId(),
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <div className={styles.container}>
        <Form className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <Field
            className={styles.field}
            id="name"
            type="text"
            name="name"
          ></Field>
          <ErrorMessage component="span" className={styles.error} name="name" />
          <label className={styles.label} htmlFor="number">
            Number
          </label>
          <Field
            className={styles.field}
            id="number"
            type="text"
            name="number"
          ></Field>
          <ErrorMessage
            component="span"
            className={styles.error}
            name="number"
          />
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
