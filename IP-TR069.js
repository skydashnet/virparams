let param = declare("InternetGatewayDevice.ManagementServer.ConnectionRequestURL", {value: Date.now()}).value[0]
let address = param.match(/http?:\/\/([\d.]+)(?::\d+)?/);
return { writable: false, value: [address[1], "xsd:string"] };