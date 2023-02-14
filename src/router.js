import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Forms from "./components/Forms";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ViewForm from "./components/ViewForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "forms/:id",
        element: <ViewForm />,
      },
    ],
  },
]);
