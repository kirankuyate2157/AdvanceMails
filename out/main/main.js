"use strict";
const electron = require("electron");
require("path");
let mainWindow;
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 1200,
    height: 800
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadURL("http://localhost:5173");
  mainWindow.on("closed", () => mainWindow = null);
}
electron.app.whenReady().then(() => {
  createWindow();
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});
