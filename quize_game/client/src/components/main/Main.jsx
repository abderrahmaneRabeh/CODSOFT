import "./main.css";

import { useRef } from "react";
import { Link } from "react-router-dom";

function Main() {
  const inputRef = useRef(null);

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Game App </h1>

      <ol>
        <li>You will be 10 questions one by one</li>
        <li>10 points will be awarded for each correct answer</li>
        <li>Each question has 3 options, one is correct</li>
        <li>You can review and change your answer before submitting</li>
        <li>The result will be displayed at the end</li>
      </ol>

      <form action="" id="form">
        <input
          className="userid"
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"/quiz"}>
          Start Now
        </Link>
      </div>
    </div>
  );
}

export default Main;
