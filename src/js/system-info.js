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
const checkPcInfo = async () => {
  /*------ Importing system information package ------*/
  const si = require("systeminformation");

  console.log("Getting system data...");

  /*---- OS info ----*/
  console.log("-----OS_INFO-----");
  const os = await si.osInfo();
  specs[0].innerText = `${os.distro} ${os.arch} Build ${os.build}`;
  console.log(os);
  console.log("------------------------------------");

  /*---- CPU info ----*/
  console.log("-----CPU_INFO-----");
  const cpu = await si.cpu();
  specs[1].innerText = `${cpu.manufacturer} ${cpu.brand} ${cpu.speed}GHZ ${cpu.physicalCores} Cores`;
  console.log(cpu);
  console.log("------------------------------------");

  /*---- RAM info ----*/
  console.log("-----RAM_INFO-----");
  const ram = await si.memLayout();
  if (ram.length === 1) {
    specs[2].innerText = `Slot 1 : ${convertToGB(ram[0].size)}GB ${
      ram[0].type
    } ${ram[0].clockSpeed}MHZ ${ram[0].manufacturer}`;
  } else {
    specs[2].innerText = `Slot 1 : ${convertToGB(ram[0].size)}GB ${
      ram[0].type
    } ${ram[0].clockSpeed}MHZ ${ram[0].manufacturer} | Slot 2 : ${convertToGB(
      ram[1].size
    )}GB ${ram[1].type} ${ram[1].clockSpeed}MHZ ${ram[1].manufacturer}`;
  }
  console.log(ram);
  console.log("------------------------------------");

  /*---- GPU info ----*/
  console.log("-----GPU_INFO-----");
  const gpu = await si.graphics();
  if (gpu.controllers.length === 1) {
    specs[3].innerText = `GPU 1 : ${
      gpu.controllers[0].model
    } Vram ${convertToGB(gpu.controllers[0].vram * 1000000)}GB ${
      gpu.controllers[0].bus
    }`;
  }
  if (gpu.controllers.length === 2) {
    specs[3].innerText = `GPU 1 : ${
      gpu.controllers[0].model
    } Vram ${convertToGB(gpu.controllers[0].vram * 1000000)}GB ${
      gpu.controllers[0].bus
    } | GPU 2 : ${gpu.controllers[1].model} Vram ${convertToGB(
      gpu.controllers[1].vram * 1000000
    )}GB ${gpu.controllers[1].bus}`;
  }
  console.log(gpu);
  console.log("------------------------------------");

  /*---- DISK info ----*/
  console.log("-----DISK_INFO-----");
  const disk = await si.diskLayout();
  if (disk.length === 1) {
    specs[4].innerText = `Disk 1 : ${convertToGB(disk[0].size)}GB ${
      disk[0].type
    } ${disk[0].vendor} ${disk[0].interfaceType}`;
  }
  if (disk.length === 2) {
    specs[4].innerText = `Disk 1 : ${convertToGB(disk[0].size)}GB ${
      disk[0].type
    } ${disk[0].vendor} ${disk[0].interfaceType} | Disk 2 : ${convertToGB(
      disk[1].size
    )}GB ${disk[1].type} ${disk[1].vendor} ${disk[1].interfaceType}`;
  }

  sysContainer.classList.add("show");
  sysInfoLoading.classList.remove("show");
  console.log(disk);
  console.log("------------------------------------");

  setTimeout(() => {
    sysContainer.classList.add("show");
    sysInfoLoading.classList.remove("show");
  }, 300);
};

links[0].addEventListener(
  "click",
  () => {
    checkPcInfo();
    sysInfoLoading.classList.add("show");
  },
  { once: true }
);
