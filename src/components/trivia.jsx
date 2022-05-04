import React, { useState, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from "./endModal";
import next from '../assets/images/right.png';

export const TriviaPage = () => {
    const category = useSelector( state => state.category.value);
    const difficulty = useSelector( state => state.difficulty.value);

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useLayoutEffect( () => {
      fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
        .then( results => results.json() )
        .then( data => setQuestions(data.results));
    }, [])

    const answers = [...questions[currentQuestion].incorrect_answers,
                    questions[currentQuestion].correct_answer];
    const usedIndex = [];
    let randomIndex = getRandomIndex(answers.length);

    const handleNext = () => {
        if(currentQuestion === questions.length - 1) return;
        setCurrentQuestion(currentQuestion + 1);
    }

    // handle when user answers a question
    const handleAnswer = (event) => {
        const modal = document.getElementById('modelo');
        const selectedBtn = event.target;
        const selectedAnswer = event.target.innerText;
        const answer = questions[currentQuestion].correct_answer;

        if(selectedAnswer === answer){
          setScore(score + 10);
          selectedBtn.classList.add('btn-success');
        }
        else selectedBtn.classList.add('btn-danger');

        setTimeout( () => {
          selectedBtn.classList.remove('btn-success');
          selectedBtn.classList.remove('btn-danger');
          if(currentQuestion === questions.length - 1){
            modal.style.visibility = "visible"
            return
          }
          setCurrentQuestion(currentQuestion + 1)
        }, 2000);
    }

    // removes the modal backdrop after redirecting user to trivia page
    let body = document.querySelector('body');
    body.classList.remove('modal-open');
    let modals =  document.querySelectorAll('div.modal-backdrop')
    modals.forEach( modal => {
      modal.remove();
    })

    return (
        <div className="trivia-page">
            <Link to="/">
              <span className="nav-heading">Quizico</span>
            </Link>
            <Modal score={score} />
            <div className="content-container">
                
                <div className="info-text">
                  <span className="user-score">Score: {score}</span>
                  <span>{currentQuestion + 1}/10</span>
                </div>

                <div className="question-container">
                    <span>
                        { questions[0] ? questions[currentQuestion].question
                          : "Loading questions. . ."}
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