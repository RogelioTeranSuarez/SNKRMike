import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Toast } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Context } from "../Context";

function Login() {
  const { token, setGlobalToken, setGlobalRol_id } = useContext(Context);

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    e.persist();
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValue.email || !formValue.password) {
      setToastMessage('Email and password are required.');
      setShowToast(true);
      console.log('Both email and password are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]/;
    if (!emailRegex.test(formValue.email)) {
      setToastMessage('Invalid email format.');
      setShowToast(true);
      console.log('Invalid email format.');
      return;
    }

    if (formValue.password.length < 4) {
      setToastMessage('You should introduce your password.');
      setShowToast(true);
      console.log('You should introduce your password.');
      return;
    }

    const formData = new FormData();
    formData.append("email", formValue.email);
    formData.append("password", formValue.password);

    axios.post("http://localhost/Merge/public/api/login",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json'
        }
      }
    ).then(response => {
      console.log(response);
      console.log("Rol_id: ", response.data.rol_id);
      console.log(response.data.token);

      setGlobalToken(response.data.token);
      setGlobalRol_id(response.data.rol_id);

      const rol_id = response.data.rol_id;
      if (rol_id === 1) {
        navigate("/Merge/public/App");
      } else if (rol_id === 2) {
        navigate("/Merge/public/App");
      }
    }).catch(error => {
      console.log(error);
    });
  };
  const closeToast = () => {
    setShowToast(false);
  };


  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://cdn.dribbble.com/users/2526200/screenshots/10830535/media/4717f469b1da0ca5ad23ef899ec72280.png"
            alt=""
          />
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200" controlId="formBasicCheckbox">
            <Form.Label>Welcome Back</Form.Label>
          </Form.Group>

          <Form.Group className="mt-1 text-center text-gray-500 dark:text-gray-400" controlId="formBasicCheckbox">
            <Form.Label> <h3>Please Login</h3> </Form.Label>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control className="block w-full px-4 py-2 mt-2 text-gray-100 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Enter email" name="email" value={formValue.email} onChange={onChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Control className="block w-full px-4 py-2 mt-2 text-gray-100 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" name="password" value={formValue.password} onChange={onChange} />
          </Form.Group>
          <br />
          <Button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" type="submit">
            Log in
          </Button>
          <br /><br />
        </Form>

      </div>
    </div>
  );
};

export default Login;
