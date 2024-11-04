

import "./myButton.css";

function MyButton({ type, text }) {
  return (
    <button type={type}>
      {text}
    </button>
  );
}

export default MyButton;
