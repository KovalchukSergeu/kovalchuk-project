var question = [
  'Какие конструкции для циклов есть в javascript?',
  'Какая функция используется, если нужно спросить пользователя о чем-то и принять ответ "да" или "нет"?',
  'Укажите синтаксически неправильный вариант создания массива.',
  'Что такое ECMAScript?',
  'Что получится, если сложить true + false?',
  'Верно ли, что null == undefined?',
  'Что будет, если вызвать document.write(str) после загрузки страницы?',
  'Можно ли скриптом перевести посетителя на другую страницу сайта?',
  'Сколько параметров можно передать функции ?',
  'Чем отличаются стандарты DOM Level 2 и DOM Level 3?',
  'В каком городе находится штаб-квартира Microsoft?',
  'In the browser, the global execution context is:',
  'Why do we need the event object for handling keyboard events?',
  'DOM events are processed when: ',
  'Which of the following methods creates a new function with preset arguments?'
];
var answer = [
  'Только две: for и while.', 'Три: for, while и do...while.', 'Только одна: for.', 'Четыре: for, while, do..while и for..while',
  'eval()', 'prompt()', 'alert()', 'confirm()',
  'var a = new Array(1,2,3);', 'var a = [1,2,3];', 'var a = new Array();', 'var a = new [1,2,3];',
  'Новый язык программирования.', 'Переработанная реализация Javascript.', 'Спецификация языка Javascript.', 'Библеотека языка Javascript',
  'undefined', '0', 'NaN', '1',
  'Нет.', 'Да.', 'Наверное.', 'Потом в консоли посмотрю.',
  'Строка str заменит последний элемент в DOM.', 'Строка str допишется в конец документа.', 'Будет ошибка.', 'Содержимое документа будет полностью заменено на строку str.',
  'Нет, нельзя.', 'Да, но только в рамках текущего сайта.', 'Да, куда угодно.', 'Нет, только с другой вкладки.',
  'Любое количество.', 'Ровно столько, сколько указано в определении функции.', 'Сколько указано в определении функции или больше.', 'Сколько указано в определении функции или меньше.',
  'DOM Level 3 работает в 3 раза быстрее, чем DOM Level 1, а DOM Level 2 – только в 2 раза.', 'DOM Level 3 появился позже чем DOM Level 2, он доопределяет DOM-свойства и события.', 'DOM Level 3 описывает только события, а DOM Level 2 – только свойства элементов.', 'Хорош выдумывать, какой ещё DOM Level? Есть только «просто DOM».',
  'Нью-Йорк', 'Ричмонд', 'Новый Орлеан', 'Сиэтл',
  'document', 'null', 'browser', 'window',
  'Because it carries the keycode property', 'Because it carries the target element', 'Because it allows event bubbling to happen', 'Because it allows us to use event delegation',
  'The scope chain is empty', 'The execution stack is empty', 'There are no other events', 'There are no active closures',
  'Function.apply()', 'Function.bind()', 'Function.call()', 'Function.bind()'
];
var key = [1, 3, 3, 2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];

var level = 0;

var name = 'name';
var username = readCookie(name);

if (username != null) {
  $('.start').css('display', 'none');
  $('.reStart').css('display', 'block');
  $('.hellow').text('С возвращением, ' + username + '!');

  $('#startGame').click(function () {

    $('.reStart').css('display', 'none');
    setTimeout(timer, 1000);

  });
}

function show(level) {

  $('.question').text(question[level]);
  $('label[for=answer1]').text(answer[level * 4 + 0]);
  $('label[for=answer2]').text(answer[level * 4 + 1]);
  $('label[for=answer3]').text(answer[level * 4 + 2]);
  $('label[for=answer4]').text(answer[level * 4 + 3]);

}

var resultConst = [];
show(level);
var tr = $('tr');
$(tr[tr.length - (level + 1)]).css('background', '#FF0');

$('.btn').click(function () {

  $("#timer_inp").text(60);

  if ($('input[name=answer]:checked').val() == key[level]) {
    level++;
    show(level);
  } else {
    gameOwer()
  }

  $('input').prop('checked', false);
  $(tr.css('background', '#fff'));
  $(tr.removeClass('result'));
  $(tr[tr.length - (level + 1)]).css('background', '#FF0');
  $(tr[tr.length - (level)]).css('color', '#42ff5a');
  $(tr[tr.length - (level)]).addClass('result');
  $('label').css('color', '#ffffff');

  if (level == 5 || level == 10 || level == 15) {
    resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
  }
});

Math.rand = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var inputLabel = document.getElementsByTagName('label');
$('.round50').click(function () {
  var inputAnswer = document.getElementsByName('answer');
  var exp = [];
  var count = 0;
  while (count < 2) {
    var index = Math.rand(0, 3);
    if (exp.indexOf(index) == -1 && $(inputAnswer[index]).val() != key[level]) {
      $(inputLabel[index]).css('color', '#69f');
      count++;
      exp.push(index);
    }
  }
  $(this).off('click');
  $(this).css('background', 'red');
});


$('.round').click(function () {

  $(inputLabel[Math.rand(0, 3)]).css('color', '#F90'),
    $(this).off('click');
  $(this).css('background', 'red');

});

var result = $('.result');
$('.roundEnd').click(function () {

  end();

});


function end() {

  $('.end').css('display', 'block');

  if (tr.hasClass('result')) {
    var tdResult = $("tr.result").children();
    var tdText = tdResult[1].textContent;
    $('.showResult').text('ВЫ ВЫИГРАЛИ: ' + tdText + ' гривень');
  }
}

function gameOwer() {

  $('.end').css('display', 'block');

  if (tr.hasClass('resultConst')) {
    var tdResult1 = $(resultConst[resultConst.length - 1]).children();
    var tdText1 = tdResult1[1].textContent;
    $('.showResult').text('Вы можете занимать ' + tdText1 + ' позицию.');
  }
}

function timer() {

  var objTimer = document.getElementById('timer_inp');
  objTimer.innerHTML--;

  if (objTimer.innerHTML == 5) {
    $('#timer_inp').css('background', 'red');
  } else if (objTimer.innerHTML == 0) {
    setTimeout(function () {
    }, 1000);
    gameOwer();
  } else {
    setTimeout(timer, 1000)
  }

}

$('form').submit(function (e) {

  e.preventDefault()

});

$('#start').click(function () {

  if ($('#user').val() != '') {
    $('.start').css('display', 'none');
    setTimeout(timer, 1000);
  } else {
    $('#user').css('background', '#f30')
  }

  var value = $('#user').val();

  createCookie(name, value, 1);

});

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
