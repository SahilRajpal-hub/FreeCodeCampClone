import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const SigninScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const redirect = location.search ? location.search.split('=')[1] : '/course'

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null;
    if(userInfoFromStorage){
        setName(userInfoFromStorage.name);
        setLoggedIn(true);
        history.push(redirect);
    }
  })

  const submitHandler = async (e) => {
    console.log(email);
    console.log(name);
    console.log(password);
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/users/",
        { name, email, password },
        config
      );
      setError('');
      console.log(data)
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.psuh(redirect);

    } catch (error) {
       const err = error.response && error.response.data.message
       ? error.response.data.message
       : error.message; 
       setError(err);
      console.log(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setName('');
    setLoggedIn(false);
  }

  return (
    loggedIn ? <><h1>Hi {name}</h1>
        <Button variant="primary" onClick={() => logoutHandler()}>
          Logout
        </Button>
    </> : 
    <div>
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default SigninScreen;
