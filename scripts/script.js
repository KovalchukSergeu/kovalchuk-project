window.onhashchange = renderNewState;
/*
  Основная функция по управлению SPA на странице
 */
function renderNewState() {
  let hash = window.location.hash;
  let state = decodeURIComponent(hash.substr(1));
  if (state === '') { // если пустой значит мы зашли в первый раз
    state = {
      page: 'main'
    }
  } else {
    state = JSON.parse(state); // иначе пробуем парсить состояние
  }
  let page = '';

  switch (state.page) {
    case 'main':
      page += "<div class='container'>";
      page += "<div class='gameName'>Кто хочет стать программистом</div>";
      page += "<ul class='menu-list'>";
      page += "<li class='menu-item'>";
      page += "<input type=\"button\" class='buttons' value=\"Начать игру\" onclick=\"switchToGame()\">";
      page += '</li>';
      page += "<li class='menu-item'>";
      page += "<input type=\"button\" class='buttons' value=\"Правила\" onclick=\"switchToRules()\">";
      page += '</li>';
      page += "<li class='menu-item'>";
      page += "<input type=\"button\" class='buttons' value=\"Рекорды\" onclick=\"switchToRecords()\">";
      page += '</li>';
      page += '</ul>';
      page += '</div>';
      document.getElementById('page').innerHTML = page;
      break;
    case 'game':
      switchToGame();
      break;

    case 'rules':
      page += '<div class="container">';
      page += '<input type="button" class="buttons" value="Вернуться к главному меню" onclick="switchToStart()">';
      page += '<div class="rules">Игра "Кто хочет стать программистом".</br> Смысл игры в тренировке своих знаний в области программирования на языке "JavaScript"</br> Created by Ковальчук Сергей</div>';
      page += '</div>';
      document.getElementById('page').innerHTML = page;
      break;

    case 'records':
      page += '<div class="container">';
      page += '<input type="button" class="buttons" value="Вернуться к главному меню" onclick="switchToStart()">';
      page += '<table class="tableRecords">';
      page += `<tr class="table-cell"><th class="table-cell">Игрок</th><th class="table-cell">Уровень</th></tr>`;
      for (let i = 0; i < resultArray.length; i++) {
        page += `<tr class="table-cell"><td class="table-cell" id="igrok">${resultArray[i].name}</td><td class="table-cell" id="itog">${resultArray[i].level}</td></tr>`;
      }
      page += '</table>';
      page += '</div>';
      document.getElementById('page').innerHTML = page;
      break;
  }

}

// Выборы case в зависимости от клика
function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}

function switchToStart() {
  switchToState({page: 'main'});
  $('.end').css('display', 'none');
  $('.main').css('display', 'none');
  $('#page').css('display', 'block');
  $('.winner').css('display', 'none');
  audioRound.pause();
}

function switchToGame() {
  $('.main').css('display', 'block');
  $('#page').css('display', 'none');
  level = 0;
  show(level);
  $(tr).css('color', 'black');
  $('.tr').css('color', '#830097');
  $('.first-td').css('color', 'white');
  $('#timer_inp').text(60);
}

function switchToRules() {
  switchToState({page: 'rules'});
}

function switchToRecords() {
  switchToState({page: 'records'});
}

renderNewState();

// Список вопросов
const question = [
  'Какие конструкции для циклов есть в javascript?',
  'Какая функция используется, если нужно спросить пользователя о чем-то \n и принять ответ "да" или "нет"?',
  'Укажите синтаксически неправильный вариант создания массива.',
  'Что такое ECMAScript?',
  'Что получится, если сложить true + false?',
  'Верно ли, что null == undefined?',
  'Что будет, если вызвать document.write(str) после загрузки страницы?',
  'Можно ли скриптом перевести посетителя на другую страницу сайта?',
  'Сколько параметров можно передать функции ?',
  'In JavaScript, scopes are created by:',
  'В каком городе находится штаб-квартира Microsoft?',
  'In the browser, the global execution context is:',
  'In JavaScript, functions attached to objects are called:',
  'DOM events are processed when: ',
  'Which of the following methods creates a new function with preset arguments?'
];

