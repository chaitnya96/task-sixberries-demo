import React from "react";

import Form from "react-bootstrap/Form";
export default function Question({ questionData, handleChange }) {
  return (
    questionData && (
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-bold">Q. {questionData.question}</Form.Label>
        {questionData.type === "Multichoice" ? (
          questionData.options.map((item) => (
            <Form.Check
              id={item}
              type="checkbox"
              label={item}
              onChange={(e) => {
                handleChange({
                  [`${questionData.id}-${item}`]: e.target.checked,
                });
              }}
            />
          ))
        ) : questionData.type === "SingleSelect" ? (
          questionData.options.map((item,index) => (
            <Form.Check
              id={item}
              name={`radio-${questionData.id}`}
              type="radio"
              label={item}
              onChange={(e) =>
                handleChange({
                  [`radio-${questionData.id}`]: index,
                })
              }
            />
          ))
        ) : (
          <Form.Control
            onChange={(e) =>
              handleChange({
                [`text-${questionData.id}`]: e.target.checked,
              })
            }
            type="text"
            placeholder=""
            name="question"
          />
        )}
      </Form.Group>
    )
  );
}
