const { app, BrowserWindow } = require("electron")
const path = require("path")

let mainWindow

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false, 
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  })
  mainWindow.removeMenu();
  mainWindow.maximize();
  

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:5173")
  } else {
    mainWindow.loadURL("http://localhost:5173")
  }

  mainWindow.once("ready-to-show", () => {
    mainWindow.show()
  })
})
