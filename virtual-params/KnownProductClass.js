let result = "Other"
const knownProductClass = [
    "G663-XPON",
    "GM220-S",
    "GM630",
    "H1s-3",
    "HS8145C5",
  	"HG8245A",
    "MQ220",
    "TOTOLINK_N200RE",
    "TOTOLINK_N300RT",
    "TOTOLINK_N355RT",
    "ZXHN F450(EPON ONU)",
  	"F663NV9"
  ];

let prod = declare("DeviceID.ProductClass", {value: Date.now()});
if(knownProductClass.includes(prod.value[0])){
    result = prod.value[0];
} else {
    result = "Other"
}
return {writable: false, value: [result, "xsd:string"]};