const { app, Menu, Tray } = require("electron");

class AppTray extends Tray {
  constructor(icon, mainWindow) {
    super(icon);
    const contextMenu = Menu.buildFromTemplate([
      {
        label: "SysTop",
        click: () => {
          if (mainWindow.isVisible()) {
            mainWindow.hide();
          } else {
            mainWindow.show();
          }
        },
      },
      {
        label: "Quit",
        click: () => {
          app.isQuitting = true;
          app.quit();
        },
      },
    ]);
    this.setContextMenu(contextMenu);
    // https://github.com/electron/electron/issues/25976
    this.setToolTip("SysTop");
  }
}

module.exports = AppTray;
