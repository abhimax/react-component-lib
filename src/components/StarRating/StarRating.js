const StarRating = ({ rating }) => {
  return (
    <div class="star-ratings">
      <div class="fill-ratings" style={{ width: `${rating * 10}%` }}>
        <span>★★★★★★★★★★</span>
      </div>
      <div class="empty-ratings">
        <span>★★★★★★★★★★</span>
      </div>
    </div>
  );
};

export default StarRating;
