import "./Button.css";

function Button({ type = "primary", children }) {
  return (
    <button className={`btn btn-${type}`}>
      {children}
    </button>
  );
}

export default Button;
