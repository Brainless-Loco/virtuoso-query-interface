const { networkInterfaces } = require('os');

const getIPV4 = () => {
    const nets = networkInterfaces();
    let ipv4Address = null;

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
            if (net.family === familyV4Value && !net.internal) {
                ipv4Address = net.address;
                break;
            }
        }
        if (ipv4Address) {
            break;
        }
    }

    return ipv4Address;
};

export default getIPV4;
