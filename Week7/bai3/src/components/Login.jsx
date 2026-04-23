import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!username.trim()) return alert("Nhập username!");
    dispatch(login(username));
  };

  return (
    <div>
      <h3>Login</h3>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nhập username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;