
document.getElementById('post-button').addEventListener('click', function () {
    // console.log('Its working babe');
    const textArea = document.getElementById('texrArea');
    const textAreaValue = textArea.value;
    // console.log(textAreaValue)
    const mainSection = document.getElementById('main-section');

    const createElement = document.createElement('p');
    createElement.innerText = textAreaValue;
    mainSection.appendChild(createElement);

    textArea.value = ' '
})

document.getElementById('texrArea').addEventListener('keyup', function (event) {
    console.log(event.target.value)
})

document.getElementById('texrArea').addEventListener('focus', function () {
    console.log("Its woking")
})
document.getElementById('texrArea').addEventListener('blur', function () {
    console.log("event.target.value")
})