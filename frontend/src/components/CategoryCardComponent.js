import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ imgSrc, label, idx }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img crossOrigin="anonymous" variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{label}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
