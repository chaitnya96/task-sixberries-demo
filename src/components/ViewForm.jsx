import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Question from "./Question";

export default function ViewForm() {
  const params = useParams();

  const [forms, setForms] = useState([]);
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    let forms = localStorage.getItem("forms");
    if (forms && params.id) {
      forms = JSON.parse(forms);
      setForms(forms);
      let data = forms.find((item) => item.id == params.id);
      if (data) {
        setFormData(data);
      }
    }
  }, []);

  return (
    <div>
      <h2>Form: {formData.title}</h2>
      <Form>
        {formData.formList?.map((item) => (
          <Question
            questionData={item}
            key={item.id}
            handleChange={(data) =>
              setResponse((prev) => ({ ...prev, ...data }))
            }
          />
        ))}
        <Button
          type="button"
          onClick={() => {
            const index = forms.findIndex((item) => item.id == params.id);
            let allForms = [...forms];
            allForms[index] = {
              ...allForms[index],
              totalResponse: parseInt(allForms[index].totalResponse) + 1,
              responses: [...allForms[index].responses, response],
            };
            localStorage.setItem("forms", JSON.stringify(allForms));
            navigate("/forms");
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
