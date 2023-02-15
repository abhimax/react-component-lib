import PropTypes from "prop-types";
const Cross = ({ size, color }) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 13.496 11.21"
    //   width={size}
    //   height={size}
    //   fill={color}
    // >
    //   <g
    //     id="Arrow_Icon"
    //     data-name="Arrow Icon"
    //     transform="translate(0 -41.674)"
    //   >
    //     <g id="Group_7" data-name="Group 7" transform="translate(0 41.674)">
    //       <path
    //         id="Path_21"
    //         data-name="Path 21"
    //         d="M12.737,46.22l.021,0H3.727L6.566,43.38a.746.746,0,0,0,0-1.048l-.442-.442a.739.739,0,0,0-1.043,0L.215,46.755a.744.744,0,0,0,0,1.047l4.867,4.867a.74.74,0,0,0,1.043,0l.442-.442a.731.731,0,0,0,.215-.521.709.709,0,0,0-.215-.512L3.7,48.332h9.052a.765.765,0,0,0,.749-.757V46.95A.75.75,0,0,0,12.737,46.22Z"
    //         transform="translate(0 -41.674)"
    //       />
    //     </g>
    //   </g>
    // </svg>
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 94.926 94.926"
    >
      <g
        id="Arrow_Icon"
        data-name="Arrow Icon"
      >
        <path
          d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
     c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
     c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
     c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
     s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
        />
      </g>
    </svg>
  );
};

Cross.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Cross.defaultProps = {
  color: getComputedStyle(document.documentElement).getPropertyValue('--color-primary'),
  size: 24,
};

export default Cross;