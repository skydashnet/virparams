let m = "";
const instanceIndex = '1';

if (args[1].value) {
  m = args[1].value[0];

  declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.PreSharedKey.1.KeyPassphrase`, null, {value: m});

  let pskCheck = declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.PreSharedKey.1.KeyPassphrase`, {value: Date.now()});

  if (!pskCheck.size || !pskCheck.value) {
    declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.KeyPassphrase`, null, {value: m});
  }
}
else {
  let keys = [
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.PreSharedKey.1.KeyPassphrase`,
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.KeyPassphrase`,
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.PreSharedKey.1.KeyPassphrase`,
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.KeyPassphrase`,
    `Device.WiFi.AccessPoint.1.Security.KeyPassphrase`,
    `Device.WiFi.AccessPoint.5.Security.KeyPassphrase`,
    `InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.X_HW_KeyPassphrase`
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
