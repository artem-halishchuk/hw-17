module.exports = (app, path) => {
    let controller = new StaticPagesController(path);
    app.get('/', controller.index.bind(controller));
    app.get('/user/:id', controller.user.bind(controller));
}
class StaticPagesController{
    constructor(path) {
        this.path = path;
    }
    index(request, response) {
        response.setHeader('Content-Type', 'text/html'); //устанавливаем заголовок
        response.sendFile(this.path+'/pages/index.html'); //путь к файлу должен быть полный
    }
    user(request, response) {
        response.setHeader('Content-Type', 'text/html'); //устанавливаем заголовок
        response.send('<h1>'+request.params.id+'</h1>'); //путь к файлу должен быть полный
        console.log(request.params.id);
    }
    404(request, response) {
        response.setHeader('Content-Type', 'text/html'); //устанавливаем заголовок
        response.sendFile(this.path+'/pages/404.html'); //путь к файлу должен быть полный
    }
}