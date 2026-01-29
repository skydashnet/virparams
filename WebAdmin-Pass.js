let m = "";
let writable = true;

let paths = [
  // Huawei
  "InternetGatewayDevice.UserInterface.X_HW_WebUserInfo.2.Password",
  // CMCC (China Mobile)
  "InternetGatewayDevice.DeviceInfo.X_CMCC_TeleComAccount.Password",
  // FiberHome
  "InternetGatewayDevice.DeviceInfo.X_FH_Account.X_FH_WebUserInfo.Password",
  "InternetGatewayDevice.DeviceInfo.X_FH_Account.X_FH_WebUserInfo.WanPassword",
  // CIOT / CT-COM (China Telecom)
  "InternetGatewayDevice.DeviceInfo.X_CT-COM_TeleComAccount.Password",
  // ZTE
  "InternetGatewayDevice.DeviceInfo.X_ZTE_COM_TeleComAccount.Password",
  // Generic TR-098
  "Device.Users.User.1.Password"
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
