import React from "react";
export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.username)) {
    errors.username = "Username is invalid";
  } else if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}

export default function Form() {
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});

  const handleInputChange = function (e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(e.target.name)
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label form="username">Username:</label>
      <input
        className={errors.username && "danger"}
        type="text"
        name="username"
        value={input["username"]}
        onChange={handleInputChange}
      />
      {errors.username && <p className="danger">{errors.username}</p>}
      <label>Password:</label>
      <input
        className={errors.password && "danger"}
        type="password"
        name="password"
        value={input["password"]}
        onChange={handleInputChange}
      />
       {errors.password && <p className="danger">{errors.password}</p>}

      <input type="submit" />
    </form>
  );
}
