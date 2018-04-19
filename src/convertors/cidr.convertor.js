import { calculateSubnetMask, calculate } from 'ip-subnet-calculator';

const getIpRange = (cidr) => {
  const cidrRegex = /(\d.*)\/(\d+)/gi;
  const result = calculateSubnetMask(cidr.match(cidrRegex)[1], cidr.match(cidrRegex)[2]);
  return {
    ipLow: result.ipLowStr,
    ipHigh: result.ipHighStr,
  };
};

const getCIDR = (ipLow, ipHigh) => {
  const { prefixMaskStr, prefixSize } = calculate(ipLow, ipHigh);
  return `${prefixMaskStr}/${prefixSize}`;
};

export default { getIpRange, getCIDR };
