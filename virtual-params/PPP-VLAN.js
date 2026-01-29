let m = "";
let writable = true;

let paths = [
  "InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.1.X_HW_VLAN",
  "InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.1.X_CMCC_VLANIDMark",
  "InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.1.VLANID"
];

if (args[1].value) {
  m = args[1].value[0];
  for (let p of paths) {
    try { declare(p, null, {value: parseInt(m)}); } catch(e) {}
  }
}
else {
  for (let p of paths) {
    let d = declare(p, {value: Date.now()});
    if (d.size && d.value[0] !== undefined) {
      m = String(d.value[0]);
      break;
    }
  }
  if (!m) { writable = false; m = "N/A"; }
}

return {writable: writable, value: [m, "xsd:unsignedInt"]};
