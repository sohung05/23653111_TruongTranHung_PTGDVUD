import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={{ borderBottom: "1px solid gray", marginBottom: 20 }}>
      <h2>My App</h2>
      {user && <span>{user.username}</span>}
    </div>
  );
}

export default Header;