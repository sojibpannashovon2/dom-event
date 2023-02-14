
function makeBlack() {
    document.body.style.backgroundColor = 'black';
}

const makingGreen = document.getElementById('makeGreen').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})

const makingRed = document.getElementById('makeRed').addEventListener('click', function () {
    document.body.style.backgroundColor = 'Red';
})

document.getElementById("handalByButton").addEventListener('click', function () {
    // console.log('It is working');
    const textFile = document.getElementById('textFile');
    const textValue = textFile.value;

    const changeText = document.getElementById('changeText');
    changeText.innerText = textValue;
    textFile.value = ' ';
})