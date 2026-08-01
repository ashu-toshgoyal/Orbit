const { app, BrowserWindow } = require("electron")
const mainWindow = require("./windows/mainwindow")
app.setName("Orbit")

app.whenReady().then(()=>{
    mainWindow()
})