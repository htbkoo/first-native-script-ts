import * as login from "./login";

describe("login", function () {
    // jest.mock('tns-core-modules/ui/frame');

// import * as frameModule from "ui/frame";
//     const login = require("./login.ts");


    it("should navigate to register page when register()", function () {
        // given
        let mockNavigate = jest.fn();
        // frameModule["__setFrameById"]("topmost", {navigate: mockNavigate});

        // when
        login["register"]();

        // then
        expect(mockNavigate.mock.calls.length).toEqual(1);
        expect(mockNavigate.mock.calls[0][0]).toEqual("views/register/register");
    });
});