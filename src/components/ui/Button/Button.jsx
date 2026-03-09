import './Button.css';

function Button({ children, onClick, variant = "primary" }) {
  return (
    <button
      className={`button button__${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;