require("electron-reload")(__dirname);
const { app, BrowserWindow } = require("electron")

const createMenu = require('./components/menu')
app.setName("Orbit")

function createWindow() {

    const win = new BrowserWindow({
        // frame:false,
        width:1000,
        height:700,
        titleBarStyle: "hiddenInset"
    })

    win.loadFile("index.html")
    win.maximize()

    win.setTitle("Orbit")
    win.on("blue",()=>{
        console.log("Focus lost")
    })
}

app.whenReady().then(()=>{
    createMenu()
    createWindow()
})