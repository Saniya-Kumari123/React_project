import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({
  imgSrc,
  title,
  originalPrice,
  discountedPrice,
  available,
  rating,
  combo,
}) => {
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between p-3">
        <Card.Text className="lead mb-0">Today's Combo Offer</Card.Text>
        <div
          className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
          style={{ width: "35px", height: "35px" }}
        >
          <Card.Text className="text-white mb-0 small">x{combo}</Card.Text>
        </div>
      </Card.Header>
      <Card.Img variant="top" src={imgSrc} alt={title} />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Text className="small">
            <a href="#!" className="text-muted">
              Laptops
            </a>
          </Card.Text>
          <Card.Text className="small text-danger">
            <s>${originalPrice}</s>
          </Card.Text>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <Card.Title className="mb-0">{title}</Card.Title>
          <Card.Title className="text-dark mb-0">${discountedPrice}</Card.Title>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <Card.Text className="text-muted mb-0">
            Available: <span className="fw-bold">{available}</span>
          </Card.Text>
          <div className="ms-auto text-warning">
            {Array.from({ length: 5 }, (_, index) => (
              <i
                key={index}
                className={index < rating ? "fa fa-star" : "far fa-star"}
              ></i>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
