/* eslint-disable global-require */
describe('App component', () => {
  const mockCidrCalculator = {};
  jest.mock('../components/CidrCalculator.vue', () => mockCidrCalculator);

  test('default', () => {
    // Arrange
    const expectedName = 'App';
    const expectedApp = {
      name: expectedName,
      components: {
        CidrCalculator: mockCidrCalculator,
      },
    };
    // Act
    const actualApp = require('../App.vue');
    // Assert
    expect(actualApp).toEqual(expect.objectContaining(expectedApp));
  });
});
