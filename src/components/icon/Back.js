import PropTypes from "prop-types";
import "./../../styles/variables.scss";
const Back = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.496 11.21"
      width={size}
      height={size}
      fill={color}
    >
      <g
        id="Arrow_Icon"
        data-name="Arrow Icon"
        transform="translate(0 -41.674)"
      >
        <g id="Group_7" data-name="Group 7" transform="translate(0 41.674)">
          <path
            id="Path_21"
            data-name="Path 21"
            d="M12.737,46.22l.021,0H3.727L6.566,43.38a.746.746,0,0,0,0-1.048l-.442-.442a.739.739,0,0,0-1.043,0L.215,46.755a.744.744,0,0,0,0,1.047l4.867,4.867a.74.74,0,0,0,1.043,0l.442-.442a.731.731,0,0,0,.215-.521.709.709,0,0,0-.215-.512L3.7,48.332h9.052a.765.765,0,0,0,.749-.757V46.95A.75.75,0,0,0,12.737,46.22Z"
            transform="translate(0 -41.674)"
          />
        </g>
      </g>
    </svg>
  );
};

Back.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Back.defaultProps = {
  //color: getComputedStyle(document.documentElement).getPropertyValue('--color-primary'),
  color: "#ff0000",
  size: 24,
};

export default Back;