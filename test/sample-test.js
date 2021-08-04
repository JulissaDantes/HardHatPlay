const { assert } = require("chai");

describe("Contract", function () {
  it("Should return the new x once it's changed", async function () {
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();
    await contract.deployed();
    
    await contract.updateX(15);
    const newx = await contract.x();
    assert(newx,15);
    
  });
});
