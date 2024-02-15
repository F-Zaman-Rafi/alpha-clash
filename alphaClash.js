function hideById(elementID) {
    const elementSection = document.getElementById(elementID);
    elementSection.classList.add('hidden');
}

function addById(elementID) {
    const elementSection = document.getElementById(elementID);
    elementSection.classList.remove('hidden');
}

function play() {
    hideById('home');
    addById('playGround');
}