import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    // preventing default action unless explicitly handled
    // eg not checking check box
    event.preventDefault();
    if (
      // error handling
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1 // + coerces string into number
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    } else {
      props.onAddUser(enteredUsername, enteredAge); // lift up data to App
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  // reducer
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  // reducer
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = (event) => {
    setError(null);
  };

  return (
    // popup optional on error
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
