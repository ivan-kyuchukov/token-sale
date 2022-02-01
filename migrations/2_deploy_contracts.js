const VeeToken = artifacts.require("VeeToken.sol");

module.exports = async (deployer) => {
  await deployer.deploy(VeeToken, 1000);
};