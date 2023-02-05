import PropTypes from "prop-types";
import classes from "classnames";
const Button = ({ label, icon, type, onClick, fitContent, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={classes('ui-button',type)}
    //   className={`${classes.button} ${
    //     darkMode ? classes.secondary : classes.primary
    //   } ${fitContent ? classes.full : null}`}
      {...props}
    >
      <label className="content-wrapper">
        {icon}
        {label}
      </label>
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
  darkMode: PropTypes.bool,
  fitContent: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  label: "",
  type: "primary",
  darkMode: false,
  fitContent: false,
};
export default Button;