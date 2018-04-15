/* eslint-disable global-require */
describe('cidr.calculator', () => {
  // Arrange
  const expectedIpHighStr = '123.123.123.255';
  const expectedIpLowStr = '123.123.123.0';
  const expectedPrefixMaskStr = '255.255.255.0';
  const expectedPrefixSize = 24;
  const expectedResult = {
    ipLow: 2071689984,
    ipLowStr: expectedIpLowStr,
    ipHigh: 2071690239,
    ipHighStr: expectedIpHighStr,
    prefixMask: 4294967040,
    prefixMaskStr: expectedPrefixMaskStr,
    prefixSize: expectedPrefixSize,
    invertedMask: 255,
    invertedMaskStr: '0.0.0.255',
    invertedMaskSize: 8,
  };

  const mockIpSubnetCalculator = {
    calculateSubnetMask: () => expectedResult,
  };
  jest.mock('ip-subnet-calculator', () => mockIpSubnetCalculator);

  test('getIpRange', () => {
    const expectedIpRange = {
      ipLow: expectedIpLowStr,
      ipHigh: expectedIpHighStr,
    };
    const expectedCIDR = `${expectedPrefixMaskStr}/${expectedPrefixSize}`;
    const cidrCalculator = require('../cidr.convertor').default;
    // Act
    const actualIpRange = cidrCalculator.getIpRange(expectedCIDR);
    // Assert
    expect(actualIpRange).toEqual(expectedIpRange);
  });
});
