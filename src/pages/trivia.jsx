import React, { useState, useEffect } from "react";
import { Modal } from "./endModal";
import next from '../assets/images/right.png';

export const TriviaPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const answers = [...qData[currentQuestion].incorrect_answers,
                    qData[currentQuestion].correct_answer];
    const usedIndex = [];
    let randomIndex = getRandomIndex(answers.length);

    const handleNext = () => {
        if(currentQuestion === qData.length - 1) return;
        setCurrentQuestion(currentQuestion + 1);
    }

    // handle when user answers a question
    const handleAnswer = (event) => {
        const modal = document.getElementById('modelo');
        const selectedBtn = event.target;
        const selectedAnswer = event.target.innerText;
        const answer = qData[currentQuestion].correct_answer;

        if(selectedAnswer === answer){
          setScore(score + 10);
          selectedBtn.classList.add('btn-success');
        }
        else selectedBtn.classList.add('btn-danger');

        setTimeout( () => {
          selectedBtn.classList.remove('btn-success');
          selectedBtn.classList.remove('btn-danger');
          if(currentQuestion === qData.length - 1){
            modal.style.visibility = "visible"
            return
          }
          setCurrentQuestion(currentQuestion + 1)
        }, 2000);
    }

    return (
        <div className="trivia-page">
            <span className="nav-heading">Quizico</span>
            <Modal score={score} />
            <div className="content-container">
                
                <div className="info-text">
                  <span className="user-score">Score: {score}</span>
                  <span>{currentQuestion + 1}/10</span>
                </div>

                <div className="question-container">
                    <span>
                        { qData[currentQuestion].question }
                    </span>
                </div>

                <div className="bottom-wrapper">
                    <div className="meme-wrapper">
                        <img src="https://memegenerator.net/img/instances/75222412/did-you-say-trivia-night.jpg" alt="random meme"/>
                    </div>
                    <div className="button-container">
                        {
                            answers.map( (currElement) => {
                                randomIndex = getRandomIndex(answers.length);
                                while( usedIndex.includes(randomIndex)){
                                    randomIndex = getRandomIndex(answers.length);
                                }
                                usedIndex.push(randomIndex);
                                return <button className="btn btn-lg"
                                        key={randomIndex + 'q-btn'}
                                        onClick={ (event) => handleAnswer(event) }>
                                            {answers[randomIndex]}
                                        </button>
                            })
                        }
                    </div>
                </div>

                <div className="question-nav-btns">
                        <div className="next-wrapper"
                            onClick={ handleNext }>
                            <img className="arrow" src={next} alt="next question" />
                        </div>
                </div>
            </div>
        </div>
    );
}

const getRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
}

// dummy data
const question =    {
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

const qData = [
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Pok&eacute;mon Go is a location-based augmented reality game developed and published by which company?",
      "correct_answer": "Niantic",
      "incorrect_answers": [
        "Rovio",
        "Zynga",
        "Supercell"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "&quot;Tomb Raider&quot; icon Lara Croft was originally called...",
      "correct_answer": "Laura Cruz",
      "incorrect_answers": [
        "Laura Craft",
        "Laura Croft",
        "Lara Craft"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is Gabe Newell&#039;s favorite class in Team Fortress 2?",
      "correct_answer": "Spy",
      "incorrect_answers": [
        "Heavy",
        "Medic",
        "Pyro"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What was the original name of Crash Bandicoot?",
      "correct_answer": "Willie Wombat",
      "incorrect_answers": [
        "Coco Bandicoot",
        "Marvelous Mole",
        "Wally Wombat"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In PROTOTYPE 2. who is referred to as &quot;Tango Primary&quot;?",
      "correct_answer": "James Heller",
      "incorrect_answers": [
        "Alex Mercer",
        "Dana Mercer",
        "Any Goliaths roaming around"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of the following was NOT a playable character in the game Kingdom Hearts: Birth by Sleep?",
      "correct_answer": "Ignis",
      "incorrect_answers": [
        "Ventus",
        "Terra",
        "Aqua"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In Minecraft, which two items must be combined to craft a torch?",
      "correct_answer": "Stick and Coal",
      "incorrect_answers": [
        "Stick and Fire",
        "Wood and Coal",
        "Wood and Fire"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In the Super Smash Bros. series, which character was the first one to return to the series after being absent from a previous game?",
      "correct_answer": "Dr. Mario",
      "incorrect_answers": [
        "Mewtwo",
        "Lucas",
        "Roy"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of the following is not a character in the video game Doki Doki Literature Club?",
      "correct_answer": "Nico",
      "incorrect_answers": [
        "Monika",
        "Natsuki",
        "Sayori"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What was the name of the canceled projected by Blizzard Entertainment that would be later become Overwatch?",
      "correct_answer": "Titan",
      "incorrect_answers": [
        "Omnic",
        "Omega",
        "Ghost"
      ]
    }
]