// Варианты ответов
const answer = [
  'Только две: for и while.', 'Три: for, while и do...while.', 'Только одна: for.', 'Четыре: for, while, do..while и do..it',
  'eval()', 'prompt()', 'alert()', 'confirm()',
  'var a = new Array(1,2,3);', 'var a = [1,2,3];', 'var a = new Array();', 'var a = new [1,2,3];',
  'Новый язык программирования.', 'Переработанная реализация JS.', 'Спецификация языка Javascript.', 'Библеотека языка Javascript',
  'undefined', '0', 'NaN', '1',
  'Нет.', 'Да.', 'Наверное.', 'Потом в консоли посмотрю.',
  'Заменит последний элемент в DOM.', 'str допишется в конец документа.', 'Будет ошибка.', 'Полностью заменится на строку str.',
  'Нет, нельзя.', 'Да,но только в рамках сайта.', 'Да, куда угодно.', 'Нет, только с другой вкладки.',
  'Любое количество.', 'Ровно столько, сколько в функции.', 'Меньше, чем в функции.', 'Нельзя передавать.',
  'If/else statements and functions', 'Functions', 'For loops and functions', 'If/else statements',
  'Нью-Йорк', 'Ричмонд', 'Новый Орлеан', 'Сиэтл',
  'document', 'null', 'browser', 'window',
  'Methods', 'Closures', 'Properties', 'Executables',
  'The scope chain is empty', 'The execution stack is empty', 'There are no other events', 'There are no active closures',
  'Function.apply()', 'Function.bind()', 'Function.call()', 'Function.bond()'
];

// Ключи для ответов
const key = [
  'Три: for, while и do...while.',
  'confirm()',
  'var a = new [1,2,3];',
  'Спецификация языка Javascript.',
  '1',
  'Да.',
  'Полностью заменится на строку str.',
  'Да, куда угодно.',
  'Любое количество.',
  'Functions',
  'Ричмонд',
  'window',
  'Methods',
  'The execution stack is empty',
  'Function.bind()'];
// Текущий уровень
let level = 0;
// Аудио для проигрования во время раунда
let audioRound = new Audio('./audio/round.mp3');

// Основная функция вставки вопросов и ответов в блоки

function show(level) {

  $('.question').text(question[level]);
  $('#a').text(answer[level * 4]).css('color', 'white');
  $('#b').text(answer[level * 4 + 1]).css('color', 'white');
  $('#c').text(answer[level * 4 + 2]).css('color', 'white');
  $('#d').text(answer[level * 4 + 3]).css('color', 'white');

  audioRound.play();
}

// Обработка счетчика очков
let tr = $('tr');
$(tr[tr.length - (level + 1)]).css('color', 'white');

// Обработка кликов по правильным/непавильным ответам
$('#a').click(function () {

  if (document.getElementById('a').textContent == key[level]) {
    trueAnswer();
  } else {
    if (level === 4 || level === 9) {
      saveResult();
    }
    wrongAnswer();
  }
  renderRound();
});

$('#b').click(function () {
  if (document.getElementById('b').textContent == key[level]) {
    if (level === 14) {
      win();
    } else {
      trueAnswer();
    }
  } else {
    if (level === 4 || level === 9) {
      saveResult();
    }
    wrongAnswer();
  }
  renderRound();
});

$('#c').click(function () {

  if (document.getElementById('c').textContent == key[level]) {
    trueAnswer();
  } else {
    if (level === 4 || level === 9) {
      saveResult();
    }
    wrongAnswer();
  }
  renderRound();
});

$('#d').click(function () {

  if (document.getElementById('d').textContent == key[level]) {
    trueAnswer();
  } else {
    if (level === 4 || level === 9) {
      saveResult();
    }
    wrongAnswer();
  }
  renderRound();
});


// Обработчик при правильном ответе
function trueAnswer() {
  $('#true-answer').css('display', 'block');
  level++;
  show(level);
  let audioStartGame = new Audio('./audio/next-question.mp3');
  audioStartGame.play();
}

// Обработчик информации и контента после раунда
function renderRound() {

  $('#timer_inp').text(32);

  $(tr.css('background', '#fff'));
  $(tr.removeClass('result'));
  $(tr[tr.length - (level)]).css('color', '#42ff5a');
  $(tr[tr.length - (level)]).addClass('result');
  $('label').css('color', '#ffffff');
  $(tr[tr.length - (level + 1)]).css('color', 'white');

  setTimeout(function () {
    $('#true-answer').css('display', 'none')
  }, 2500);
}

// Обработчик неправильного ответа
function wrongAnswer() {
  if (level >= 4) {
    saveResult();
  }
  $('#b').css('background', 'url(./images/wrong_anwser_bg.jpg)');
  setTimeout(function () {
    gameOwer();
    $('#b').css('background', 'url(./images/anwser_bg.jpg)');
  }, 3000);
}

// Сделать рандомное число
Math.rand = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

