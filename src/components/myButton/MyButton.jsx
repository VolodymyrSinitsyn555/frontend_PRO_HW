

import "./myButton.css";

function MyButton({ myType, text }) {
  return (
    <button type={myType}>
      {text}
    </button>
  );
}

export default MyButton;
