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

/*------ Getting battery infos ------*/
const checkBatteryInfo = async () => {
  const bu = require("battery_util");

  console.log("Getting battery data...");

  const batteryInfo = () => bu.batteryInfo();
  const batteryState = await bu.batteryState();

  await batteryInfo()
    .then((data) => {
      console.log("-----Battery_info-----");
      console.log(data);

      batInfoData[2].innerText = `${data.health}%`;
      batInfoData[3].innerText = `${data.designCapacity} ${data.measureUnit}`;
      batInfoData[4].innerText = `${data.fullChargeCapacity} ${data.measureUnit}`;

      setTimeout(() => {
        batLoading.classList.add("hide");
        batCol.classList.add("show");
      }, 500);
    })
    .catch((err) => console.log(err));

  setInterval(() => {
    console.log("-----Battery_state-----");
    console.log(batteryState);

    batInfoData[0].innerText = isCharging(batteryState.isCharging);
    batInfoData[1].innerText = `${batteryState.level}%`;
  }, 1000);
};

/*------ Waiting click on battery tab then getting battery info // for performance ------*/
links[3].addEventListener(
  "click",
  () => {
    checkBatteryInfo();
  },
  { once: true }
);
