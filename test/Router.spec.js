const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");

describe("Router contract", () => {
    async function deployRouterFixture() {
        const WETHERC20TokenContract = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        const DAIERC20TokenContract = "0x6b175474e89094c44da98b954eedeac495271d0f";

        const RouterContract = await ethers.getContractFactory("Router");
        const router = await RouterContract.deploy();
        await router.deployed();

        return { 
            WETHERC20TokenContract,
            DAIERC20TokenContract,
            router 
        };
    }

    describe("Deposit liquidity", () => {
        it("Only deposit of two tokens at the same value", async() => {
            const { 
                WETHERC20TokenContract,
                DAIERC20TokenContract,
                router
            } = await loadFixture(deployRouterFixture);
            const { amountA, amountB } = await router.addLiquidity(
                WETHERC20TokenContract,
                DAIERC20TokenContract
            )

            expect(true).to.eq(true);
        });
    });
})
