const { assert } = require("chai");

describe("Contract", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();
    await contract.deployed();

    const newx = await contract.x();
    console.log(newX);
    
  });
});
