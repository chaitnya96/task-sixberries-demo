import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function FormListing({ formList }) {
  return (
    <ListGroup className="my-2" as="ol" numbered>
      {formList.map((item) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          key={item.id}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Q. {item.question}</div>
            Type of question:{" "}
            {item.type === "SingleSelect" ? "Single Select" : item.type}
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
