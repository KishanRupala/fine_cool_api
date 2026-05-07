// get-local-ip.js

const os = require("os");

const getLocalIPAddress = () => {
  const interfaces = os.networkInterfaces();

  for (const interfaceName in interfaces) {
    const networkInterface = interfaces[interfaceName];

    for (const network of networkInterface) {
      if (network.family === "IPv4" && !network.internal) {
        return network.address;
      }
    }
  }

  return "IP Address Not Found";
};

module.exports = {
  getLocalIPAddress,
};
