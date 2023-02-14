import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import { FieldArray, FormikProvider, useFormik } from "formik";
import * as yup from "yup";

export default function CreateForm({ show, setShow, form, setForm }) {
  const formik = useFormik({
    initialValues: {
      question: "",
      type: "Text",
      options: [],
      totalResponse: 0,
    },
    validationSchema: yup.object({}),
    onSubmit: (values, { resetForm }) => {
      let forms = form;
      forms = [...forms, values];
      forms = forms.map((item, index) => ({ ...item, id: index + 1 }));
      setForm(forms);
      setShow(false);
      resetForm();
    },
  });
  const { handleBlur, handleChange, handleSubmit, values } = formik;
  const onHide = () => setShow(false);
  return (
    <FormikProvider value={formik}>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Question / Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Question / Title"
                name="question"
                value={values.question}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Answer Type</Form.Label>
              <Form.Select
                value={values.type}
                size="sm"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="Text">Text</option>
                <option value="Multichoice">Multichoice</option>
                <option value="SingleSelect">Single Select</option>
              </Form.Select>
            </Form.Group>
            {(values.type === "Multichoice" ||
              values.type === "SingleSelect") && (
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>options to choose</Form.Label>
                <FieldArray
                  name="options"
                  render={(arrayHelpers) => (
                    <div>
                      {values.options?.map((friend, index) => (
                        <Stack direction="horizontal" className="mb-2" gap={3}>
                          {/* <div className="d-flex mb-2 " key={index}> */}
                          <Form.Control
                            type="text"
                            as="textarea"
                            placeholder="Enter option"
                            name={`options.${index}`}
                            value={values.options[index]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <Button
                            variant="secondary"
                            type="button"
                            onClick={() =>
                              formik.setFieldValue(
                                "options",
                                values.options.filter((_, i) => i !== index)
                              )
                            } // remove a friend from the list
                          >
                            Remove
                          </Button>
                          {/* </div> */}
                        </Stack>
                      ))}
                      <Button
                        variant="secondary"
                        type="button"
                        onClick={() =>
                          formik.setFieldValue("options", [
                            ...values.options,
                            "",
                          ])
                        } // insert an empty string at a position
                      >
                        Add new option
                      </Button>
                    </div>
                  )}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </FormikProvider>
  );
}
