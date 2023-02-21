import PropTypes from "prop-types";
import classes from "classnames";
const Button = ({ label, icon, type, size, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={classes("ui-button", type, size)}
      {...props}
    >
      {(label || icon) && (
        <label className="content-wrapper">
          {icon}
          {label}
        </label>
      )}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  size: "medium",
  type: "primary",
};
export default Button;
