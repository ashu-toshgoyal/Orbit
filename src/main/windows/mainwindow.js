const { BrowserWindow } = require("electron");
const path = require("path");

function mainWindow() {

    const window = new BrowserWindow({
        titleBarStyle: "hidden",
        width: 1200,
        height: 800,
        resizable:false,
        maximizable:false,
        minimizable:true

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