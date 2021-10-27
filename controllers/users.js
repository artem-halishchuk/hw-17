let bodyParser = require('body-parser');
module.exports = (app, path) => {
    let jsonParser = bodyParser.json();
    let controller = new UsersController(path);
    app.post('/users', jsonParser,controller.ex.bind(controller));
}
class UsersController{
    constructor(path) {
        this.path = path;
        this.users = [];
    }
    ex(request, response) {
        //console.log(request.body);
        let user = request.body;
        this.users.push(user.user);
        let obj = {
            name: user.user.toUpperCase()
        }
        //response.send(JSON.stringify(obj));
        response.send(this.users);
    }
}