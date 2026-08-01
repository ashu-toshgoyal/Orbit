const { app, BrowserWindow, nativeImage } = require("electron")
const mainWindow = require("./windows/mainwindow")
const path = require('path');
const { IncomingMessage } = require("http");

app.setName("Orbit")

app.whenReady().then(()=>{
//     const icon = nativeImage.createFromPath(
//     path.join(__dirname, "../../assets/icons/icon.png")
// );


//     app.dock.setIcon(icon)
    mainWindow()
})