module.exports = getMockFrameModule();

function getMockFrameModule() {
    const frameModule = jest.genMockFromModule('ui/frame');
    const frames = [];

    frameModule["__setFrameById"] = (id: string, frame) => frames[id] = frame;
    frameModule["getFrameById"] = (id: string) => frames[id];

    return frameModule;
}
