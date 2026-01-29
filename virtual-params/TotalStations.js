let result = 0;
let keys = [
    'InternetGatewayDevice.LANDevice.1.WLANConfiguration.*.TotalAssociations', // Standard
    'InternetGatewayDevice.LANDevice.1.WLANConfiguration.*.AssociatedDeviceNumberOfEntries', // Huawei
    'InternetGatewayDevice.LANDevice.1.WLANConfiguration.*.X_HW_AssociatedDeviceNumberOfEntries', // Huawei Custom
    'InternetGatewayDevice.LANDevice.1.WLANConfiguration.*.X_ZTE-COM_AssociatedDeviceNumberOfEntries', // ZTE
    'InternetGatewayDevice.LANDevice.1.WLANConfiguration.*.X_ZTE-COM_TotalAssociations', // ZTE Alt
    'InternetGatewayDevice.LANDevice.1.WLANConfiguration.*.X_Tenda_AssociatedDeviceCount', // Tenda (Hypothetical)
    'Device.WiFi.SSID.*.Stats.Associations', // TR-181
    'InternetGatewayDevice.LANDevice.1.WLANConfiguration.*.X_ALU_AssociatedDeviceNumberOfEntries' // Nokia/ALU
];

result = getParameterValue(keys);

function getParameterValue(keys) {
    let total = 0;
    for (let key of keys) {
        let d = declare(key, {path: Date.now() - (120 * 1000), value: Date.now()});
        for (let item of d) {
            if (item.value && !isNaN(parseInt(item.value[0]))) {
                total += parseInt(item.value[0]);
            }
        }
    }
    return total;
}

return {writable: false, value: [result, "xsd:int"]};
