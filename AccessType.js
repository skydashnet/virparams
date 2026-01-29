let accesstype = "UNKNOWN";
let now = Date.now();

if (declare("InternetGatewayDevice.WANDevice.1.WANCommonInterfaceConfig.WANAccessType", {path: now, value: now}).value) {
    accesstype = declare("InternetGatewayDevice.WANDevice.1.WANCommonInterfaceConfig.WANAccessType", {path: now, value: now}).value[0];
} else {
  	accesstype = "UNKNOWN";
}

return {writable: false, value: [accesstype, "xsd:string"]};