/*------ Importing system information package ------*/
const si = require("systeminformation");

/*------ Getting system infos / adding loading animation ------*/
const specs = document.querySelectorAll(".spec");
const sysContainer = document.querySelector(".system-container");
const sysInfoLoading = document.querySelector(".sys-info-loading");

/*------ Sizes converter ------*/
function convertToGB(bytesValue) {
  let gbValue = Math.floor(bytesValue / 1000 ** 3);
  return gbValue;
}

/*------ When link pressed get system info / ? for quick startup ------*/
const checkPcInfo = () => {
  si.osInfo()
    .then((data) => {
      /*---- OS data ----*/

      specs[0].innerText = `${data.distro} ${data.arch} Build ${data.build}`;
    })
    .catch((err) => {
      specs[0].innerText = err;
    });

  si.cpu()
    .then((data) => {
      /*---- CPU data ----*/

      specs[1].innerText = `${data.manufacturer} ${data.brand} ${data.speed}GHZ ${data.physicalCores} Cores`;
    })
    .catch((err) => {
      specs[1].innerText = err;
    });

  si.memLayout()
    .then((data) => {
      /*---- RAM data ----*/

      if (data.length === 1) {
        specs[2].innerText = `Slot 1 : ${convertToGB(data[0].size)}GB ${
          data[0].type
        } ${data[0].clockSpeed}MHZ ${data[0].manufacturer}`;
      } else {
        specs[2].innerText = `Slot 1 : ${convertToGB(data[0].size)}GB ${
          data[0].type
        } ${data[0].clockSpeed}MHZ ${
          data[0].manufacturer
        } | Slot 2 : ${convertToGB(data[1].size)}GB ${data[1].type} ${
          data[1].clockSpeed
        }MHZ ${data[1].manufacturer}`;
      }
    })
    .catch((err) => {
      specs[2].innerText = err;
    });

  si.graphics()
    .then((data) => {
      /*---- GPU data ----*/

      if (data.controllers.length === 1) {
        specs[3].innerText = `GPU 1 : ${
          data.controllers[0].model
        } Vram ${convertToGB(data.controllers[0].vram * 1000000)}GB ${
          data.controllers[0].bus
        }`;
      }
      if (data.controllers.length === 2) {
        specs[3].innerText = `GPU 1 : ${
          data.controllers[0].model
        } Vram ${convertToGB(data.controllers[0].vram * 1000000)}GB ${
          data.controllers[0].bus
        } | GPU 2 : ${data.controllers[1].model} Vram ${convertToGB(
          data.controllers[1].vram * 1000000
        )}GB ${data.controllers[1].bus}`;
      }
    })
    .catch((err) => {
      specs[3].innerText = err;
    });

  si.diskLayout()
    .then((data) => {
      /*---- DISK data ----*/

      if (data.length === 1) {
        specs[4].innerText = `Disk 1 : ${convertToGB(data[0].size)}GB ${
          data[0].type
        } ${data[0].vendor} ${data[0].interfaceType}`;
      }
      if (data.length === 2) {
        specs[4].innerText = `Disk 1 : ${convertToGB(data[0].size)}GB ${
          data[0].type
        } ${data[0].vendor} ${data[0].interfaceType} | Disk 2 : ${convertToGB(
          data[1].size
        )}GB ${data[1].type} ${data[1].vendor} ${data[1].interfaceType}`;
      }
      sysContainer.classList.add("show");
      sysInfoLoading.classList.remove("show");
    })
    .catch((err) => {
      specs[4].innerText = err;
    });
};

links[0].addEventListener(
  "click",
  () => {
    checkPcInfo();
    sysInfoLoading.classList.add("show");
  },
  { once: true }
);
