import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";

const SearchBox = () => {
  const filterName = useSelector((state) => state.filters.name);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <label htmlFor="searchInput" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="searchInput"
        className={styles.input}
        type="text"
        value={filterName}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
