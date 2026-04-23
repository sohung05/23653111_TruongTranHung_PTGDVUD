import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

function UserInfo() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (!user) return <p>Chưa đăng nhập</p>;

  return (
    <div>
      <h3>User Info</h3>
      <p>Xin chào: {user.username}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default UserInfo;