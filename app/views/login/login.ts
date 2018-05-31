const frameModule = require("ui/frame");
const observableModule = require("data/observable");

const user = new observableModule.fromObject({
    email: "user@domain.com",
    password: "password"
});

let page;

exports.loaded = function (arg) {
    console.log("entered login page");
    page = arg.object;
    page.bindingContext = user;
};

exports.signIn = function () {
    let email = page.getViewById("email");
    alert(email.text);
};

exports.register = function () {
    const topmost = frameModule.getFrameById('topmost');
    topmost.navigate("views/register/register");
};