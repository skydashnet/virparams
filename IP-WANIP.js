let result = '';

function getParameterValue(keys) {
    for (let key of keys) {
        let keyConnType = declare(key.replace('ExternalIPAddress', 'ConnectionType'), {value: Date.now()});
        let keyNat = declare(key.replace('ExternalIPAddress', 'NATEnabled'), {value: Date.now()});
        if (keyConnType.size && keyNat.size && keyConnType.value[0] === 'IP_Routed' && (keyNat.value[0] === true || (typeof keyNat.value[0] === "string" && keyNat.value[0].toLowerCase() === "true"))){
            return declare(key, {value: Date.now()}).value[0];
        }
    }
    return 'N/A';
}

if ("value" in args[1]) {
    result = args[1].value[0];
} else {
    let keys = [
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.2.WANIPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.3.WANIPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.4.WANIPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.2.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.3.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.4.ExternalIPAddress',
        'Device.IP.Interface.1.IPv4Address.1.IPAddress', // TR-181
        'Device.IP.Interface.2.IPv4Address.1.IPAddress',
        'Device.IP.Interface.3.IPv4Address.1.IPAddress',
        'Device.IP.Interface.4.IPv4Address.1.IPAddress'
    ];

    result = getParameterValue(keys);
}

return {writable: false, value: [result, "xsd:string"]};