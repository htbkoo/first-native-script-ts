// import * as observableModule from "tns-core-modules/data/observable";
// import * as frameModule from "tns-core-modules/ui/frame";
import * as frameModule from "ui/frame/frame";
import * as observableModule from "data/observable";
// const frameModule = require("ui/frame");
// const observableModule = require("data/observable");

// const user = new observableModule.fromObject({
const user = observableModule.fromObject({
    email: "user@domain.com",
    password: "password"
});

let page;

export function loaded(arg) {
    console.log("entered login page");
    page = arg.object;
    page.bindingContext = user;
}

export function signIn() {
    let email = page.getViewById("email");
    alert(email.text);
}

export function register() {
    const topmost = frameModule.getFrameById('topmost');
    topmost.navigate("views/register/register");
}