import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const firebase = require("firebase");
require("firebase/functions");

const MakeAdminForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const functions = firebase.functions();
    const addAdminRole = functions.httpsCallable("addAdminRole");
    addAdminRole(email).then((res) => {
      const message = res.data.message;
      setMessage(message);
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicPassword">
          <h2>Make Admin</h2>
          <Form.Control
            type="email"
            placeholder="Enter E-mail to grant admin privileges"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Make Admin
        </Button>
        {message ? <div>{message}</div> : null}
      </Form>
    </div>
  );
};

export default MakeAdminForm;
