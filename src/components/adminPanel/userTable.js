import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

const firebase = require("firebase");
require("firebase/functions");
const functions = firebase.functions();

const UserTable = ({ users }) => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="status-message">
        <div>{message ? <div>{message}</div> : null}</div>
      </div>
      {users ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Display Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr key={user.email}>
                    <td>{users.indexOf(user) + 1}</td>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="actions">
                        <Button
                          onClick={() => {
                            const deleteUser = functions.httpsCallable(
                              "deleteUser"
                            );
                            deleteUser(user.uid).then((res) => {
                              setMessage(
                                ` User ${user.displayName} was ${res.data.message}`
                              );
                            });
                          }}
                          variant="danger"
                        >
                          Delete User
                        </Button>
                        <Button
                          onClick={() => {
                            const unblockUser = functions.httpsCallable(
                              "unblockUser"
                            );
                            unblockUser(user.uid).then((res) => {
                              setMessage(
                                ` User ${user.displayName} was ${res.data.message}`
                              );
                            });
                          }}
                          variant="success"
                        >
                          UnBlock User
                        </Button>
                        <Button
                          onClick={() => {
                            const blockUser = functions.httpsCallable(
                              "blockUser"
                            );
                            blockUser(user.uid).then((res) => {
                              setMessage(
                                ` User ${user.displayName} was ${res.data.message}`
                              );
                            });
                          }}
                          variant="warning"
                        >
                          Block User
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      ) : null}
    </div>
  );
};

export default UserTable;
