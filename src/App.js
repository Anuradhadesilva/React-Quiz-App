import React, { useState } from "react";
import { Button } from "@mui/material";
import "./App.css";
function App() {
  const questions = [
    {
      questiontitle: "Who is the 2021 ballondor winner",
      answerOptions: [
        { id: 1, answerText: "Messi", isCorrect: true },
        { id: 2, answerText: "Benzema", isCorrect: false },
        { id: 3, answerText: "Ronaldo", isCorrect: false },
        { id: 4, answerText: "Lewandoski", isCorrect: false },
      ],
    },
    {
      questiontitle: "Whoo is the CEO of TESLA",
      answerOptions: [
        { id: 1, answerText: "Jeff Benzos", isCorrect: false },
        { id: 2, answerText: "bill Gates", isCorrect: false },
        { id: 3, answerText: "Mark Zuckerberg", isCorrect: false },
        { id: 4, answerText: "Elon Mask", isCorrect: true },
      ],
    },
    {
      questiontitle: "What the is Highest grossing movie in India Cinema" ,
      answerOptions: [
        { id: 1, answerText: "RRR", isCorrect: false },
        { id: 2, answerText: "Bhahubali", isCorrect: false },
        { id: 3, answerText: "Dangal", isCorrect: true },
        { id: 4, answerText: "KGF", isCorrect: false},
      ],
    },
    {
      questiontitle: "Who is the 2022 ballondor winner",
      answerOptions: [
        { id: 1, answerText: "Messi", isCorrect: false },
        { id: 2, answerText: "Benzema", isCorrect: true },
        { id: 3, answerText: "Ronaldo", isCorrect: false },
        { id: 4, answerText: "Lewandoski", isCorrect: false },
      ],
    },
  ];
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [checkEnd, setCheckEnd] = useState(false);
  const handleQuizNumber = (isCorrect) => {
    console.log(isCorrect);
    const quizNo = currentQuiz + 1;
    if (isCorrect === true) {
      setScore(score + 1);
      alert("Your answer is correct!!");
    } else {
      alert("Incorrect answer!!");
    }

    if (quizNo < questions.length) {
      setCurrentQuiz(quizNo);
    } else {
      alert("You have answer all questions");
      setCheckEnd(true);
    }
  };
  return (
    <div className="App">
      {checkEnd ? (
        <div className="mark-section">Your total mark is {score}</div>
      ) : (
        <div>
          <div className="quiz-section">
            <h1>Total Mark: {score}/{questions.length}</h1>
            {<h3>{questions[currentQuiz].questiontitle}</h3>}
          </div>
          <div className="Answer-section">
            {questions[currentQuiz].answerOptions.map((question) => (
              <button
                onClick={() => handleQuizNumber(question.isCorrect)}
                key={question.id}
              >
                {question.answerText}
              </button>
              // <Button
              //   variant="contained"
              //   className="btn-answer"
              //   onClick={handleQuizNumber}
              // >
              //   {question.answerText}
              // </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
