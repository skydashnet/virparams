// Mac Address PON
let m = "";
let mac1 = declare("InternetGatewayDevice.DeviceInfo.X_CU_SerialNumber", {value: Date.now()});
let mac2 = declare("InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.MACAddress", {value: Date.now()});
let mac3 = declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.1.MACAddress", {value: Date.now()});

let manufacturer = declare("DeviceID.Manufacturer", {value: Date.now()});
if (manufacturer.value[0] == "ZIONCOM") {
  for (let p of mac3) {
    if (p.value[0]) {
      m = p.value[0];
      break;
    }
  }
} else if (mac1.size) {
  for (let p of mac1) {
    if (p.value[0]) {
      m = p.value[0];
      break;
    }
  }
} else if (mac2.size) {
  for (let p of mac2) {
    if (p.value[0]) {
      m = p.value[0];
      break;
    }
  }
}


return {writable: false, value: [m, "xsd:string"]};
