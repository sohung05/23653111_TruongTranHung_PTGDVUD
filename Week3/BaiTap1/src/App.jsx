import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info:", user);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Name</label><br />
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Email</label><br />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Age</label><br />
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
