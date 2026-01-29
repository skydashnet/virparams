let m = "";
let writable = true;

let paths = [
  // Huawei
  "InternetGatewayDevice.UserInterface.X_HW_WebUserInfo.2.UserName",
  // CMCC (China Mobile)
  "InternetGatewayDevice.DeviceInfo.X_CMCC_TeleComAccount.Username",
  // FiberHome
  "InternetGatewayDevice.DeviceInfo.X_FH_Account.X_FH_WebUserInfo.Username",
  "InternetGatewayDevice.UserInterface.X_FH_WebUserInfo.1.UserName",
  // CIOT / CT-COM (China Telecom)
  "InternetGatewayDevice.DeviceInfo.X_CT-COM_TeleComAccount.Username",
  // ZTE
  "InternetGatewayDevice.DeviceInfo.X_ZTE_COM_TeleComAccount.Username",
  // Generic TR-098
  "Device.Users.User.1.Username"
];

if (args[1].value) {
  m = args[1].value[0];
  for (let p of paths) {
    try { declare(p, null, {value: m}); } catch(e) {}
  }
}
else {
  for (let p of paths) {
    let d = declare(p, {value: Date.now()});
    if (d.size && d.value[0]) {
      m = String(d.value[0]);
      break;
    }
  }
  if (!m) { writable = false; m = "N/A"; }
}

return {writable: writable, value: [m, "xsd:string"]};
