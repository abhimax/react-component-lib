import PropTypes from "prop-types";
const Input = ({ value, label, name, placeholder, type, onChange }) => (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
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
    type: 'text'
  };
  export default Input;