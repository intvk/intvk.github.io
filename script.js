// Ваш JavaScript код
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let outputDiv = document.getElementById('diceResult');
let smileyContainer = document.getElementById('smileyContainer');

// Список различных смайликов
let smileyOptions = ['😄', '😎', '😊', '🥳', '😜', '🤩', '😇'];

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

    // Добавление случайного смайлика в контейнер
    for (let i = 0; i < 10; i++) {
        let smiley = document.createElement('div');
        let randomSmileyIndex = Math.floor(Math.random() * smileyOptions.length);
        let randomSmiley = smileyOptions[randomSmileyIndex];
        smiley.innerText = randomSmiley; // Выбираем случайный смайлик из списка
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

function updateDiceText() {
    let dice1TextElement = document.getElementById('dice1Text');
    let dice2TextElement = document.getElementById('dice2Text');
    let dice1Text = JSON.parse(dice1TextElement.value.replace(/'/g, "\""));
    let dice2Text = JSON.parse(dice2TextElement.value.replace(/'/g, "\""));

    // Устанавливаем текст для кубиков
    let sides1 = dice1.getElementsByClassName('word');
    let sides2 = dice2.getElementsByClassName('word');

    for (let i = 0; i < sides1.length; i++) {
        sides1[i].innerText = dice1Text[i] || 'Unknown';
    }

    for (let i = 0; i < sides2.length; i++) {
        sides2[i].innerText = dice2Text[i] || 'Unknown';
    }
}

