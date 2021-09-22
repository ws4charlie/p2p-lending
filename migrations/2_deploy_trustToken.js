const TrustToken = artifacts.require("TrustToken");

const tokenSupply = 1000000000000000;
const tokenName = "TrustToken";
const tokenDecimals = 6;
const tokenSymbol = "TST";

module.exports = deployer => {
    deployer.deploy(
        TrustToken,
        tokenSupply,
        tokenName,
        tokenDecimals,
        tokenSymbol
    );
};
