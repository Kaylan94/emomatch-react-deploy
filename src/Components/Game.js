import React, { Component } from 'react';
import $ from 'jquery';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';
import emoji1 from './emoji-1.jpg';
import emoji2 from './emoji-2.png';
import emoji3 from './emoji-3.jpg';
import emoji4 from './emoji-4.jpg';
import emoji5 from './emoji-5.jpg';
import emoji6 from './emoji-6.jpg';
import Header from './Header';

//shuffle function is created which takes in an array as a parameter
//Fisher-Yates (aka Knuth) algorithm
function shuffle(cards) {
        
    for(let i = cards.length - 1; i > 0; i--) {

        let newPos = Math.floor(Math.random()*(i+1));
        let temp = cards[i];
        cards[i] = cards[newPos];
        cards[newPos] = temp;
    }
    return cards;
}

//the emoji objects created and defined below. given an id, src, card state("used in relation 
//to child component's className") - functional requisite.
const emojis = [
    {
        id: 1, src: emoji1, stateCard: "card", stateImg: "img-emo is-flipped"},
    { 
        id: 2, src: emoji2, stateCard: "card", stateImg: "img-emo is-flipped"},
    {
        id: 3, src: emoji3, stateCard: "card", stateImg: "img-emo is-flipped"},
    {
        id: 4, src: emoji4, stateCard: "card", stateImg: "img-emo is-flipped"},
    {
        id: 5, src: emoji5, stateCard: "card", stateImg: "img-emo is-flipped"},
    {
        id: 6, src: emoji6, stateCard: "card", stateImg: "img-emo is-flipped"},
    {
        id: 11, src: emoji1, stateCard: "card", stateImg: "img-emo is-flipped"},
    { 
        id: 12, src: emoji2, stateCard: "card", stateImg: "img-emo is-flipped"},
    {
        id: 13, src: emoji3, stateCard: "card", stateImg: "img-emo is-flipped"},
    {
        id: 14, src: emoji4, stateCard: "card", stateImg: "img-emo is-flipped"},
    {
        id: 15, src: emoji5, stateCard: "card", stateImg: "img-emo is-flipped"},
    {
        id: 16, src: emoji6, stateCard: "card", stateImg: "img-emo is-flipped"}
]

//this a timer function used to create a time limit on game-play
//this algorithm was adopted from: 
//https://www.codegrepper.com/code-examples/javascript/1+minute+live+countdown+timer+javascript  
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            const loseMsg = window.confirm(
                `Sorry, you lose! 
            
                Try Again?`);
            timer = duration;
            if(loseMsg) {
                window.location.reload();
            }else if(!loseMsg){
                <Header />
            }
        }
    }, 1000);
}

//by passing the emojis array to the shuffle function a new shuffledCards array created
const shuffledCards = shuffle(emojis);
//game time set to 60(seconds)
const gameTime = (60);


//The calss defined below is the parent component to Cards.js
class Game extends Component {
    constructor(props) {
        super(props);
        //biding of the method
        this.handleFlip = this.handleFlip.bind(this);
        //the Game's stateful properties are created and defined below
        this.state = {draw: 0, matched: [], openCard: []};
    }

    //the method below is called upon a click event and sets the state of the properties:
    //openCard - by taking its previous state and adding the current index(parameter: unique id).
    //draw - is set to 0 
    handleFlip(index) {
            
        this.setState(prevState => ({
            openCard: [...prevState.openCard, index]
        }));

        this.setState({draw: 0});
    }

    //the componentDidMount method is used below to animate the display of card container and set the 
    //sequence of events: page scroll down, alert message and then the time
    //jquery is also used here for two of the features
    //the StartTimer function is also called here. 
    componentDidMount(prevProps, prevState){

        let display = document.querySelector('#time');
        
        $('.card-container').slideDown(1500);

        setTimeout(() => window.scrollTo(0, 1000), 2200);

        setTimeout(() => alert(`Welcome to Emomatch. You have 1 minute to match all cards. 
        Good luck!!`), 3000);

        $('.timer').delay(3500).slideDown(1000);

        setTimeout(() => startTimer(gameTime, display), 5000);
    }

    //the componentDidUpdate method is used here to define the features and rules for each time a card is clicked
    componentDidUpdate(prevProps, prevState){
        const openCard = this.state.openCard;
        
        //if the previous state of the length of the array, openCard is  the same as 1 and
        // the current length of the array is 2 then
        if(prevState.openCard.length === 1 && openCard.length === 2){
            //the first and second card in the openCard array are assigned their own respective values
            const firstCard = emojis[openCard[0]];
            const secondCard = emojis[openCard[1]];

            //here we check whether the id of the cards correspond and if so...
            if(secondCard.id === (firstCard.id + 10) || secondCard.id === (firstCard.id - 10)
                ) {
                    //the first card object is added to the property, matched[].
                    this.setState(prevState => ({
                    matched: [...prevState.matched, firstCard.id]
                }));

                //then we need to update the classList of the cards in order to benefit from the css rules
                //defined for each, respectively
                firstCard.stateCard = "card stay-Flipped";
                firstCard.stateImg = "img-emo";

                secondCard.stateCard = "card stay-Flipped";
                secondCard.stateImg = "img-emo";

                //lastly, the openCard array is updated and emptied.
                setTimeout(() => this.setState({
                    openCard: []
                }), 500);

                }

                //below, we defined what should happen if the cards do not correspond
                else if(secondCard.id !== (firstCard.id + 10) || secondCard.id !== (firstCard.id - 10)){
                    
                    //due to the way the card components have been defined, here we need to set them back to 
                    //their inital state by, once again, changing the classList while accounting for each scenario
                    if (firstCard.stateCard === "card is-flipped" && firstCard.stateImg === "img-emo"){

                        firstCard.stateCard = "card";
                        firstCard.stateImg = "img-emo is-flipped"
                        
                    }else{
                        firstCard.stateCard = "card";
                        firstCard.stateImg = "img-emo"
                    }

                    if (secondCard.stateCard === "card" && secondCard.stateImg === "img-emo is-flipped"){

                        secondCard.stateCard = "card is-flipped";
                        secondCard.stateImg = "img-emo"
                    }else{
                        secondCard.stateCard = "card";
                        secondCard.stateImg = "img-emo is-flipped"
                    }

                    //lastly, the openCard array is updated and emptied.
                    setTimeout(() => this.setState({
                        openCard: []
                    }), 500);    
                } 
                //the openCard array is updated and emptied, as soon as the openCard state reaches a length of 2
                setTimeout(() => this.setState({
                    openCard: []
                }), 500); 
        }


        //here, the condition is set for when the max number of matches has been reached i.e. the game has been won
        if(prevState.matched.length === 6) {
            
            // eslint-disable-next-line no-restricted-globals
            let finished = setTimeout(() => alert(
                                            `
                                            YOU WON!!!
            
                                            `), 1000);

            const endGame = () => {
                window.location.replace('/')
            }

            if(finished){
                setTimeout(() => 
                    endGame(), 2000);
            }
        } 
    }

    
    render() {
        //below we use the map function to render each of the cards with the neccessary props
        return (
                <Row className="card-row">
                    {shuffledCards.map((img, index) => (

                        <Col md={3} className="card-col" key={index}>
                            <Cards
                                className1={img.stateCard}
                                className2={img.stateImg}
                                draw={img.id}
                                onCardClick={()=>this.handleFlip(index)}
                                src={img.src}
                                />
                        </Col>
                    ))}
                </Row>
            
        )
    }
}

export default Game;