import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Cameras",
    "Books",
    "Videos",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={3} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <CategoryCardComponent
              imgSrc="/images/games-category.png"
              label={category}
              key={idx}
              idx={idx}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
