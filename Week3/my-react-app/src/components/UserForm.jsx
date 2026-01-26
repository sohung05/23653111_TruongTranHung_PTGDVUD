import { useState } from "react";

export default function UserForm() {
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
    console.log("User info:", user);
    alert(JSON.stringify(user, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Thông tin người dùng</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

const styles = {
  form: {
    width: "300px",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
};
