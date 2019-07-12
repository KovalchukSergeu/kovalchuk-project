window.onhashchange = renderNewState;

// ****************** Refresh results******************
var resultArray = [];
var Server = "http://fe.it-academy.by/AjaxStringStorage2.php";
var storeageMail = 'TEST_GAME_DB';

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

function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
  console.log(StatusStr + ' ' + ErrorStr);
}

function renderNewState() {
  var hash = window.location.hash;
  var state = decodeURIComponent(hash.substr(1));
  if (state === '') { // если пустой значит мы зашли в первый раз
    state = {
      page: 'main'
    }
  } else {
    state = JSON.parse(state); // иначе пробуем парсить состояние
  }
  var page = '';

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
      break;

    case 'rules':
      page += '<div class="container">';
      page += '<input type="button" class="buttons" value="Вернуться к главному меню" onclick="switchToStart()">';
      page += ' <div class="rules">Игра "Кто хочет стать программистом".</br> Смысл игры в тренировке своих знаний в области программирования на языке "JavaScript"</br> Created by Ковальчук Сергей</div>';
      page += '</div>';
      break;

    case 'records':
      page += '<div class="container">';
      page += '<input type="button" class="buttons" value="Вернуться к главному меню" onclick="switchToStart()">';
      page += '<table class="tableRecords">';
      page += `<tr class="table-cell"><th class="table-cell">Игрок</th><th class="table-cell">Время</th></tr>`;
      for (var i = 0; i < resultArray.length; i++) {
      page += `<tr class="table-cell"><td class="table-cell" id="igrok">${resultArray[i].name}</td><td class="table-cell" id="itog">${resultArray[i].time}</td></tr>`;
      }
      page += '</table>';
      page += '</div>';
      break;
  }

  document.getElementById('page').innerHTML = page;
}

function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}

function switchToStart() {
  switchToState({page: 'main'});
  $('.end').css('display', 'none');
}

function switchToGame() {
  switchToState({page: 'game'});
  $('.main').css('display', 'block');
}

function switchToRules() {
  switchToState({page: 'rules'});
}

function switchToRecords() {
  switchToState({page: 'records'});
}
//
// function gameStart() {
//   document.location.reload(true);
// }

renderNewState();
