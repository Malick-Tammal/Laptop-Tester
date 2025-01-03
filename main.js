/*------ Optimizing tha app by v8 cache ------*/
require("v8-compile-cache");

console.time("app_startup_time");

/*------ Importing electron and some other things------*/
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ipc = ipcMain;
const { autoUpdater } = require("electron-updater");

/*------ Defining main window and app name ------*/
const appName = "Laptop Tester";
let mainWin;

const isDev = !app.isPackaged;

/*------ Configuring main window ------*/
const createMainWin = () => {
  mainWin = new BrowserWindow({
    minWidth: 1000,
    minHeight: 600,
    width: 1000,
    height: 600,
    title: appName,
    icon: path.join(__dirname, "./asset/photos/icon.ico"),
    resizable: true,
    frame: false,
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWin.loadFile("./src/index.html");

  // Dev tools
  if (isDev) mainWin.webContents.openDevTools({ mode: "detach" });

  /*------ Mem garbage collection ------*/
  mainWin.on("close", () => {
    mainWin = null;
  });

  /*------ Disabling keyboard shortcuts ------*/
  mainWin.webContents.on("before-input-event", (event, input) => {
    if (input.control && input.key.toLowerCase() === "r") {
      event.preventDefault();
    } else if (input.control && input.key.toLowerCase() === "w") {
      event.preventDefault();
    }
  });
};

/*------ Creating window when app started ------*/
app.whenReady().then(() => {
  createMainWin();
});

/*------ App quit functions------*/
app.on("window-all-closed", () => {
  app.quit();
});

/*------ Sending app name and pc username and app version to renderer process ------*/
ipc.on("get_data", (event) => {
  const os = require("os");

  event.sender.send("app_name", { title: appName });
  event.sender.send("user_name", { userName: os.userInfo().username });
  event.sender.send("app_version", { appVersion: app.getVersion() });
});

/*------ Close / Minimize / Maximize functions ------*/
ipc.on("close_the_app", () => {
  app.quit();
});
ipc.on("minimize_the_app", () => {
  mainWin.minimize();
});
ipc.on("maximize_the_app", () => {
  if (mainWin.isMaximized()) {
    mainWin.restore();
  } else {
    mainWin.maximize();
  }
});

/*------ Getting the app fullscreen when called from renderer process ------*/
ipc.on("get_fullscreen", () => {
  mainWin.setFullScreen(true);
});
ipc.on("restore_screen", () => {
  mainWin.setFullScreen(false);
});

/*------ Update system ------*/
autoUpdater.autoDownload = false;

ipc.on("app_is_online", () => {
  autoUpdater.checkForUpdates();
});

/*--- Check for an update ---*/
ipc.on("check_for_update", () => {
  autoUpdater.checkForUpdates();
});

/*--- Update available ---*/
autoUpdater.on("update-available", (info) => {
  mainWin.webContents.send("update_available", {
    updateVersion: info.releaseName,
    releaseDate: info.releaseDate,
  });
});

/*--- Update not available ---*/
autoUpdater.on("update-not-available", () => {
  mainWin.webContents.send("no_update_available");
});

/*--- Download progress info ---*/
autoUpdater.on("download-progress", (progressObj) => {
  mainWin.webContents.send("download_progress", {
    percent: progressObj.percent,
    size: progressObj.total,
    speed: progressObj.bytesPerSecond,
  });
});

/*--- Update downloaded---*/
autoUpdater.on("update-downloaded", () => {
  mainWin.webContents.send("update_downloaded");
});

/*--- Update get error ---*/
autoUpdater.on("error", (message) => {
  mainWin.webContents.send("update_error", {
    error: message.stack.substring(0, 143),
  });
});

/*--- Download update when click btn ---*/
ipc.on("download_update", () => {
  autoUpdater.downloadUpdate();
});

/*--- Restart the app when click btn ---*/
ipc.on("restart_the_app", () => {
  autoUpdater.quitAndInstall(true, true);
});
