import PropTypes from "prop-types";
const StarFilled = ({ size, color, fillPercentage }) => {
  // console.log(Number(fillPercentage));
  // const fill = `${Number(fillPercentage)}0%`;
  console.log(fillPercentage);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 12"
        width={size}
        height={size}
        fill={color}
      >
        <mask id="half">
          <rect x="0" y="0" width="32" height={size} fill="white" />
          <rect
            //x={`${5}0%`}
            x={fillPercentage * 10 + "%"}
            y="0"
            width={size}
            height={size}
            fill="gray"
          />
        </mask>
        {/* <mask id="half">
        <rect x="0" y="0" width="32" height="32" fill="white" />
        <rect x="50%" y="0" width="32" height="32" fill="grey" />
      </mask> */}
        <path
          mask="url(#half)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.53635 9.24591L2.75407 11.7586L3.95103 7.34853L0.416503 4.49139L4.93853 4.27851L6.53635 0L8.13416 4.27851L12.6562 4.49139L9.12166 7.34853L10.3186 11.7586L6.53635 9.24591Z"
          fill={color}
        />
      </svg>
      <span>{fillPercentage * 10 + "%"}</span>
    </>
  );
};

StarFilled.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  fillPercentage: PropTypes.number,
};

StarFilled.defaultProps = {
  color: getComputedStyle(document.documentElement).getPropertyValue(
    "--color-warning"
  ),
  size: 24,
  fillPercentage: 10,
};

export default StarFilled;
