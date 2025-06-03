import styles from "./ErrorMessage.module.css";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/contactsSlice.js";

const ErrorMessage = () => {
  const error = useSelector(selectError);

  // const errorMessage = useSelector(
  //   (state) => state.contacts.payload.error.message
  // );

  return (
    <div className={styles.errorWrapper}>
      <p className={styles.errorMessage}>{error}</p>
    </div>
  );
};

export default ErrorMessage;
