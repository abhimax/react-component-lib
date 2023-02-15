import PropTypes from "prop-types";
import classes from "classnames";

const Textarea = ({ value, label, name, placeholder, size, error, onChange, disabled, ...props }) => (
    <div className={classes('form-group',size,{'error':error})}>
      {label && <label htmlFor="input-field">{label}</label>}
      <textarea
        value={value}
        name={name}
        className="form-input"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      { error && <p className="input-error">{error}</p>}
    </div>
  );
  Textarea.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
  };
  Textarea.defaultProps = {
    placeholder: 'Please enter value',
    size: 'medium',
    disabled: false,
  };
  export default Textarea;