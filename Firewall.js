let m = "";
let writable = true;

let paths = [
  // Huawei
  "InternetGatewayDevice.X_HW_Security.X_HW_FirewallLevel",
  // FiberHome
  "InternetGatewayDevice.X_FH_Security.FirewallLevel",
  // CMCC
  "InternetGatewayDevice.X_CMCC_Security.FirewallLevel",
  // ZTE
  "InternetGatewayDevice.X_ZTE_Security.FirewallLevel",
  // CIOT / CT-COM
  "InternetGatewayDevice.X_CT-COM_Security.FirewallLevel",
  // Generic
  "Device.Firewall.Level"
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
