import React from "react";
import { createRoot } from 'react-dom/client'
import { TriviaPage } from "./pages/trivia";
import './styles/styles.css';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="app-container">
                <TriviaPage />
            </div>
        );
    }
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);