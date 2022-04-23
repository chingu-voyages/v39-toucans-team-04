import React from "react";
import science from "../assets/images/science.jpg";
import computers from "../assets/images/computers.jpg";
import math from "../assets/images/math.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoryAction } from "../redux/categoryaction";
import { difficultyAction } from "../redux/difficultyaction";

const Categories = () => {
  const dispatch = useDispatch();

  const state = useSelector(state => state.category);

  const CategoryHandler = (e) => {
    dispatch(categoryAction(e.target.value));
    console.log(state);
  }

  const DifficultyHandler = (e) => {
    dispatch(difficultyAction(e.target.value));
  }

  return (
    <div>
      <div
        className="modal fade"
        id="scienceModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="scienceLevels"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="scienceHeader">
                Difficulties
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button
                type="button"
                className="levelBtn"
                style={{ backgroundColor: "lightgreen" }}
                value="easy"
                onClick={(e) => DifficultyHandler(e)}
              >
                Easy
              </button>
              <button
                type="button"
                className="levelBtn"
                style={{ backgroundColor: "rgb(255,255,153)" }}
                value="medium"
                onClick={(e) => DifficultyHandler(e)}
              >
                Medium
              </button>
              <button
                type="button"
                className="levelBtn"
                style={{ backgroundColor: "rgb(255,99,71)" }}
                value="hard"
                onClick={(e) => DifficultyHandler(e)}
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="technologyModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="technologyLevels"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="technologyHeader">
                Difficulties
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button
                type="button"
                className="levelBtn"
                style={{ backgroundColor: "lightgreen" }}
                value="easy"
                onClick={(e) => DifficultyHandler(e)}
              >
                Easy
              </button>
              <button
                type="button"
                className="levelBtn"
                style={{ backgroundColor: "rgb(255,255,153)" }}
                value="medium"
                onClick={(e) => DifficultyHandler(e)}
              >
                Medium
              </button>
              <button
                type="button"
                className="levelBtn"
                style={{ backgroundColor: "rgb(255,99,71)" }}
                value="hard"
                onClick={(e) => DifficultyHandler(e)}
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="mathModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mathLevels"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="mathHeader">
                Difficulties
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button
                type="button"
                className="levelBtn"
                style={{ backgroundColor: "lightgreen" }}
                value="easy"
                onClick={(e) => DifficultyHandler(e)}
              >
                Easy
              </button>
              <button
                type="button"
                className="levelBtn"
                style={{ backgroundColor: "rgb(255,255,153)" }}
                value="medium"
                onClick={(e) => DifficultyHandler(e)}
              >
                Medium
              </button>
              <button
                type="button"
                className="levelBtn"
                style={{ backgroundColor: "rgb(255,99,71)" }}
                value="hard"
                onClick={(e) => DifficultyHandler(e)}
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="header">

        <div className="logo-styling">
          <Link to="/">
            <h1 className="logo">Quizico</h1>
          </Link>
        </div>

        <div className="category">
          <h2 className="category-header">Categories</h2>
        </div>

      </div>

      <div className="category-content">
        <div className="Card science">
          <img
            src={science}
            className="card-img-top"
            alt="guy looking at microscope"
          />
          <div className="card-body">
            <h5 className="card-title">Science</h5>
            <p className="card-text">Answer questions related to science!</p>
            <button
              type="button"
              className="science-btn"
              data-toggle="modal"
              data-target="#scienceModal"
              value="science"
              onClick={(e) => CategoryHandler(e)}
            >
              CHOOSE A DIFFICULTY
            </button>
          </div>
        </div>

        <div className="Card computers">
          <img src={computers} className="card-img-top" alt="computers" />
          <div className="card-body">
            <h5 className="card-title">Technology</h5>
            <p className="card-text">Answer questions related to technology!</p>
            <button
              type="button"
              className="tech-btn"
              data-toggle="modal"
              data-target="#technologyModal"
              value="technology"
              onClick={(e) => CategoryHandler(e)}
            >
              CHOOSE A DIFFICULTY
            </button>
          </div>
        </div>

        <div className="Card math">
          <img src={math} className="card-img-top" alt="math" />
          <div className="card-body">
            <h5 className="card-title">Mathematics</h5>
            <p className="card-text">Answer questions related to math!</p>
            <button 
              type="button"
              className="math-btn"
              data-toggle="modal" 
              data-target="#mathModal" 
              value="math"
              onClick={(e) => CategoryHandler(e)}>
              CHOOSE A DIFFICULTY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
