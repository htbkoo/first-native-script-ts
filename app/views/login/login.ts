const frameModule = require("ui/frame");

exports.loaded = function() {
    console.log("hello");
};

exports.signIn = function() {
    alert("Signing in");
};

exports.register = function() {
    const topmost = frameModule.getFrameById('topmost');
    topmost.navigate("views/register/register");
};