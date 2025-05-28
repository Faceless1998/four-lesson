import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({
    email:"",
    password:""
  })

   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:5000/api/users/login", form);
      alert("Welcome " + res.data.name);
    }catch(err){
      alert(err.response.data.message);
    }
  }
  return (
    <>

    </>
  );
}
