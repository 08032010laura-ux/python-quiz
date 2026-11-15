// ===== База вопросов (20 штук) =====
// Теперь у каждого вопроса есть поле hint — подсказка для кнопки «Нужна помощь»
const questions = [
    { question: "Какой тип данных используется для целых чисел?", options: ["str", "int", "float", "list"], correct: 1, explanation: "int — целые числа без дробной части.", hint: "Из четырёх вариантов два — про числа. Нужное слово — короткое название целых чисел." },
    { question: "Как вывести текст на экран?", options: ["print('Привет')", "echo('Привет')", "console.log('Привет')", "input('Привет')"], correct: 0, explanation: "print() выводит данные в консоль.", hint: "Одна из этих функций — из JavaScript, другая выводит текст, а не читает его. Самая известная функция Python — твой вариант." },
    { question: "Какой оператор используется для возведения в степень?", options: ["^", "*", "**", "//"], correct: 2, explanation: "В Python это **. Знак ^ — побитовое XOR.", hint: "Оператор степени — это два одинаковых символа умножения подряд." },
    { question: "Как создать список?", options: ["{1, 2, 3}", "(1, 2, 3)", "[1, 2, 3]", "<1, 2, 3>"], correct: 2, explanation: "Списки создаются в квадратных скобках.", hint: "Фигурные скобки — это словарь, круглые — кортеж. Список живёт в других скобках." },
    { question: "Что делает функция len()?", options: ["Удаляет элемент", "Возвращает длину", "Добавляет элемент", "Сортирует"], correct: 1, explanation: "len() возвращает количество элементов.", hint: "len — сокращение от английского length, «длина»." },
    { question: "Какой результат у выражения 5 // 2?", options: ["2.5", "2", "3", "2.0"], correct: 1, explanation: "// — целочисленное деление, дробная часть отбрасывается.", hint: "Двойной слэш — целочисленное деление: дробная часть отбрасывается, результат округляется вниз." },
    { question: "Что вернёт условие 5 > 3 and 2 < 1?", options: ["True", "False", "Error", "None"], correct: 1, explanation: "and требует истинности обоих условий, а 2 < 1 — ложно.", hint: "and истинно, только когда истинны ОБА условия. Проверь второе внимательно." },
    { question: "Как получить доступ к первому элементу списка my_list?", options: ["my_list[0]", "my_list[1]", "my_list.first()", "my_list.get(0)"], correct: 0, explanation: "Индексация в Python начинается с 0.", hint: "Нумерация элементов начинается не с единицы." },
    { question: "Что такое переменная в Python?", options: ["Это функция", "Это имя, ссылающееся на объект в памяти", "Это тип данных", "Это оператор"], correct: 1, explanation: "Переменная — именованная ссылка на объект.", hint: "Переменная — это не действие и не тип. Это ярлык-имя, которое указывает на что-то." },
    { question: "Какой тип получится при сложении int и float?", options: ["int", "float", "str", "error"], correct: 1, explanation: "Результат приводится к более точному типу — float.", hint: "Побеждает более «точный» тип из двух: тот, что умеет хранить дробную часть." },
    { question: "Что выведет print(type(3.14))?", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"], correct: 1, explanation: "3.14 — число с плавающей точкой, то есть float.", hint: "3.14 — дробное число. Вспомни, как называется такой тип." },
    { question: "Как проверить, есть ли элемент в списке?", options: ["in", "contains", "has", "exist"], correct: 0, explanation: "Оператор in. Пример: if x in my_list:", hint: "Нужен короткий оператор-предлог из двух букв." },
    { question: "Что делает метод .append()?", options: ["Удаляет последний элемент", "Добавляет элемент в конец списка", "Сортирует список", "Меняет порядок на обратный"], correct: 1, explanation: "my_list.append(x) добавляет x в конец.", hint: "append переводится как «добавить» — а добавить элемент можно только в конец списка." },
    { question: "Какой символ используется для комментариев?", options: ["//", "#", "/*", "--"], correct: 1, explanation: "Комментарии в Python начинаются с #.", hint: "Этот символ называют «решётка» или «хэш»." },
    { question: "Что такое PEP 8?", options: ["Язык программирования", "Стандарт оформления кода Python", "Библиотека для графики", "Функция ввода"], correct: 1, explanation: "Руководство по стилю написания кода на Python.", hint: "PEP — это «предложения по улучшению Python». Восьмой посвящён тому, как красиво оформлять код." },
    { question: "Как создать пустой словарь?", options: ["[]", "{}", "()", "set()"], correct: 1, explanation: "{} — пустой словарь. [] — пустой список, () — кортеж.", hint: "Словарь создаётся фигурными скобками — как и непустой." },
    { question: "Что вернёт выражение 'Hi' * 3?", options: ["'HiHiHi'", "'Hi 3'", "Ошибка", "'3Hi'"], correct: 0, explanation: "Умножение строки на число повторяет её.", hint: "Python умеет «умножать» строку на число — строка просто повторяется несколько раз." },
    { question: "Какой цикл используется для перебора списка?", options: ["while", "for", "repeat", "loop"], correct: 1, explanation: "for — для итерации по коллекциям.", hint: "Из четырёх названий в Python существуют только два. Тот, что для перебора коллекций, короче." },
    { question: "Что такое IDE?", options: ["Интернет-протокол", "Интегрированная среда разработки", "Тип данных", "Оператор"], correct: 1, explanation: "Например, PyCharm или VS Code.", hint: "Расшифровка: Integrated Development Environment — программа, где пишут код." },
    { question: "Что произойдёт при обращении к несуществующему индексу списка?", options: ["Вернёт None", "Вернёт False", "Вызовет ошибку IndexError", "Ничего не произойдёт"], correct: 2, explanation: "Python следит за границами списка и выбрасывает IndexError.", hint: "Ошибка так и называется — по имени «индекс»." }
];

// ===== Переменные состояния =====
let currentQuestion = 0;
let score = 0;
let username = "";
let isFinishedEarly = false;
let timerInterval;
let timeLeft = 60;
const timePerQuestion = 60;
let currentQ = null;        // текущий вопрос (нужен для возобновления таймера)
let answered = false;       // ответил ли игрок на текущий вопрос
let helpUsed = false;       // брал ли игрок подсказку на текущем вопросе

// ===== Ссылки на элементы страницы =====
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const finishBtn = document.getElementById('finish-btn');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const questionProgress = document.getElementById('question-progress');
const timerDisplay = document.getElementById('timer-display');
const feedbackText = document.getElementById('feedback-text');
const finalScoreEl = document.getElementById('final-score');
const resultMessageEl = document.getElementById('result-message');
const currentScoreEl = document.getElementById('current-score');
const helpBtn = document.getElementById('help-btn');
const helpModal = document.getElementById('help-modal');
const closeHelpBtn = document.getElementById('close-help-btn');
const hintContent = document.getElementById('hint-content');
const topPlayersEl = document.getElementById('top-players');

// ===== Кнопка «Начать викторину» =====
startBtn.addEventListener('click', function () {
    username = document.getElementById('username').value.trim();
    if (username === "") {
        alert("Пожалуйста, введите имя!");
        return;
    }
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

// ===== Кнопка «Завершить досрочно» =====
finishBtn.addEventListener('click', function () {
    if (!isFinishedEarly && confirm("Завершить викторину досрочно?")) {
        isFinishedEarly = true;
        showResults();
    }
});

// ===== Кнопка «Нужна помощь»: показать подсказку и поставить таймер на паузу =====
helpBtn.addEventListener('click', function () {
    if (helpUsed || answered || isFinishedEarly) return;
    helpUsed = true;
    helpBtn.disabled = true;
    clearInterval(timerInterval); // пауза
    hintContent.innerText = currentQ.hint;
    helpModal.classList.add('show');
});

function closeHelp() {
    helpModal.classList.remove('show');
    // Возобновляем таймер с той же секунды, только если ещё не ответили
    if (currentQ && !answered && !isFinishedEarly) {
        startTimer(currentQ);
    }
}

closeHelpBtn.addEventListener('click', closeHelp);
helpModal.addEventListener('click', function (e) {
    if (e.target === helpModal) {
        closeHelp();
    }
});

// ===== Показать текущий вопрос =====
function loadQuestion() {
    currentQ = questions[currentQuestion];
    answered = false;
    helpUsed = false;
    helpBtn.disabled = false;

    questionText.innerText = currentQ.question;
    questionProgress.innerText = "Вопрос " + (currentQuestion + 1) + " из " + questions.length;

    optionsContainer.innerHTML = "";
    feedbackText.classList.remove('show');
    feedbackText.innerText = "";
    timerDisplay.style.color = "#fbbf24";

    currentQ.options.forEach(function (option, index) {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.addEventListener('click', function () {
            checkAnswer(index, btn, currentQ);
        });
        optionsContainer.appendChild(btn);
    });

    timeLeft = timePerQuestion;
    timerDisplay.innerText = timeLeft + " сек";
    startTimer(currentQ);
}

// ===== Таймер (отдельная функция, чтобы уметь ставить на паузу) =====
function startTimer(q) {
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        timeLeft--;
        timerDisplay.innerText = timeLeft + " сек";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.style.color = "#ef4444";
            handleTimeOut(q);
        }
    }, 1000);
}

