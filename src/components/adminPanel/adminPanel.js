import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contexts/authContext";
import MakeAdminForm from "./makeAdminForm";
import UserTable from "./userTable";

const firebase = require("firebase");
require("firebase/functions");

const AdminPanel = () => {
  const { isAdmin } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  // Function to display all users
  const displayUsers = () => {
    const functions = firebase.functions();
    const userList = functions.httpsCallable("userList");
    userList().then((res) => {
      const message = res.data.message;
      setMessage(message);
      setUsers(res.data.users);
    });
  };

  return (
    <div>
      <Helmet>
        <title>Coders Gala - admin</title>
        <meta
          name="description"
          content="Coders Gala is a free platform to learn webdevelopment for free lancing"
        />
        <meta name="robots" content="noindex nofollow" />
      </Helmet>
      {isAdmin ? (
        <div className="adminpanel-container">
          <div className="make-admin-form">
            <MakeAdminForm />
          </div>

          <div className="users-table">
            <br />
            <Button variant="primary" onClick={displayUsers}>
              get users
            </Button>{" "}
            {message ? <div>{message}</div> : null}
            <br />
            <UserTable users={users} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdminPanel;
