// Объявление переменных для элементов страницы
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let outputDiv = document.getElementById('diceResult');
let smileyContainer = document.getElementById('smileyContainer');

// Список различных смайликов
let smileyOptions = ['😄', '😎', '😊', '🥳', '😜', '🤩', '😇'];

// Функция броска кубиков
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

// Функция для показа/скрытия меню опций
function toggleOptionsMenu() {
    let optionsMenu = document.getElementById('optionsMenu');
    let menuIcon = document.getElementById('menuIcon');
    optionsMenu.classList.toggle('show'); // Переключаем класс для изменения видимости меню
    menuIcon.classList.toggle('hide'); // Скрываем или показываем иконку меню
}

// Функция для показа/скрытия меню продвинутых настроек
function toggleAdvancedSettings() {
    let advancedSettingsMenu = document.getElementById('advancedSettingsMenu');
    advancedSettingsMenu.classList.toggle('show'); // Переключаем класс для изменения видимости блока продвинутых настроек

    // Получаем элемент стрелочки
    let arrowElement = document.getElementById('advancedSettingsArrow');
    // Получаем текущее состояние отображения меню продвинутых настроек
    let isMenuShown = advancedSettingsMenu.classList.contains('show');
    // Изменяем текст стрелочки в зависимости от состояния меню
    arrowElement.innerHTML = isMenuShown ? '&#9650;' : '&#9660;';
}



// Вызываем функцию rollDice() при загрузке страницы
rollDice();

// Добавляем обработчики событий на кубики
dice1.addEventListener("click", rollDice);
dice2.addEventListener("click", rollDice);

document.addEventListener('click', function(event) {
    let optionsMenu = document.getElementById('optionsMenu');
    let menuIcon = document.getElementById('menuIcon');
    // Если клик был не по меню и не по иконке меню, скрываем меню и показываем иконку
    if (!optionsMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        optionsMenu.classList.remove('show');
        menuIcon.classList.remove('hide');
    }
});

// Функция для обновления списка смайликов
function updateSmileys() {
    let smileyTextElement = document.getElementById('smileyText');
    let newSmileyOptions = smileyTextElement.value.trim();

    // Устанавливаем новые значения только если они отличаются от текущих
    if (newSmileyOptions !== "") {
        // Разделяем строку со смайликами по запятым и удаляем пробелы
        newSmileyOptions = newSmileyOptions.split(',').map(option => option.trim());

        if (JSON.stringify(newSmileyOptions) !== JSON.stringify(smileyOptions)) {
            // Очищаем массив smileyOptions и добавляем новые значения
            smileyOptions = newSmileyOptions;

            // Очищаем контейнер смайликов
            smileyContainer.innerHTML = '';

            // Добавляем новые смайлики в контейнер
            for (let i = 0; i < newSmileyOptions.length; i++) {
                let smiley = document.createElement('div');
                smiley.innerText = newSmileyOptions[i];
                smiley.classList.add('smiley');
                smileyContainer.appendChild(smiley);
            }
        }
    }
}




// Вызываем функцию updateSmileys() при загрузке страницы
updateSmileys();


// Функция для обновления текста на кубиках
function updateDiceText() {
    let dice1TextElement = document.getElementById('dice1Text');
    let dice2TextElement = document.getElementById('dice2Text');

    // Получаем тексты для кубиков и разделяем их по запятой, удаляем пробелы
    let dice1Text = dice1TextElement.value.trim();
    let dice2Text = dice2TextElement.value.trim();

    // Устанавливаем текст для кубиков только если введены новые значения
    if (dice1Text !== "") {
        let sides1 = dice1.getElementsByClassName('word');
        let sides1Array = dice1Text.split(',').map(item => item.trim());
        for (let i = 0; i < sides1.length; i++) {
            sides1[i].innerText = sides1Array[i] || 'Unknown';
        }
    }

    if (dice2Text !== "") {
        let sides2 = dice2.getElementsByClassName('word');
        let sides2Array = dice2Text.split(',').map(item => item.trim());
        for (let i = 0; i < sides2.length; i++) {
            sides2[i].innerText = sides2Array[i] || 'Unknown';
        }
    }
}



