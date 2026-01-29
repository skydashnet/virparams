let result = '';

function getParameterValue(keys) {
    for (let key of keys) {
        let d = declare(key, {path: Date.now() - (120 * 1000), value: Date.now()});

        for (let item of d) {
            if (item.value && item.value[0] >= 0 ) {
                return Math.ceil(10 * Math.log10(item.value[0] / 10000));
            } else if (item.value && item.value[0] < 0) {
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
        'InternetGatewayDevice.WANDevice.1.X_CT-COM_EponInterfaceConfig.RXPower', // China Telecom
        'InternetGatewayDevice.WANDevice.1.X_GponInterafceConfig.RXPower', // Huawei/ZTE/Generic
        'InternetGatewayDevice.WANDevice.1.X_CU_WANEPONInterfaceConfig.OpticalTransceiver.RXPower', // China Unicom
        'InternetGatewayDevice.WANDevice.1.X_CMCC_EponInterfaceConfig.RXPower', // China Mobile
      	'InternetGatewayDevice.WANDevice.1.X_ZTE-COM_WANPONInterfaceConfig.RXPower', // ZTE
      	'InternetGatewayDevice.WANDevice.1.X_FH_GponInterfaceConfig.RXPower', // FiberHome
        'InternetGatewayDevice.X_ALU_OntOpticalParam.RXPower', // Nokia/Alcatel
        'InternetGatewayDevice.WANDevice.1.X_VSOL_PON_Interface.RXPower', // VSOL (Common)
        'InternetGatewayDevice.WANDevice.1.X_VSOL_Optical.RxPower', // VSOL (Alt)
        'InternetGatewayDevice.X_Tenda_PON.OpticalRxPower', // Tenda (Hypothetical/Common)
        'InternetGatewayDevice.WANDevice.1.X_Tenda_Optical.RxPower', // Tenda (Alt)
        'InternetGatewayDevice.WANDevice.1.X_C-Data_PON_Interface.RxPower' // C-Data/Zhongli
    ];

    result = getParameterValue(keys);
}

return {writable: false, value: [result, "xsd:int"]};

