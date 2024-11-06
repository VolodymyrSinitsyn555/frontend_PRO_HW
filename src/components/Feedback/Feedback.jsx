import "./feedback.css"
import { useState } from "react";
import MyButton from "../myButton/MyButton";

function Feedback() {
  const [like, setLike] = useState(0);
  const [disLike, setDislike] = useState(0);

  const handleLike = () => {
    setLike((like => like + 1));
  };
  const handleDislike = () => {
    setDislike((disLike => disLike + 1));
  };

  const handleReset = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="lesson-container">
        <div className="like-dislike-container">
            <span>{like}</span>
            <MyButton func={handleLike} text="Like" className="button" />
            <MyButton func={handleDislike} text="Dislike" className="button" />
            <span>{disLike}</span>
        </div>
        <div className="reset-container">
            <MyButton func={handleReset} text="Reset Result" className="button" />
        </div>
    </div>
);
}

export default Feedback;
