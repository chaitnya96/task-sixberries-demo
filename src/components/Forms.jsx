import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function Forms() {
  const [formList, setFormList] = useState([]);
  useEffect(() => {
    const forms = localStorage.getItem("forms");
    if (forms) {
      setFormList(JSON.parse(forms));
    }
  }, []);

  return (
    <ListGroup as="ol" numbered>
      {formList.map((item) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          key={item.id}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.title}</div>
            <div>created At : {moment(item.createdAt).format("lll")}</div>
            Total number of question:{" "}
            {item.formList.length}
            <div>
              <Button size="sm" as={Link} to={`/forms/${item.id}`}>
                Add Response
              </Button>
            </div>
          </div>
          <Badge bg="primary" pill>
            {item.totalResponse}
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
