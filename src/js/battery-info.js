/*------ Importing battery npm package ------*/
const battery = require("battery");

/*------ Getting battery info ------*/
const batInfoData = document.querySelectorAll(".bat-info-data span");
const batCol1 = document.querySelector(".bat-info-container .col-1");
const batCol2 = document.querySelector(".bat-info-container .col-2");
const batLoading = document.querySelector(".bat-loading");
const batChargeStat = document.querySelectorAll(".bat-charge-stat span");

/*------ function to change true to 'YES' / false to 'NO' ------*/
const isCharging = (answer) => {
  if (answer === true) {
    return "Yes";
  } else if (answer === false) {
    return "No";
  } else {
    return "We can't determine";
  }
};

/*------ Showing battery infos ------*/
const batMoreBtn = document.querySelector(".bat-show-more");

const checkBatteryInfo = () => {
  si.battery()
    .then((data) => {
      setInterval(() => {
        (async () => {
          const { level, charging } = await battery();
          batChargeStat[0].innerText = isCharging(charging);
          batChargeStat[1].innerText = `${level * 100}%`;
          batInfoData[0].innerText = isCharging(charging);
          batInfoData[1].innerText = `${level * 100}%`;
        })();
      }, 1000);

      setTimeout(() => {
        batLoading.classList.add("hide");
        batCol1.classList.add("show");
        batMoreBtn.classList.add("show");
      }, 1500);

      batInfoData[2].innerText = `${Math.floor(
        (data.currentCapacity / data.maxCapacity) * 100
      )}%`;

      batInfoData[3].innerText = `${data.currentCapacity} ${data.capacityUnit}`;

      batInfoData[4].innerText = `${data.maxCapacity} ${data.capacityUnit}`;
    })
    .catch((err) => {
      batInfoData[0].innerText = err;
    });
};

batMoreBtn.addEventListener("click", () => {
  batCol1.classList.toggle("show");
  batCol2.classList.toggle("show");
});

/*------ Waiting click on battery tab then getting battery info // for performance ------*/
links[3].addEventListener(
  "click",
  () => {
    checkBatteryInfo();
  },
  { once: true }
);

/*------ Generating windows 10 battery-report.html ------*/
const generateBtn = document.querySelector(".generate-btn");

generateBtn.addEventListener("click", () => {
  ipc.send("generate_battery_info");
});

/*------ Calculating battery health ------*/
const designCapacityInput = document.querySelector(".design-capacity");
const fullChargeCapacityInput = document.querySelector(".full-charge-capacity");
const calculateBtn = document.querySelector(".calculate-btn");
const resultHealth = document.querySelector(".result-health span");

const calculateBatteryHealth = () => {
  let health =
    (fullChargeCapacityInput.value / designCapacityInput.value) * 100;
  resultHealth.innerText = `${Math.floor(health)}%`;
};

calculateBtn.addEventListener("click", () => {
  calculateBatteryHealth();
});
