// Global variables
let selectedQuestions = [];
let counter = 0;
let correctButtonID = null;
let gameEnded = true;
let startHide = true;

changeCharacterColors("appTitle");

document.getElementById("btnStart").addEventListener("click", startGame);
document.getElementById("btnNext").addEventListener("click", nextQuestion);
document.getElementById("btnRetry").addEventListener("click", startGame);
addAnswerClick();

// Start or restart the game.
function startGame() {
    if (!gameEnded) {
        toggleElement("btnRetry");
    }
    
    selectedQuestions = [];
    counter = 0;
    correctButtonID = null;
    gameEnded = true;
    updateScore();
    resetButtonColor();
    if (startHide) {
        toggleElement("btnStart");
        showAnswers();
        startHide = false;
    }
    chooseQuestions(quizDataEasyEnglish,4);
    chooseQuestions(quizDataModerateEnglish,3);
    chooseQuestions(quizDataHardEnglish,3);
    assignAnswers();
}

// Select a random question X times from a specified difficulty.
function chooseQuestions(array, max) {
    let slot = [];
    for (let i = 0; i < max; null) {
        const randomNumber = Math.floor(Math.random() * 34);
        if (randomNumber < array.length-1 && checkRepeatedQuestion(slot, randomNumber)) {
            slot[i] = randomNumber;
            selectedQuestions.push(array[randomNumber]);
            i++;
        }
    }
}

// Verify that the chosen question/s has not been selected already.
function checkRepeatedQuestion(array, num) {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === num) {
                return false;
            }
        }
    }
    return true;
}

// Assigns the game title, the question and the answers to the corresponding elements.
// Also it saves the button ID with the correct answer for future use.
function assignAnswers() {
    document.getElementById("gameTitle-text").innerText = selectedQuestions[counter].game.toUpperCase();
    document.getElementById("question-text").innerText = selectedQuestions[counter].question;
    const allAnswers = shuffleAnswers();
    for (let i = 1; i <= 4; i++) {
        btn = document.getElementById(`btnAnswer${i}`)        
        btn.innerHTML = `<strong>${String.fromCharCode(i + 64)}:</strong> ${allAnswers[i-1]}`;
        if (allAnswers[i-1] === selectedQuestions[counter].correctAnswer) {
            correctButtonID = btn.id;
        }
    }
}

// Reorder all the answers to randomize which button has each answer.
function shuffleAnswers() {
    let array = [...selectedQuestions[counter].wrongAnswers];
    array.push(selectedQuestions[counter].correctAnswer);
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

// Check if the button pressed is the correct answer or not. Also check's if the user won the game.
function checkCorrectAnswer(btnID) {
    if (gameEnded) {
        if (btnID === correctButtonID) {
            counter++;
            changeButtonColor (btnID, "btn-light", "btn-success");
            if (counter === 10) {
                wonGame();
            } else {
                toggleElement("btnNext");
            }
            
        } else {
            gameEnded = false;
            changeButtonColor (btnID, "btn-light", "btn-danger");
            changeButtonColor (correctButtonID, "btn-light", "btn-success");
            toggleElement("btnRetry");
        }
    }
}

// Change the corresponding elements to the next question and answers.
function nextQuestion() {
    updateScore();
    toggleElement("btnNext");
    resetButtonColor();
    assignAnswers();
}

// Change the title and the question to remark that the user won the game.
function wonGame() {
    document.getElementById("gameTitle-text").innerText = "YOU WIN!";
    document.getElementById("question-text").innerText = "Press 'Try Again' to continue playing!";
    toggleElement("btnRetry");
    gameEnded = false;
}

// Change the pressed button color.
function changeButtonColor(btnID, remove, add) {
    const btn = document.getElementById(`${btnID}`);
    btn.classList.toggle(remove, false);
    btn.classList.toggle(add, true);
}

// Reset all the button's color.
function resetButtonColor() {
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(`btnAnswer${i}`);
        btn.classList.toggle("btn-success", false);
        btn.classList.toggle("btn-danger", false);
        btn.classList.toggle("btn-light", true);
    }
    
}

// Update the display of the current question and it's proper difficulty.
function updateScore() {
    document.getElementById("counterText").innerText = counter+1;
    updateDifficulty();
}

// Update the display of the difficulty
function updateDifficulty() {
    const text = document.getElementById("difficulty-text");
    
    if (counter >= 0 && counter <=3) {
        text.innerText = "Easy";
    } else if (counter >= 3 && counter <=6) {
        text.innerText = "Moderate";
    } else {
        text.innerText = "Hard";
    }
}

// Toggle an element to be visible or not.
function toggleElement(idElement) {
    const id = "#" + idElement;
    const ele = document.getElementById(`${idElement}`);
    ele.classList.toggle("invisible");
    
}

// Fade-in effect for the answer buttons in the first game start.
function showAnswers() {
    for (let i = 1; i <= 4; i++) {
        toggleElement("btnAnswer"+i);
    }
}

// Assign the proper on-click function to each answer.
function addAnswerClick() {
    
    for (let i = 1; i <= 4; i++) {
        const answerBtn = document.getElementById(`btnAnswer${i}`);
        const onClickAdd = function() {checkCorrectAnswer(answerBtn.id)}
        answerBtn.addEventListener("click", onClickAdd);
    }
}

// Unused
function removeAnswerClick() {
    for (let i = 1; i <= 4; i++) {
        const answerBtn = document.getElementById(`btnAnswer${i}`);
        const onClickAdd = function() {checkCorrectAnswer(answerBtn.id)}
        answerBtn.removeEventListener("click", onClickAdd);
        console.log("removed");
        
    }
}

// Change the color for each character individually of an element
function changeCharacterColors(textId) {
    const textElement = document.getElementById(textId);
    const text = textElement.textContent;
    let coloredText = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === ' ') {
        coloredText += ' ';
      } else {
        coloredText += `<span class="character">${char}</span>`;
      }
    }
      textElement.innerHTML = coloredText;
    
    setInterval(function() {
      const characters = document.querySelectorAll(`#${textId} .character`);
      characters.forEach((char) => {
        char.style.color = getRandomColor();
      });
    }, 2000);
}
  
// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




