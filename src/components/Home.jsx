import moment from "moment";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CreateForm from "./CreateForm";
import FormListing from "./FormListing";

export default function Home() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState([]);
  const [title, setTitle] = useState("");
  const handleSubmit = () => {
    const payload = {
      title,
      formList: form,
      totalResponse: 0,
      responses: [],
      createdAt: moment().toDate(),
    };
    let forms = localStorage.getItem("forms");
    if (forms) {
      forms = JSON.parse(forms);
      forms = [...forms, payload];
    } else {
      forms = [payload];
    }
    forms = forms.map((item, index) => ({ ...item, id: index + 1 }));
    localStorage.setItem("forms", JSON.stringify(forms));
    setTitle("");
    setForm([]);
  };
  return (
    <>
      <Form className="d-flex justify-content-between align-items-start">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Form Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Form Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button size="sm" onClick={() => setShow(true)}>
        Add Question
      </Button>
      <FormListing formList={form} />
      <CreateForm {...{ form, setForm, show, setShow }} />

      {!!form.length && <Button onClick={handleSubmit}>Submit Form</Button>}
    </>
  );
}
