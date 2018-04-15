import { calculateSubnetMask } from 'ip-subnet-calculator';

const getIpRange = (cidr) => {
  const cidrRegex = /(\d.*)\/(\d+)/gi;
  const result = calculateSubnetMask(cidr.match(cidrRegex)[1], cidr.match(cidrRegex)[2]);
  return {
    ipLow: result.ipLowStr,
    ipHigh: result.ipHighStr,
  };
};

export default { getIpRange };
