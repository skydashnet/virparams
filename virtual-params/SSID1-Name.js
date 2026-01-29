let m = "";
const instanceIndex = '1';

if (args[1].value) {
  m = args[1].value[0];
  declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.SSID`, null, {value: m});
}
else {
  let keys = [
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.SSID`,
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.SSID`,
    `Device.WiFi.SSID.1.SSID`,
    `Device.WiFi.SSID.5.SSID`,
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.X_HW_SSIDName` // Huawei Custom sometimes
  ];
  
  for (let key of keys) {
    let d = declare(key, {value: Date.now()});
    if (d.size && d.value[0]) {
      m = d.value[0];
      break;
    }
  }
}

return {writable: true, value: [m, "xsd:string"]};