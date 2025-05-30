import { useState } from "react";
import axios from "axios";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/forget-password",
        { mail: email }
      );
      alert("Your password is sent to your mail", res);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>forgot password?</h2>
        <input
          type="email"
          placeholder="enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
