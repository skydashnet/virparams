// Device ID as user name
//const username = declare("DeviceID.ID", {value: 1}).value[0]
// Device SN as user name
const username = "your_username";
// Password will be fixed for a given device because Math.random() is seeded with device ID by default.
const password = "your_password";
// Refresh values daily
const daily = Date.now() - 86400000;
const fiveMin = Date.now() - 300000;
//inform interval in second for ONU
const informInterval = 600;
// Unique inform offset per device for better load distribution
const informTime = daily % 86400000;
// ACS server url
const acsUrl = "http://ont.alinos-dashboard.my.id";

// Push ACS Config
declare("InternetGatewayDevice.ManagementServer.ConnectionRequestUsername", {value: daily}, {value: username});
declare("InternetGatewayDevice.ManagementServer.ConnectionRequestPassword", {value: daily}, {value: password});
declare("InternetGatewayDevice.ManagementServer.PeriodicInformEnable", {value: daily}, {value: true});
declare("InternetGatewayDevice.ManagementServer.PeriodicInformInterval", {value: daily}, {value: informInterval});
//declare("InternetGatewayDevice.ManagementServer.PeriodicInformTime", {value: daily}, {value: informTime});
declare("InternetGatewayDevice.ManagementServer.URL", {value: daily}, {value: acsUrl});
declare("InternetGatewayDevice.ManagementServer.Username", {value: daily}, {value: username});
declare("InternetGatewayDevice.ManagementServer.Password", {value: daily}, {value: password});

// Configure DHCP Lease time
declare("InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.DHCPLeaseTime", {value: daily}, {value: 3600});

// Enable Huawei LAN L3
declare("InternetGatewayDevice.LANDevice.1.LANEthernetInterfaceConfig.*.X_HW_L3Enable", {value: daily}, {value: true});

// Set firewall huawei user-defined
declare("InternetGatewayDevice.X_HW_Security.X_HW_FirewallLevel", {value: fiveMin}, {value: "Custom"});
