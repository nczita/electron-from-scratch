const { app, BrowserWindow } = require("electron");

process.env.NODE_ENV = "development";

const isMac = process.platform === "darwin";
const isDev = process.env.NODE_ENV !== "production";

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "ImageShrink",
    width: 500,
    height: 600,
    icon: "./assets/icons/favicon-64x64.png",
    resizable: isDev,
  });

  mainWindow.loadFile("./app/index.html");
}

app.on("ready", createMainWindow);

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
