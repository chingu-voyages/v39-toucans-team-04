import React from 'react';
import { Button } from 'reactstrap';
import bunny from '../assets/images/bunny.png';

const Landing = () => {
    return (
        <div>
            <h1>Quizico</h1>
            <h2>Train your brain with our game!</h2>
            <Button>PLAY NOW</Button>
            <img src={bunny} alt="bunny" />;
        </div>
    );
}

export default Landing;