import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  
  const idFilter = nanoid();
  return (
    <div>
      <label htmlFor={idFilter} className={css.labelFilter}>Find contacts by name
        <br/>
        <input
          type="text"
          value={value}
          onChange={onChange}
          id={idFilter}
          className={css.inputFilter} />
      </label>
    </div>
  )
}

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Filter;