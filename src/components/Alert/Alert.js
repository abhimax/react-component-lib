import classes from "classnames";
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Cross from "../Icon/Cross";
import Button from "../Button/Button";

const Alert = ({ children, type, message, closeAlert }) => {
  const [isShow, setIsShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    isShow && (
      <div className={classes("alert", type)}>
        {children ? renderElAlert() : message}
        <Button
          className="close-btn"
          icon={<Cross size={15} color="white" />}
          onClick={closeAlert}
        />
      </div>
    )
  );
};
Alert.propTypes = {
  type: PropTypes.oneOf(["error", "success", "warning", "info"]),
  message: PropTypes.string,
  closeAlert: PropTypes.func,
};
Alert.defaultProps = {
  type: "error",
  message: "Something is went wrong!",
};
export default Alert;
