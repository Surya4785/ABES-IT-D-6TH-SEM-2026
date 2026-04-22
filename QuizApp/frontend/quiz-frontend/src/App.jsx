import { useEffect, useState } from "react";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/quizzes")
      .then((res) => res.json())
      .then((data) => setQuizzes(data));
  }, []);

  const handleAnswer = (option) => {
    if (option === quizzes[current].answer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  const progress =
    quizzes.length > 0 ? (current / quizzes.length) * 100 : 0;

  if (quizzes.length === 0) return <h2>Loading...</h2>;

  if (current >= quizzes.length) {
    return (
      <div className="container">
        <h2>🎉 Quiz Completed</h2>
        <h3>Score: {score}/{quizzes.length}</h3>

        <div className="progress-bar">
          <div className="progress" style={{ width: "100%" }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Quiz App</h2>

      <div className="progress-bar">
        <div style={{ width: `${progress}%` }} className="progress"></div>
      </div>

      <h3>{quizzes[current].question}</h3>

      {quizzes[current].options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default App;