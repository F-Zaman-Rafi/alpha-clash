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
    console.log(alphabet);
    return alphabet;

}

function play() {
    hideById('home');
    addById('playGround');
    const alphabet = getRandomAlphabet();
    const alphabetElement = document.getElementById('currentAlphabet');
    alphabetElement.innerText = alphabet;

}