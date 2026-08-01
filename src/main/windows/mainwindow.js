const { BrowserWindow } = require("electron");
const path = require("path");

function mainWindow() {

    const window = new BrowserWindow({
        titleBarStyle: "hidden",
        width: 1200,
        height: 800,
        fullscreenable:false

    });

    window.loadFile(
        path.join(
            __dirname,
            "../../renderer/windows/main/index.html"
        )
    );
    
    return window;

}

module.exports = mainWindow;