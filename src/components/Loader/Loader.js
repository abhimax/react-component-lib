import PropTypes from "prop-types";
const Loader = ({ size = "30px" }) => {
  return (
    <div className="loader-container" style={{ width: size, height: size }}>
      <div
        className="loader-circle"
        style={{ width: `calc(${size} - 6px)`, height: `calc(${size} - 6px)` }}
      ></div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
};
export default Loader;
