import styles from "./ErrorMessage.module.css";
import { useSelector } from "react-redux";

const ErrorMessage = () => {
  const error = useSelector((state) => state.contacts.error);
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
