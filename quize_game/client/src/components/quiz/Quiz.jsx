import Questions from "../quizQuestions/Questions";

function Quiz() {
  const onNext = () => {
    alert("Next");
  };

  const onPrev = () => {
    alert("Prev");
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Previous
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
