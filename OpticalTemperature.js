let result = '';

function getParameterValue(keys) {
    for (let key of keys) {
        let d = declare(key, {path: Date.now() - (120 * 1000), value: Date.now()});

        for (let item of d) {
            if (item.value && item.value[0] >= 100 ) {
                return Math.round(item.value[0] / 255);
            } else if (item.value && item.value[0] < 100) {
                return item.value[0]; 
            }
        }
    }

    return 'N/A';
}

if ("value" in args[1]) {
    result = args[1].value[0];
} else {
    let keys = [
        'InternetGatewayDevice.WANDevice.1.X_CT-COM_EponInterfaceConfig.TransceiverTemperature',
        'InternetGatewayDevice.WANDevice.1.X_GponInterafceConfig.TransceiverTemperature',
        'InternetGatewayDevice.WANDevice.1.X_CMCC_EponInterfaceConfig.TransceiverTemperature',
        'InternetGatewayDevice.WANDevice.1.X_CMCC_EponInterfaceConfig.RXPower',
        'InternetGatewayDevice.WANDevice.1.X_CU_WANEPONInterfaceConfig.OpticalTransceiver.Temperature',
      	'InternetGatewayDevice.WANDevice.1.X_ZTE-COM_WANPONInterfaceConfig.TransceiverTemperature',
      	'InternetGatewayDevice.WANDevice.1.X_FH_GponInterfaceConfig.TransceiverTemperature',
        'InternetGatewayDevice.X_ALU_OntOpticalParam.Temperature', // Nokia
        'InternetGatewayDevice.WANDevice.1.X_VSOL_PON_Interface.Temperature', // VSOL
        'InternetGatewayDevice.WANDevice.1.X_VSOL_Optical.Temperature', // VSOL Alt
        'InternetGatewayDevice.X_Tenda_PON.Temperature', // Tenda
        'InternetGatewayDevice.WANDevice.1.X_Tenda_Optical.Temperature', // Tenda Alt
        'InternetGatewayDevice.WANDevice.1.X_C-Data_PON_Interface.Temperature' // C-Data
    ];

    result = getParameterValue(keys);
}

return {writable: false, value: [result, "xsd:int"]};
