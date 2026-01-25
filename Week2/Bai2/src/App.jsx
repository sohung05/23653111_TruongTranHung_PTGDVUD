import Button from "./components/Button/Button.jsx";

function App() {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
    </div>
  );
}

export default App;
