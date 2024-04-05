import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {
  return (
    <div>
      <Card className="mx-3" style={{ width: "22rem" }}>
        <Card.Img
          height={400}
          variant="top"
          src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <div>{rating?.length} estrellas</div>
          <p>{pageCount} páginas</p>
        </Card.Body>
      </Card>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.array,
  imageUrl: PropTypes.string,
};

export default BookItem;
