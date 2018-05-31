const frameModule = require("ui/frame");
let page;

exports.loaded = function(arg) {
    console.log("entered login page");
    page = arg.object;
};

exports.signIn = function() {
    let email = page.getViewById("email");
    alert(email.text);
};

exports.register = function() {
    const topmost = frameModule.getFrameById('topmost');
    topmost.navigate("views/register/register");
};