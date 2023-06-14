require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/F4QxGdmn6mG6zxwSus2IV5txN9bPIkt7',
      accounts: ['1f5e19c3022a9a7e56340bcd20102cb37fd5e19e1cf11a3eee09926739b219a0'],
    },
  },
};