import { useState, useEffect } from "react";
import data from "../../tempData/data";

function Questions() {
  const [checked, setChecked] = useState(false);

  const question = data[0];

  useEffect(() => {
    console.log(question);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSelect = () => {
    setChecked(!checked);
  };

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((el, idx) => {
          return (
            <li key={idx}>
              <input
                type="radio"
                value={checked}
                name={`q${idx}-option`}
                id="q1-option"
                onClick={onSelect}
              />

              <label htmlFor={`q${idx}-option`} className="text-primary">
                {el}
              </label>
              <div className={`check ${checked ? "checked" : ""}`}></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Questions;
