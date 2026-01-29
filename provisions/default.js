const hourly = Date.now() - 3600000;
const fiveMin = Date.now() - 300000;

// Refresh basic parameters hourly
declare("InternetGatewayDevice.DeviceInfo.HardwareVersion", {path: hourly, value: hourly});
declare("InternetGatewayDevice.DeviceInfo.SoftwareVersion", {path: hourly, value: hourly});


//vparam
declare("VirtualParameters.KnownManufacturer", {path: hourly, value: hourly});
declare("VirtualParameters.KnownProductClass", {path: hourly, value: hourly});
declare("VirtualParameters.IP-TR069", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.IP-WANIP", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.IP-WANPPP", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.WANBridge", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.VLAN-PPP1", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.VLAN-PPP2", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.VLAN-PPP3", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.VLAN-PPP4", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.VLAN-IP1", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.VLAN-IP2", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.VLAN-IP3", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.VLAN-IP4", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.Binding-PPP1", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.Binding-PPP2", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.Binding-PPP3", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.Binding-PPP4", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.Binding-IP1", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.Binding-IP2", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.Binding-IP3", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.Binding-IP4", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.PPPUsername", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.TotalStations", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.DeviceUptime", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.SSID1-Name", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.SSID1-Password", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.SSID1-Security", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.WANParameterModel", {path: fiveMin, value: fiveMin});

declare("VirtualParameters.LoginSuperUser", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.LoginSuperPass", {path: fiveMin, value: fiveMin});

//device
declare("InternetGatewayDevice.DeviceInfo.UpTime", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.ManagementServer.ConnectionRequestURL", {path: fiveMin, value: fiveMin});
//WAN
declare("InternetGatewayDevice.WANDevice.1.WANCommonInterfaceConfig.WANAccessType", {path: hourly, value: hourly});
declare("InternetGatewayDevice.WANDevice.1.WANConnectionNumberOfEntries", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.WANDevice.*.WANConnectionDevice.*.WANPPPConnection.*.*", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.WANDevice.*.WANConnectionDevice.*.WANIPConnection.*.*", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.WANDevice.*.WANConnectionDevice.*.WANPPPConnection.*.X_HW_LANBIND.*", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.WANDevice.*.WANConnectionDevice.*.WANIPConnection.*.X_HW_LANBIND.*", {path: fiveMin, value: fiveMin});

//LAN
declare("InternetGatewayDevice.LANDevice.*.WLANConfiguration.*.Enable", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.LANDevice.*.WLANConfiguration.*.SSID", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.LANDevice.*.WLANConfiguration.*.KeyPassphrase", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.LANDevice.*.WLANConfiguration.*.BeaconType", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.LANDevice.*.WLANConfiguration.*.TotalAssociations", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.LANDevice.*.LANEthernetInterfaceConfig.*.*", {path: fiveMin, value: fiveMin});
declare("InternetGatewayDevice.LANDevice.*.Hosts.HostNumberOfEntries", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.OpticalTemperature", {path: fiveMin, value: fiveMin});
declare("VirtualParameters.OpticalRXPower", {path: fiveMin, value: fiveMin});

let productDeclaration = declare('DeviceID.ProductClass', {value: fiveMin});
const product = productDeclaration && productDeclaration.value && productDeclaration.value[0] ? productDeclaration.value[0] : '';
if (product != "GM220-S" &&
    product != "GM630" &&
   	product != "TOTOLINK_N100RE" &&
   	product != "TOTOLINK_N200RE" &&
   	product != "TOTOLINK_N300RT"){
    declare("InternetGatewayDevice.LANDevice.*.Hosts.Host.*.HostName", {path: fiveMin, value: fiveMin});
    declare("InternetGatewayDevice.LANDevice.*.Hosts.Host.*.IPAddress", {path: fiveMin, value: fiveMin});
    declare("InternetGatewayDevice.LANDevice.*.Hosts.Host.*.MACAddress", {path: fiveMin, value: fiveMin});
}

