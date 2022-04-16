import React from "react";

export const TriviaPage = () => {

    const questions = [...question.incorrect_answers, question.correct_answer];
    const usedIndex = [];
    let randomIndex = getRandomIndex(questions.length);

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
                        questions.map( (currElement) => {
                            randomIndex = getRandomIndex(questions.length);
                            while( usedIndex.includes(randomIndex)){
                                randomIndex = getRandomIndex(questions.length);
                            }
                            usedIndex.push(randomIndex);
                            return <button className="btn btn-secondary btn-lg"
                                    key={randomIndex + 'q-btn'}>
                                        {questions[randomIndex]}
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
const question =     {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Who was the voice actor for Snake in Metal Gear Solid V: The Phantom Pain?",
    "correct_answer": "Kiefer Sutherland",
    "incorrect_answers": [
      "David Hayter",
      "Norman Reedus",
      "Hideo Kojima"
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