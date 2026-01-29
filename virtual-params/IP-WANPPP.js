let result = '';

function getParameterValue(keys) {
    for (let key of keys) {
        let keyConnType = declare(key.replace('ExternalIPAddress', 'ConnectionType'), {value: Date.now()});
        let keyNat = declare(key.replace('ExternalIPAddress', 'NATEnabled'), {value: Date.now()});
        if ((keyConnType.size && keyNat.size && keyConnType.value[0] === 'PPPoE_Routed' || keyConnType.size && keyNat.size && keyConnType.value[0] === 'IP_Routed' || keyConnType.size && keyNat.size && keyConnType.value[0] === 'PPPoE') && (keyNat.value[0] === true || (typeof keyNat.value[0] === "string" && keyNat.value[0].toLowerCase() === "true"))){
            return declare(key, {value: Date.now()}).value[0];
        }
    }
    return 'N/A';
}

if ("value" in args[1]) {
    result = args[1].value[0];
} else {
    let keys = [
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.2.WANPPPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.3.WANPPPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.4.WANPPPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.1.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.2.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.3.ExternalIPAddress',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.4.ExternalIPAddress'
    ];

    result = getParameterValue(keys);
}

return {writable: false, value: [result, "xsd:string"]};