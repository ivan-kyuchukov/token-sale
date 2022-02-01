const Token = artifacts.require("VeeToken");

const chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("Token Test", async (accounts) => {

  it("all tokens should be in my accont", async () => {
    const instance = await Token.deployed();
    const totalSupply = await instance.totalSupply();
    const balance = await instance.balanceOf(accounts[0]);
    expect(await instance.balanceOf(accounts[0])).to.be.a.bignumber.equal(totalSupply);
  })
});