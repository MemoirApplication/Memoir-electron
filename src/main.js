const { app, BrowserWindow } = require("electron");
// app.disableHardwareAcceleration();

// Create the main window
let mainWindow;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1200,
    minHeight: 800,
    autoHideMenuBar: true,
    webPreferences: {
      //preload: path.join(__dirname, "preload.js"),
      //enableRemoteModule: true,
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
    const startUrl = "https://open-memoir.vercel.app/documents/";
    mainWindow.loadURL(startUrl);

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}
//app.commandLine.appendSwitch('disable-gpu');
app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
