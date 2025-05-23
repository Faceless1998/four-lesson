import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    mail: "",
    year: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        form
      );
      alert("registered:", res.data.name);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="surname"
          placeholder="Enter Surname"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="mail"
          placeholder="Enter Email"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Enter Age"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          required
          onChange={handleChange}
        />
        <button type="submit"> Register </button>
      </form>
    </>
  );
}
