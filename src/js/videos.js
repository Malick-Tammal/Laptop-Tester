/*------ Importing ipcRenderer ------*/
const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

/*------ When press escape button exit video / sending to main process ------*/
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    ipc.send("exit_video");
  }
});
