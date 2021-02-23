const { BrowserWindow } = require("electron");

class MainWindow extends BrowserWindow {
  constructor(uiFile, isDev) {
    super({
      title: "SysTop",
      width: isDev ? 700 : 355,
      height: 600,
      icon: `${__dirname}/assets/icons/icon.png`,
      resizable: isDev,
      backgroundColor: "white",
      show: false,
      opacity: 0.9,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    this.loadFile(uiFile);

    if (isDev) {
      this.webContents.openDevTools();
    }
  }
}

module.exports = MainWindow;
