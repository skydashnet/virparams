let m = "";
let writable = true;
let port = args[0] || "1";

let paths = [
  `InternetGatewayDevice.LANDevice.1.LANEthernetInterfaceConfig.${port}.Enable`,
  `Device.Ethernet.Interface.${port}.Enable`
];

if (args[1].value) {
  m = args[1].value[0];
  for (let p of paths) {
    try { declare(p, null, {value: m === "true" || m === true}); } catch(e) {}
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

return {writable: writable, value: [m, "xsd:boolean"]};
