const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const quizzes = [
  { id: 1, question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { id: 2, question: "Capital of India?", options: ["Delhi", "Mumbai", "Chennai"], answer: "Delhi" },
  { id: 3, question: "React is a?", options: ["Library", "Language", "Database"], answer: "Library" },
  { id: 4, question: "Which language is used for web apps?", options: ["Python", "JavaScript", "C++"], answer: "JavaScript" },
  { id: 5, question: "Which company developed React?", options: ["Google", "Facebook", "Microsoft"], answer: "Facebook" },
  { id: 6, question: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language"], answer: "Hyper Text Markup Language" },
  { id: 7, question: "CSS is used for?", options: ["Styling", "Programming", "Database"], answer: "Styling" },
  { id: 8, question: "Node.js is?", options: ["Frontend", "Backend", "Database"], answer: "Backend" },
  { id: 9, question: "Which hook is used for state in React?", options: ["useEffect", "useState", "useRef"], answer: "useState" },
  { id: 10, question: "MongoDB is a?", options: ["Relational DB", "NoSQL DB", "Language"], answer: "NoSQL DB" }
];

app.get("/api/quizzes", (req, res) => {
  res.json(quizzes);
});

app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});