import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// example of bootstrap grid
type Props = {};

const Detail: React.FC<Props> = () => (
  <Container className="mt-4">
    <Row className="bg-primary">
      <Col sm={8}>sm=8</Col>
      <Col sm={4}>sm=4</Col>
    </Row>
    <Row>
      <Col sm className="bg-success">
        sm=true
      </Col>
      <Col sm className="bg-info">
        sm=true
      </Col>
      <Col sm className="bg-warning">
        sm=true
      </Col>
    </Row>
  </Container>
);
export default Detail;
