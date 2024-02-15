function hideById(elementID) {
    const elementSection = document.getElementById(elementID);
    elementSection.classList.add('hidden');
}

function addById(elementID) {
    const elementSection = document.getElementById(elementID);
    elementSection.classList.remove('hidden');
}
function getRandomAlphabet() {
    const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabetArray[index];
    return alphabet;
}

function getBackgroundColorById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}

// remove key background
function removeAlphabetBackground(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}

// text to integer function

function getTextElementValueById(elementID) {
    const currentElementValue = document.getElementById(elementID);
    const currentElementValueText = currentElementValue.innerText;
    const elementValue = parseInt(currentElementValueText);
    return elementValue;
}

function setTextElementValueById(elementID, value) {
    const element = document.getElementById(elementID);
    element.innerText = value;
}


// keyboard input function


function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('button pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        console.log('You got a point');
        removeAlphabetBackground(expectedAlphabet);
        play();

        // update score

        // const currentScoreElement = document.getElementById('currentScore');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log('currentScore');

        const currentScore = getTextElementValueById('currentScore');

        const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        setTextElementValueById('currentScore', newScore);
    }
    else {
        // const currentLifeElement = document.getElementById('currentLife');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        const currentLife = getTextElementValueById('currentLife');
        console.log('you lost a life');

        const newLife = currentLife - 1;
        setTextElementValueById('currentLife', newLife);

        if (newLife === 0) {
            hideById('playGround');
            addById('score');
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);




function play() {
    // hide home
    hideById('home');
    hideById('score');
    // jump to playground
    addById('playGround');
    // display random alphabet
    const alphabet = getRandomAlphabet();
    const alphabetElement = document.getElementById('currentAlphabet');
    alphabetElement.innerText = alphabet;
    // alphabet background color
    getBackgroundColorById(alphabet);

    // reset value

}
function playAgain() {

    hideById('score');
    setTextElementValueById('currentLife', 5);
    setTextElementValueById('currentScore', 0);
    // removeAlphabetBackground('expectedAlphabet');
    play();

    // final score

    // const finalScore = getTextElementValueById('currentScore');
    // console.log('this is your score', finalScore);
    // setTextElementValueById('finalScore', finalScore);

}
