const { app, BrowserWindow } = require("electron");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "ImageShrink",
    width: 500,
    height: 600,
    icon: "./assets/icons/favicon-64x64.png",
  });

  mainWindow.loadFile("./app/index.html");
}

app.on("ready", createMainWindow);
