import React from "react";
import first from "../../assets/1.png";
import second from "../../assets/2.png";
import third from "../../assets/3.png";
import { Button, Card, Col, Row } from "react-bootstrap";

const LeftCategory = () => {
  return (
    <div>
      <Row xs={1} md={2} lg={1} className="g-4 mt-4">
        <Col>
          <Card className="mt-2">
            <Card.Img className="px-2 py-2" variant="top" src={first} />
            <Card.Body>
              
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>

          <Card className="mt-2">
            <Card.Img className="px-2 py-2" variant="top" src={second} />
            <Card.Body>
              
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>

          <Card className="mt-2">
            <Card.Img className="px-2 py-2" variant="top" src={third} />
            <Card.Body>
              
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LeftCategory;
