let m = "";
let writable = true;

let paths = [
  // Standard TR-098 (works for Huawei, ZTE, CIOT, FiberHome)
  "InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.1.DNSServers",
  // ZTE alternate path
  "InternetGatewayDevice.WANDevice.1.WANConnectionDevice.2.WANPPPConnection.1.DNSServers",
  // DHCP DNS
  "InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.DNSServers",
  // Generic TR-181
  "Device.DNS.Client.Server.1.DNSServer"
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
