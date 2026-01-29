let m = "";
const instanceIndex = '2';
let writable = true;

if (args[1].value) {
  m = args[1].value[0];
  declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.X_CT-COM_WANEponLinkConfig.VLANIDMark`, null, {value: m});
  declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.${instanceIndex}.X_HW_VLAN`, null, {value: m});
  declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.WANIPConnection.1.X_HW_VLAN`, null, {value: m});
  declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.${instanceIndex}.X_CMCC_VLANIDMark`, null, {value: m});
  declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.WANIPConnection.1.X_CMCC_VLANIDMark`, null, {value: m});
}
else {
  let xct = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.X_CT-COM_WANEponLinkConfig.VLANIDMark`, {value: Date.now()});
  let xhw0 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.${instanceIndex}.X_HW_VLAN`, {value: Date.now()});
  let xhw1 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.WANIPConnection.1.X_HW_VLAN`, {value: Date.now()});
  let cmcc0 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.${instanceIndex}.X_CMCC_VLANIDMark`, {value: Date.now()});
  let cmcc1 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.${instanceIndex}.WANIPConnection.1.X_CMCC_VLANIDMark`, {value: Date.now()});
  if (xct.size) {
    m = xct.value[0];
  } else if (xhw0.size) {
    m = xhw0.value[0];
  } else if (xhw1.size) {
    m = xhw1.value[0];
  } else if (cmcc0.size) {
    m = cmcc0.value[0];
  }else if (cmcc1.size) {
    m = cmcc1.value[0];
  } else {
    writable = false;
  }
}

return {writable: writable, value: [m, "xsd:string"]};