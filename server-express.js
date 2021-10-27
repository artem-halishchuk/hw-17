//npm i --save express - команда для установки express
let express = require('express'); //подключаем модуль express
let app = express(); //создали приложение(сервер) на основе express вызвав его как функцию
app.use('/assets', express.static(__dirname+'/files'));
app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html'); //устанавливаем заголовок
    response.sendFile(__dirname+'/pages/index.html'); //путь к файлу должен быть полный
})
// app.get('/hello', (request, response) => {
//     let example = {
//         name: 'vasia',
//         surname: 'pipkin'
//     };
//     response.setHeader('Content-Type', 'application/json');
//     response.send(JSON.stringify(example));
// })
app.listen(3000);//запускаем пролежение на порту 3000