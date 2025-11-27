const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
     icon: path.join(__dirname, "assets", "image.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // arahkan langsung ke Laravel
  win.loadURL("http://127.0.0.1:8000");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
