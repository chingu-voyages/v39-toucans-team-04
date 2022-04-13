import React from "react";

export const TriviaPage = () => {

    const questions = [...question.incorrect_answers, question.correct_answer];
    const usedIndex = [];
    let randomIndex = getRandomIndex(questions.length);
    console.log(questions)

    return (
        <div className="trivia-page">
            <span className="nav-heading">Quizico</span>

            <div className="content-container">
                <div className="question-container">
                    <span>
                        { question.question }
                    </span>
                </div>
                <div className="button-container">
                    {
                        questions.map( (currElement, index, array) => {
                            randomIndex = getRandomIndex(questions.length);
                            return <button className="btn btn-primary btn-lg">
                            {array[randomIndex]}
                            </button>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
}

// dummy data
const question = {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What does CPU stand for?",
    "correct_answer": "Central Processing Unit",
    "incorrect_answers": [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit"
    ]
}

// 10 questions, science, computers, easy, multiple choice

// https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple

/*

results = [
    {
        question
        correct_answer
        incorrect_answers
    },
    ...
]

*/