let result = '';

function getParameterValue(keys) {
    for (let key of keys) {
        let d = declare(key, {path: Date.now() - (120 * 1000), value: Date.now()});
        for (let item of d) {
            if ((item.value && item.value[0] == "PPPoE_Bridged") || (item.value && item.value[0] == "IP_Bridged") ) {
               return "✅";
            }
        }
    }

    return "❌";
}

if (declare("InternetGatewayDevice.WANDevice.1.WANCommonInterfaceConfig.WANAccessType", {value: 1}).value[0] != "Ethernet"){
    let keys = [
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANPPPConnection.*.ConnectionType',
        'InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANIPConnection.*.ConnectionType'
    ];

    result = getParameterValue(keys);
} else {
	result = "❓";
}

return {writable: false, value: [result, "xsd:string"]};