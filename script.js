// Ваш JavaScript код
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
var outputDiv = document.getElementById('diceResult');
var smileyContainer = document.getElementById('smileyContainer'); // Добавили контейнер для смайликов

function rollDice() {
    let result1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let result2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    dice1.dataset.side = result1;
    dice2.dataset.side = result2;

    dice1.classList.toggle("reRoll");
    dice2.classList.toggle("reRoll");

    console.log("Dice 1: " + result1);
    console.log("Dice 2: " + result2);

    outputDiv.classList.remove("reveal");
    outputDiv.classList.add("hide");
    outputDiv.innerHTML = "Ты получил " + result1 + " и " + result2;
    setTimeout(function(){ outputDiv.classList.add("reveal"); }, 1500);

    // Добавление смайликов в контейнер
    for (let i = 0; i < 10; i++) {
        let smiley = document.createElement('div');
        smiley.innerText = '😄'; // Любой смайлик, который вам нравится
        smiley.classList.add('smiley');
        let randomX = Math.floor(Math.random() * window.innerWidth);
        let randomY = Math.floor(Math.random() * window.innerHeight);
        smiley.style.left = randomX + 'px';
        smiley.style.top = randomY + 'px';
        smileyContainer.appendChild(smiley); // Добавляем в контейнер
        setTimeout(() => {
            smileyContainer.removeChild(smiley); // Удаляем из контейнера
        }, 1500);
    }
}

// Вызываем функцию rollDice() при загрузке страницы
rollDice();

// Добавляем обработчики событий на кубики
dice1.addEventListener("click", rollDice);
dice2.addEventListener("click", rollDice);
