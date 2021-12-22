const BEASTNFTTOKEN = artifacts.require("BEASTNFTTOKEN");
const Company = artifacts.require("CompanyTokenTimelock");
const Founder = artifacts.require("FoundersTokenTimelock");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(BEASTNFTTOKEN);
    const token = await BEASTNFTTOKEN.deployed()

    await deployer.deploy(Company, token.address, '0xCa9EadF516Ab91eb60a2b5dbd79827b8dCfF9C82', '1703208262');
    const comp = await Company.deployed()

    await deployer.deploy(Founder, token.address, '0xCa9EadF516Ab91eb60a2b5dbd79827b8dCfF9C82', '1703208262');
    const found = await Founder.deployed()

    await token.transfer(comp.address, '200000000000000000000000000')
    await token.transfer(found.address, '200000000000000000000000000')

    console.log("BEASTNFTTOKEN Contract address: " + token.address);
  })
};