// Функция подсказки 50/50
let audioHelp = new Audio('./audio/help.mp3');
let inputLink = document.getElementById('question_answer').getElementsByTagName('a');
$('#help1').click(function () {
  let inputAnswer = document.getElementsByClassName('answer');
  let exp = [];
  let count = 0;
  while (count < 2) {
    let index = Math.rand(0, 3);
    if (exp.indexOf(index) == -1 && inputAnswer[index].text != key[level]) {
      $(inputLink[index]).text('');
      count++;
      exp.push(index);
      audioHelp.play();
    }
  }
  $(this).off('click');
  $(this).css('opacity', '0.3');
});

// Функции обработка подсказок звонка другу и помощи зала
$('#help2').click(function () {
  $(inputLink[Math.rand(0, 3)]).css('color', '#b4ff92');
  $(this).off('click');
  $(this).css('opacity', '0.3');
  audioHelp.play();
});
$('#help3').click(function () {
  $(inputLink[Math.rand(0, 3)]).css('color', '#b4ff92');
  $(this).off('click');
  $(this).css('opacity', '0.3');
  audioHelp.play();
});


// Победа в игре
function win() {

  $('.winner').css('display', 'block');
  audioRound.pause();
  let audioWinGame = new Audio('./audio/win.mp3');
  audioWinGame.play();
  saveResult();
}

// Проигрыш в игре
function gameOwer() {
  $('.end').css('display', 'block');
}

// Запуск таймера и проверки на состояние игры и отратного отсчета
function timerGame() {

  let objTimer = document.getElementById('timer_inp');
  objTimer.innerHTML--;

  if (objTimer.innerHTML == 0) {
    setTimeout(function () {
    }, 1000);
    gameOwer();
  } else {
    setTimeout(timerGame, 1000);
  }
}

// Запуск таймера раунда
timerGame();
// Остановка аудио при перезагрузке станицы
document.ready = audioRound.pause();


var player = new Player();

// ***************Функция-конструктор**************

function Player(player) {
  var self = this;
  self.playerInfo = {}; //имя и уровень игрока
}

/**
 * Функция для сохраниения результатов игры
 */
function saveResult() {
  var askName = prompt('Введите ваше имя: ', 'player');
  player.playerInfo.name = askName || 'player';
  player.playerInfo.level = level;
  sendResult();
  return true;
}

// Обновление рекордов
(function refreshRecords() {
  $.ajax(
    {
      url: Server,
      type: 'POST',
      data: {f: 'READ', n: storeageMail},
      cache: false,
      success: ReadReady,
      error: ErrorHandler
    }
  );
})();

// **********************  AJAX  ***********************************
var resultArray = [];
var Server = "http://fe.it-academy.by/AjaxStringStorage2.php";
var storeageMail = 'KOVALCHUK_DRINKS_STORAGE';
var UpdatePassword;

// ****************** Refresh results******************
function refreshRecords() {
  $.ajax(
    {
      url: Server,
      type: 'POST',
      data: {f: 'READ', n: storeageMail},
      cache: false,
      success: ReadReady,
      error: ErrorHandler
    }
  );
}

function ReadReady(resultData) {
  if (resultData.error !== undefined)
    alert(resultData.error);
  else {
    resultArray = [];
    if (resultData.result !== "") {
      resultArray = JSON.parse(resultData.result);
      if (!resultArray.length)
        resultArray = [];
    }
  }
}

//**************   add result  *****************
function sendResult() {
  UpdatePassword = Math.random();
  $.ajax(
    {
      url: Server,
      type: 'POST',
      data: {
        f: 'LOCKGET', n: storeageMail,
        p: UpdatePassword
      },
      cache: false,
      success: LockGetReady,
      error: ErrorHandler
    }
  );
}

function LockGetReady(resultData) {
  if (resultData.error !== undefined)
    alert(resultData.error);
  else {
    resultArray = [];
    if (resultData.result !== '') {
      resultArray = JSON.parse(resultData.result);
      if (!resultArray.length)
        resultArray = [];
    }

    var playerName = player.playerInfo.name || 'player';
    var playerLevel = player.playerInfo.level || 0;
    resultArray.push({name: playerName, level: playerLevel});
    if (resultArray.length > 5)
      resultArray = resultArray.slice(resultArray.length - 5);

    $.ajax(
      {
        url: Server,
        type: 'POST',
        data: {
          f: 'UPDATE', n: storeageMail,
          v: JSON.stringify(resultArray), p: UpdatePassword
        },
        cache: false,
        success: UpdateReady,
        error: ErrorHandler
      }
    );
  }
}

function UpdateReady(resultData) {
  if (resultData.error !== undefined)
    alert(resultData.error);
}

function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
  console.log(StatusStr + ' ' + ErrorStr);
}

refreshRecords();
