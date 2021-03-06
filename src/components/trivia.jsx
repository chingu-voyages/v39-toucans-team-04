import React, { useState, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from "./endModal";
import next from '../assets/images/right.png';
import { techPics } from './mixins/tech';
import { mathPics } from './mixins/math';
import { sciencePics } from './mixins/science';


export const TriviaPage = () => {
    const category = useSelector( state => state.category.value);
    const difficulty = useSelector( state => state.difficulty.value);

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(getRandomIndex(6));
    const usedIndex = [];
    let randomIndex = getRandomIndex(answers.length);

    // set photo for each category
    const photos = category === '17' ? sciencePics :
    category === '18' ? techPics : mathPics;
    
    const htmlEntities = {
      "&amp;": "&",
      "&lt;" : "<",
      "&gt;" : ">",
      "&quot;": "\"",
      "&apos;": "'",
      "&#039;": "'"
    };
    const regex = /(&amp;|&lt;|&gt;|&apos;|&quot;|&#039;)/g;

    useLayoutEffect( () => {
      ( async => {
        if( questions.length === 0 ){
          fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
          .then( response => response.json())
          .then( data => {
            setQuestions(data.results)
            setAnswers([...data.results[currentQuestion].incorrect_answers,
              data.results[currentQuestion].correct_answer]);
          });
        }
      })()

      if(questions.length > 0){
        setAnswers([...questions[currentQuestion].incorrect_answers,
          questions[currentQuestion].correct_answer]);
      }
      setPhotoIndex(getRandomIndex(photos.length));
    }, [currentQuestion]);

    const handleNext = () => {
      if(currentQuestion === questions.length - 1) return;
      setCurrentQuestion(currentQuestion + 1);
    }

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

        setCurrentQuestion(currentQuestion + 1);
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
                  { questions[0] ? questions[currentQuestion].question.replace(regex, word => htmlEntities[word])
                    : "Loading questions. . ."}
              </span>
          </div>

          <div className="bottom-wrapper">
              <div className="meme-wrapper">
                  <img src={photos[photoIndex]} alt="random meme"/>
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
                                      {answers[randomIndex].replace(regex, word => htmlEntities[word])}
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
