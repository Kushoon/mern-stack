import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = () => {
  const cursorPointer = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Best seller in laptops category</h3>
          </LinkContainer>
          <p>Dell Inspiron 15 3000 Laptop</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
          style={{ height: "300px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Best seller in books category</h3>
          </LinkContainer>
          <p>Books</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
          style={{ height: "300px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Best seller in cameras category</h3>
          </LinkContainer>
          <p>Cameras</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
