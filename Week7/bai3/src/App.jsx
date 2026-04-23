import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={{ padding: 20 }}>
      <Header />

      {user ? (
        <UserInfo />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;