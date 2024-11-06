import "./myButton.css";

const handleDefaultClick = () => {
  console.log("default click!");
  
} 

function MyButton({ func = handleDefaultClick, myType, text, className={className}}) {
  return (
    <button type={myType} onClick={func} className="my-button">
      {text}
    </button>
  );
}

export default MyButton;
