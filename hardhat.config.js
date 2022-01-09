require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/643780a69f4d4866980f28419ba57732",
      accounts: [`0xceceeb98d7a3d54ebc0083835e881da33e64172d5e0d0974e18fe6ad2245578e`]
    }
  },
  solidity: "0.8.4",
};