// Список вопросов
var question = [
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
var answer = [
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
var key = [
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

var level = 0;

var name = 'name';
var username = readCookie(name);
var audioRound = new Audio('./audio/round.mp3');

if (username != null) {
  $('.start').css('display', 'none');
  $('.reStart').css('display', 'block');
  $('.hellow').text('С возвращением, ' + username + '!');

  $('#startGame').click(function () {

    $('.reStart').css('display', 'none');
    setTimeout(timerGame, 1000);
  });
}

function show(level) {

  $('.question').text(question[level]);
  $('#a').text(answer[level * 4]);
  $('#b').text(answer[level * 4 + 1]);
  $('#c').text(answer[level * 4 + 2]);
  $('#d').text(answer[level * 4 + 3]);

  audioRound.play();
}

var resultConst = [];
show(level);

// Обработка счетчика очков
var tr = $('tr');
$(tr[tr.length - (level + 1)]).css('color', 'white');

// Обработка правильны/непавильных ответов
$('#a').click(function () {

  $('#timer_inp').text(30);

  if (document.getElementById('a').textContent == key[level]) {
    level++;
    alert('И это правильный ответ!');
    show(level);
  } else {
    gameOwer();
  }
  $(tr.css('background', '#fff'));
  $(tr.removeClass('result'));
  $(tr[tr.length - (level + 1)]).css('background', '#FF0');
  $(tr[tr.length - (level)]).css('color', '#42ff5a');
  $(tr[tr.length - (level)]).addClass('result');
  $('label').css('color', '#ffffff');
  $(tr[tr.length - (level + 1)]).css('color', 'white');

  if (level == 5 || level == 10 || level == 15) {
    resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
  }
});

$('#b').click(function () {

  $('#timer_inp').text(30);

  if (document.getElementById('b').textContent == key[level]) {
    level++;
    alert('И это правильный ответ!');
    show(level);
  } else {
    gameOwer();
  }

  $(tr.css('background', '#fff'));
  $(tr.removeClass('result'));
  $(tr[tr.length - (level + 1)]).css('background', '#FF0');
  $(tr[tr.length - (level)]).css('color', '#42ff5a');
  $(tr[tr.length - (level)]).parent().css('background', '#42ff5a');
  $(tr[tr.length - (level)]).addClass('result');
  $(tr[tr.length - (level + 1)]).css('color', 'white');

  if (level == 5 || level == 10 || level == 15) {
    resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
  }
});

$('#c').click(function () {

  $('#timer_inp').text(30);

  if (document.getElementById('c').textContent == key[level]) {
    level++;
    alert('И это правильный ответ!');
    show(level);
  } else {
    gameOwer();
  }

  $(tr.css('background', '#fff'));
  $(tr.removeClass('result'));
  $(tr[tr.length - (level + 1)]).css('background', '../img/money_bg.gif');
  $(tr[tr.length - (level)]).css('background', './img/money_bg.gif');
  $(tr[tr.length - (level)]).addClass('result');
  $('label').css('color', '#ffffff');
  $(tr[tr.length - (level + 1)]).css('color', 'white');

  if (level == 5 || level == 10 || level == 15) {
    resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
  }
});

$('#d').click(function () {

  $('#timer_inp').text(30);

  if (document.getElementById('d').textContent == key[level]) {
    level++;
    alert('И это правильный ответ!');
    show(level);

    var audioStartGame = new Audio('./audio/next-question.mp3');
    audioStartGame.play();
  } else {
    gameOwer();
  }

  $(tr.css('background', '#fff'));
  $(tr.removeClass('result'));
  $(tr[tr.length - (level + 1)]).css('background', '#FF0');
  $(tr[tr.length - (level)]).css('color', '#42ff5a');
  $(tr[tr.length - (level)]).addClass('result');
  $('label').css('color', '#ffffff');
  $(tr[tr.length - (level + 1)]).css('color', 'white');

  if (level == 5 || level == 10 || level == 15) {
    resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
  }
});

// Сделать рандомное число
Math.rand = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};
// Функция подсказки 50/50
var audioHelp = new Audio('./audio/help.mp3');
var inputLink = document.getElementById('question_answer').getElementsByTagName('a');
$('#help1').click(function () {
  var inputAnswer = document.getElementsByClassName('answer');
  var exp = [];
  var count = 0;
  while (count < 2) {
    var index = Math.rand(0, 3);
    if (exp.indexOf(index) == -1 && $(inputAnswer[index]).text != key[level]) {
      $(inputLink[index]).text('');
      count++;
      exp.push(index);
      audioHelp.play();
    }
  }
  $(this).off('click');
  $(this).css('opacity', '0.3');
});
// Заполнение графы счета
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

var result = $('.result');
$('.roundEnd').click(function () {
  end();
});

// Победа в игре
function end() {

  $('.winner').css('display', 'block');

  if (tr.hasClass('result')) {
    var tdResult = $("tr.result").children();
    var tdText = tdResult[1].textContent;
    $('.showResult').text('ВЫ ВЫИГРАЛИ: ' + tdText + ' . Поздравляем!');

    var audioWinGame = new Audio('./audio/win.mp3');
    audioWinGame.play();
    audioRound.pause();
  }
}
// Проигрыш в игре
function gameOwer() {

  $('.end').css('display', 'block');
  var audioEndGame = new Audio('./audio/end-time.mp3');
  audioEndGame.play();
  audioRound.pause();
  if (tr.hasClass('resultConst')) {
    var tdResult1 = $(resultConst[resultConst.length - 1]).children();
    var tdText1 = tdResult1[1].textContent;
    $('.showResult').text('Вы можете занимать ' + tdText1 + ' позицию.');
  }
}

// Запуск таймера и проверки на состояние игры
function timerGame() {

  var objTimer = document.getElementById('timer_inp');
  objTimer.innerHTML--;

  if (objTimer.innerHTML == 0) {
    setTimeout(function () {
    }, 1000);
    gameOwer();
  } else {
    setTimeout(timerGame, 1000);
  }
}
$('form').submit(function (e) {
  e.preventDefault();
});

// Функция старта игры
$('#start').click(function () {

  var audioStartGame = new Audio('./audio/start-game.mp3');
  audioStartGame.play();

  if ($('#user').val() != '') {
    $('.start').css('display', 'none');
    setTimeout(timerGame, 1000);
  } else {
    $('#user').css('background', '#f30');
  }

var value = $('#user').val();
  createCookie(name, value, 1);
});
// Создание Cookie
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
// Функция для чтения Cookie
function readCookie(name) {

  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      var value = c.substring(nameEQ.length, c.length);
      return value.split(",");
    }
  }
  return null;
}