// ===== Если время вышло =====
function handleTimeOut(q) {
    answered = true;
    const allBtns = optionsContainer.querySelectorAll('button');
    allBtns.forEach(function (b) {
        b.classList.add('disabled-for-feedback');
        b.disabled = true;
    });
    allBtns[q.correct].classList.add('correct-answer');

    feedbackText.innerText = "Время вышло! " + q.explanation;
    feedbackText.style.borderLeftColor = "#ef4444";
    feedbackText.classList.add('show');

    setTimeout(nextStep, 2000);
}

// ===== Проверка ответа =====
function checkAnswer(selectedIndex, selectedBtn, q) {
    if (isFinishedEarly || answered) return;
    answered = true;
    clearInterval(timerInterval);

    const allBtns = optionsContainer.querySelectorAll('button');
    allBtns.forEach(function (b) {
        b.classList.add('disabled-for-feedback');
        b.disabled = true;
    });

    if (selectedIndex === q.correct) {
        score++;
        if (currentScoreEl) {
            currentScoreEl.innerText = score;
        }
        selectedBtn.classList.add('correct-answer');
        feedbackText.innerText = "Верно! " + q.explanation;
        feedbackText.style.borderLeftColor = "#10b981";
    } else {
        selectedBtn.classList.add('wrong-answer');
        allBtns[q.correct].classList.add('correct-answer');
        feedbackText.innerText = "Ошибка. Правильный ответ: " + q.options[q.correct] + ". " + q.explanation;
        feedbackText.style.borderLeftColor = "#ef4444";
    }
    feedbackText.classList.add('show');

    setTimeout(nextStep, 2000);
}

