import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Row } from "react-bootstrap";

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
      <Row xs={1} md={2} className="g-4">
        {categories.map((category, idx) => (
          <CategoryCardComponent
            imgSrc="/images/games-category.png"
            label={category}
            key={idx}
            idx={idx}
          />
        ))}
      </Row>
    </>
  );
};

export default HomePage;
