window.onload = function () {

  var audio = document.querySelector('audio');
  var time = 0;
  (function timer() {
    document.querySelector('#timer').innerHTML = time;
    time = setTimeout(timer, 1000);
    audio.play();
  })();

  // **********************  AJAX  ***********************************
//   var resultArray = [];
//   var Server = "http://fe.it-academy.by/AjaxStringStorage2.php";
//   var storeageMail = 'TEST_GAME_DBW';
//   var UpdatePassword;
//
//   // ****************** Refresh results******************
//   function refreshRecords() {
//     $.ajax(
//       {
//         url: Server,
//         type: 'POST',
//         data: {f: 'READ', n: storeageMail},
//         cache: false,
//         success: ReadReady,
//         error: ErrorHandler
//       }
//     );
//   }
//
//   function ReadReady(resultData) {
//     if (resultData.error !== undefined)
//       alert(resultData.error);
//     else {
//       resultArray = [];
//       if (resultData.result !== "") {
//         resultArray = JSON.parse(resultData.result);
//         if (!resultArray.length)
//           resultArray = [];
//       }
//     }
//   }
//
//   //**************   add result  *****************
//   function sendResult() {
//     UpdatePassword = Math.random();
//     $.ajax(
//       {
//         url: Server,
//         type: 'POST',
//         data: {
//           f: 'LOCKGET', n: storeageMail,
//           p: UpdatePassword
//         },
//         cache: false,
//         success: LockGetReady,
//         error: ErrorHandler
//       }
//     );
//   }
//
//   function LockGetReady(resultData) {
//     if (resultData.error !== undefined)
//       alert(resultData.error);
//     else {
//       resultArray = [];
//       if (resultData.result !== '') {
//         resultArray = JSON.parse(resultData.result);
//         if (!resultArray.length)
//           resultArray = [];
//       }
//
//       var playerName = player.playerInfo.name || 'player';
//       var playerTime = player.playerInfo.time || 0;
//       resultArray.push({name: playerName, time: playerTime});
//       if (resultArray.length > 5)
//         resultArray = resultArray.slice(resultArray.length - 5);
//
//       $.ajax(
//         {
//           url: Server,
//           type: 'POST',
//           data: {
//             f: 'UPDATE', n: storeageMail,
//             v: JSON.stringify(resultArray), p: UpdatePassword
//           },
//           cache: false,
//           success: UpdateReady,
//           error: ErrorHandler
//         }
//       );
//     }
//   }
//
//   function UpdateReady(resultData) {
//     if (resultData.error !== undefined)
//       alert(resultData.error);
//   }
//
//   function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
//     console.log(StatusStr + ' ' + ErrorStr);
//   }
//
//   refreshRecords();
// };
