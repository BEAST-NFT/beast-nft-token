const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const { BSCSCANAPIKEY } = require('./env.json');

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ], 
  api_keys: {
    bscscan: BSCSCANAPIKEY
  },

  networks: {
    bsc_testnet:{
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-2-s2.binance.org:8545/`),
      network_id: 97,      
      confirmations: 5,
      timeoutBlocks: 200,  
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    },
  } 
};