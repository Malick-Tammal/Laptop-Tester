const batInfoData = document.querySelectorAll(".bat-info-data span");
const batCol = document.querySelector(".bat-info-container .col");
const batLoading = document.querySelector(".bat-loading");

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
const checkBatteryInfo = () => {
  const battery = require("battery");
  const bu = require("battery_util");

  bu.batteryData()
    .then((data) => {
      setInterval(() => {
        (async () => {
          const { level, charging } = await battery();
          batInfoData[0].innerText = isCharging(charging);
          batInfoData[1].innerText = `${level * 100}%`;
        })();
      }, 1000);

      setTimeout(() => {
        batLoading.classList.add("hide");
        batCol.classList.add("show");
      }, 1500);

      batInfoData[2].innerText = `${data.health}%`;

      batInfoData[3].innerText = `${data.designCapacity} ${data.measureUnit}`;

      batInfoData[4].innerText = `${data.fullChargeCapacity} ${data.measureUnit}`;
    })
    .catch((err) => {
      batInfoData[0].innerText = err;
    });
};

/*------ Waiting click on battery tab then getting battery info // for performance ------*/
links[3].addEventListener(
  "click",
  () => {
    checkBatteryInfo();
  },
  { once: true }
);
