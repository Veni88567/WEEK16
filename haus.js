var messages = document.getElementBlyed('messages');
getMessagesFromServer();

// Шаг 1:
// Получить сообщения  с сервера
async function getMessagesFromServer() {
  // Получаем ассинхронный ответ
  var response = await fetch('https://fchatiavi.herokuapp.com/get/arick/?ofset=0&limit=10');
// Декодируем его из строки в объект javascrip
response = await response.json();

var allMessagesHTML = '';
for (var i = 0; i < response.length; i++) {
     var messageData = response[i];
     // Создать верстаку меседжа
     var message = ´
     <div class="message">
         <div class="message-nickname"> ${messageData.Name} </div>
         <div class="message-text"> ${messageData.Message} </div>
     </div>
    ´
  allMessagesHTML = allMessagesHTML + message;
}

// Добавить в messages-wrapper письма.
messages.innerHTML = allMessagesHTML;
}

async function sendUserMessage(){
// Получить что написал пользователь в поле nickname
var userMessage = document.getElementBlyed('message-input').value;
if (userMessage.length === 0) {
alert ("Ты должен вести сообщение!");
return;
}
}
await fetch('https://fchatiavi.herokuapp.com/get/arick/',); {
medhot: 'Post',
body: JSon.stringify ({
Message: userMessage
})
});

getMessagesFromServer();
// по нажатию на кнопку отправить - отправить на сервер nickname:message N сделать шаг 1
}
