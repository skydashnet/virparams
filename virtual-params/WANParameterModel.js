let m = "";

let xhw0 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANIPConnection.*.X_HW_VLAN`, {value: Date.now()});
let xhw1 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANPPPConnection.*.X_HW_VLAN`, {value: Date.now()});
let xcmcc0 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.*.X_CMCC_VLANIDMark`, {value: Date.now()});
let xcmcc1 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.*.X_CMCC_VLANIDMark`, {value: Date.now()});
let xfh0 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.*.X_FH_ServiceList`, {value: Date.now()});
let xfh1 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.*.X_FH_ServiceList`, {value: Date.now()});

// Nokia / Alcatel detection
let xalu = declare("InternetGatewayDevice.X_ALU_OntOpticalParam.RXPower", {value: Date.now()});
// VSOL detection
let xvsol = declare("InternetGatewayDevice.WANDevice.1.X_VSOL_PON_Interface.RXPower", {value: Date.now()});
// Tenda detection
let xtenda = declare("InternetGatewayDevice.X_Tenda_PON.OpticalRxPower", {value: Date.now()});
// C-Data / Zhongli detection
let zdata = declare("InternetGatewayDevice.WANDevice.1.X_C-Data_PON_Interface.RxPower", {value: Date.now()});


if (xhw0.size || xhw1.size) {
  m = "XHW";
} else if (xcmcc0.size || xcmcc1.size) {
  m = "XCMCC";
} else if (xfh0.size || xfh1.size) {
  m = "XFH";
} else if (xalu.size) {
  m = "Nokia";
} else if (xvsol.size) {
  m = "VSOL";
} else if (xtenda.size) {
  m = "Tenda";
} else if (zdata.size) {
  m = "C-Data";
} else {
  m = "Other"
}

return {writable: false, value: [m, "xsd:string"]};