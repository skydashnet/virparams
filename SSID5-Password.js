let m = "";

if (args[1].value) {
  m = args[1].value[0];
  declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.KeyPassphrase`, null, {value: m});
  declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.PreSharedKey.1.KeyPassphrase`, null, {value: m});
}
else {
  let keys = [
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.KeyPassphrase`,
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.PreSharedKey.1.KeyPassphrase`,
    `Device.WiFi.AccessPoint.2.Security.KeyPassphrase`,
    `Device.WiFi.AccessPoint.5.Security.KeyPassphrase`
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
