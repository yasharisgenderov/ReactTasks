import React from "react";
import "./UserForm.css";

const UserForm = () => {
  return (
    <div>
      <form action="">
        <h2>Sign in</h2>
        <p>Email :</p>
        <input
          type="email"
          required pattern=".+@[a-z0-9.-]+.ru"
          title=".ru ile daxil edin"
        />
        <p>Password :</p>
        <input type="password" required minLength="8" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default UserForm;
