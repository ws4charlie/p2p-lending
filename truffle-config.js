const HDWalletProvider = require("truffle-hdwallet-provider");
const INFURA_API_KEY = process.env.INFURA_API_KEY;
//const MNEMONIC = "zebra paddle unveil toilet weekend space gorilla lesson relief useless arrive picture";
//const MNEMONIC = "citizen hint animal brain label grab hurt prison myth stem load wait";
// const ropstenProvider = MNEMONIC
//     ? new HDWalletProvider(
//           MNEMONIC,
//           `https://ropsten.infura.io/v3/${INFURA_API_KEY}`
//       )
//     : null;

const mnemonic = "citizen hint animal brain label grab hurt prison myth stem load wait";

module.exports = {
    /**
     * Networks define how you connect to your ethereum client and let you set the
     * defaults web3 uses to send transactions. If you don't specify one truffle
     * will spin up a development blockchain for you on port 9545 when you
     * run `develop` or `test`. You can ask a truffle command to use a specific
     * network from the command line, e.g
     *
     * $ truffle test --network <network-name>
     */

    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache-cli, geth or parity) in a separate terminal
        // tab if you use this network and you must also set the `host`, `port` and `network_id`
        // options below to some value.
        //
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: 523, // Any network (default: none)
            gas: 8000000,
            gasPrice: 700000000000,
            from: "0xF6aca39539374993B37d29cCf0D93fA214eA0AF1",
            disableConfirmationListener: true
        },
        findora: {
            //host: "https://dev-evm.dev.findora.org",
            //port: 8545,
            provider: () => new HDWalletProvider(mnemonic,
                'https://dev-evm.dev.findora.org:8545/'
            ),
            network_id: 523,
            gas: 9000000,
            gasPrice: 1000000000000, // 1000 gwei
            from: "0xA5225cBEE5052100Ec2D2D94aA6d258558073757",
        }
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.5.9", // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {
                // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200
                }
                // evmVersion: "petersburg"
            }
        }
    }
};
