import PropTypes from "prop-types";
import classes from "classnames";

const Input = ({ value, label, name, placeholder, type, size, onChange }) => (
    <div className={classes('form-group',type,size)}>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
  Input.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
  };
  Input.defaultProps = {
    placeholder: 'Please enter value',
    type: 'text',
    size: 'medium'
  };
  export default Input;