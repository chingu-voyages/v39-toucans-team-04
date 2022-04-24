import React from "react";

export const Modal = (props) => {
    
    return (
        <div className="modelo" id="modelo">
            <div className="modelo-text">
                <span className="text-msg">
                    Final score is {props.score} out of 100!
                </span>
            </div>
            <div className="modelo-btn-wrapper">
                    <button className="btn btn-lg">
                        Home
                    </button>
                </div>
        </div>
    );
}