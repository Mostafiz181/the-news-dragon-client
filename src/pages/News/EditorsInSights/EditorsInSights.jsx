import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import img1 from "../../../assets/editorsInsight1.png"
import img2 from "../../../assets/editorsInsight2.png"
import img3 from "../../../assets/editorsInsight3.png"
import News from "../News/News";
import { useLoaderData } from "react-router-dom";

const EditorsInSights = () => {
    const news = useLoaderData()
    const { _id, title, details, image_url, category_id } = news;
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        <Col >
          <Card>
            <Card.Img className="px-2 py-2" variant="top" src={img1} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Img className="px-2 py-2" variant="top" src={img2} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Img className="px-2 py-2" variant="top" src={img3} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInSights;