// ===== Переход к следующему вопросу =====
function nextStep() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// ===== Сохранение результата и топ-3 =====
function saveAndShowTop() {
    let results = [];
    try {
        results = JSON.parse(localStorage.getItem('pythonQuizResults')) || [];
    } catch (e) {
        results = [];
    }

    results.push({ name: username, score: score });

    results.sort(function (a, b) {
        return b.score - a.score;
    });

    results = results.slice(0, 3);

    localStorage.setItem('pythonQuizResults', JSON.stringify(results));

    topPlayersEl.innerHTML = "";
    if (results.length === 0) {
        topPlayersEl.innerText = "Пока никого нет — стань первым!";
    } else {
        results.forEach(function (r, index) {
            const li = document.createElement('li');
            li.innerText = r.name + " — " + r.score + " из " + questions.length;
            li.classList.add('top-' + (index + 1));
            topPlayersEl.appendChild(li);
        });
    }
}

// ===== Итоги =====
function showResults() {
    clearInterval(timerInterval);
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    finalScoreEl.innerText = score + " из " + questions.length;

    let message;
    if (score === questions.length) {
        message = username + ", идеально! Ты имба лютейший! АГКХМММ! 🎉";
    } else if (score >= 14) {
        message = username + ", отличный результат!";
    } else if (score >= 10) {
        message = username + ", неплохой результат, но стоит повторить теорию.";
    } else {
        message = username + ", стоит вернуться к основам Python. Не смей сдаваться! Воин!";
    }
    resultMessageEl.innerText = message;

    saveAndShowTop();
}
