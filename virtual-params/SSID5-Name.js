let m = "";

if (args[1].value) {
  m = args[1].value[0];
  declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.SSID`, null, {value: m});
}
else {
  let keys = [
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.SSID`,
    `Device.WiFi.SSID.2.SSID`,
    `Device.WiFi.SSID.5.SSID`
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
