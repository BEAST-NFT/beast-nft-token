# Beast NFT Token Implementation, Deployment and Test

This repo shows how to Deploy a contract and test the contract using truffle. 


## STEP 1 
Add BSC Testnet to MetaMast 
BSC Testnet RPC endpoint:  
https://data-seed-prebsc-2-s2.binance.org:8545

NOTE: Sometimes, the RPC endpoint might be down, so you can select another endpoint from this link https://docs.binance.org/smart-chain/developer/rpc.html. 
Under  BSC RPC Endpoints you will see a list of them. Also note that all these Endpoints still point to the same Binance Smart Chain

## STEP 2
To deploy and test the "NatureToken Contract":  

- Navigate to project root directory
- Run $ truffle compile  command to ensure the contracts compile 
- Run $ truffle deploy --network bsc_testnet command to deploy contracts and run tests automatically
