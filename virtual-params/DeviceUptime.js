let uptime = 0;
let res = declare("InternetGatewayDevice.DeviceInfo.UpTime", {path: Date.now() - (120 * 1000), value: Date.now()});

uptime = res.value[0]

// Time units in seconds
const SEC = 1;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY; // Approximate

// Breakdown the uptime
const months = Math.floor(uptime / MONTH);
uptime %= MONTH;

const days = Math.floor(uptime / DAY);
uptime %= DAY;

const hours = Math.floor(uptime / HOUR);
uptime %= HOUR;

const minutes = Math.floor(uptime / MIN);
uptime %= MIN;

const seconds = uptime;

// Build the human-readable string
let parts = [];
if (months > 0) parts.push(`${months} Month`);
if (days > 0) parts.push(`${days} Day`);
if (hours > 0) parts.push(`${hours} Hour`);
if (minutes > 0) parts.push(`${minutes} Min`);
if (seconds > 0 || parts.length === 0) parts.push(`${seconds} Sec`);

const readable = parts.join(" ");

return {
  value: [readable, "xsd:string"],
  writable: false
};
