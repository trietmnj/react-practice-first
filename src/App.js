import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {

  const [userList, setUserList] = useState([]);

  // lift up data from AddUser
  const addUserHandler = (username, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: username, age: age, id:Math.random().toString() }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
