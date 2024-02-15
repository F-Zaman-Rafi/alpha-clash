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
// keyboard input function
function handleKeyboardButtonPress() {
    console.log('button pressed');
    document.addEventListener('keyup', handleKeyboardButtonPress);
}


function play() {
    // hide home
    hideById('home');
    // jump to playground
    addById('playGround');
    // display random alphabet
    const alphabet = getRandomAlphabet();
    const alphabetElement = document.getElementById('currentAlphabet');
    alphabetElement.innerText = alphabet;
    // alphabet background color
    getBackgroundColorById(alphabet);


}