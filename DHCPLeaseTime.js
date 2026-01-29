let m = "";
let writable = true;

if (args[1].value) {
  m = args[1].value[0];
  declare(`InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.DHCPLeaseTime`, null, {value: parseInt(m)});
}
else {
  let d = declare(`InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.DHCPLeaseTime`, {value: Date.now()});
  if (d.size && d.value[0] !== undefined) {
    let seconds = parseInt(d.value[0]);
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    m = `${hours}h ${mins}m (${seconds}s)`;
  } else {
    writable = false;
    m = "N/A";
  }
}

return {writable: writable, value: [m, "xsd:string"]};
