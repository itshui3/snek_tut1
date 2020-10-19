import React, { useState, useRef, useEffect } from 'react';
import { useInterval } from './useInterval.js';
import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
} from './constants.js';

// what fn do we need to make this work? 

function App() {

    // start game fn
    const startGame = () => {

    }

    // end game fn
    const endGame = () => {

    }

    // move snek fn
    const moveSnek = () => {

    }

    // create apple
    const createApple = () => {

    }

    // collision detection fns
    // [hit wall]
    // [hit snek]
    const checkCollision = () => {

    }

    // [consume apple]
    const checkConsume = () => {

    }

    // ??
    const gameLoop = () => {

    }

    // trigger when we update snake, apple, or set game over
    useEffect(() => {

    }, [snake, apple, gameOver])

    // giving a div the role of 'button' seems to have to do with registering arrow keys

    return (
        <div 
        role="button" 
        className="App"
        tabIndex="0"
        onKeyDown={e => moveSnek(e)}
        >
            <canvas
            style={{ border: "1px solid black" }}
            ref={canvasRef}
            >

            </canvas>

        </div>
    );
}

export default App;
