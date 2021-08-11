import React, { Component } from 'react';

//This is the child component to, Game.js, defined as a class
class Cards extends Component {
    constructor(props) {
        super(props)
        //the binding of this method is neccessary for the render
        this.cardFlip = this.cardFlip.bind(this);
    }

    //here, a cardFlip method is defined to link the props from the parent component
    //using the event parameter, we pass the unique id(draw) for each card click(target)
    cardFlip(e) {
       
        this.props.onCardClick(e.target.draw);  
    }

    
    render() {
        //the variables defined below are given values of their respective props from the parent component
        const imgSrc = this.props.src;
        const draw = this.props.draw;
        const className1 = this.props.className1;
        const className2 = this.props.className2;

        //the below function is created to toggle 'is-flipped' on the classList in order to
        //use the defined css rules to flip the selected card on-click
        function flipMe(e) {
            e.target.classList.toggle('is-flipped');
        }
        
        //below, the card container, 'back-face' container and the image('front-face') container is created.
        //the card container acts as a 'scene' in which the cards will be flipping.
        //each have their own attribute neccessary for the smooth playing of the game  
        return (
            <div //scene
                className="card-container"
                onClick={flipMe}
            >   
                
                <div //back-face
                    className={className1}
                    onClick={this.cardFlip} 
                    value={draw}
                    >
                    <div>
                        
                        <img //front-face
                            src={imgSrc}
                            onClick={flipMe}
                            className={className2}
                            alt={draw}
                        >
                    </img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;