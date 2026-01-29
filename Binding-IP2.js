let m = "";
const instanceIndex = '2';
let writable = true;

if (args[1].value) {
  m = args[1].value[0];
  declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.WANIPConnection.1.X_CT-COM_LanInterface`, null, {value: m});
  declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.${instanceIndex}.X_CMCC_LanInterface`, null, {value: m});
  declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.WANIPConnection.1.X_CMCC_LanInterface`, null, {value: m});
}
else {
  let xct = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.WANIPConnection.1.X_CT-COM_LanInterface`, {value: Date.now()});
  let cmcc0 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.${instanceIndex}.X_CMCC_LanInterface`, {value: Date.now()});
  let cmcc1 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.WANIPConnection.1.X_CMCC_LanInterface`, {value: Date.now()});
  if (xct.size) {
    m = xct.value[0];
  } else if (cmcc0.size) {
    m = cmcc0.value[0];
  }else if (cmcc1.size) {
    m = cmcc1.value[0];
  } else {
    writable = false;
  }
}

return {writable: writable, value: [m, "xsd:string"]};