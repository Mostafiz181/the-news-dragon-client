import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInSights from "../EditorsInSights/EditorsInSights";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  return (
    <div>
      <Card className="mt-4">
        <Card.Img className="px-3 py-3" variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>{details}</p>
          </Card.Text>
          <Link to={`/category/${category_id}`}>
            {" "}
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft> All News In This Category
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <EditorsInSights></EditorsInSights>
    </div>
  );
};

export default News;
