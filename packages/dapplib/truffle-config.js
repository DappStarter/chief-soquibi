require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush strong response shift pudding give end army gasp'; 
let testAccounts = [
"0x29e583d7f5c849dd17a25fa0ba116369cb2a291a7bfe94404d7c7ba1217d99e0",
"0x596d8e2a09c9acb1452ed6ce48cd5f91c0343c162070d38bc9cb0adcc96c5944",
"0x166ee828eaaa1045d140b5a23754a8cfc6c99fcdb63bcd0fe76343efd9a74f2a",
"0x0f3d64678b93098ef8cdc933f0c48c9ffdbe289b94d970977bda2f668b2f9fa4",
"0x2e7b00472b41850d3c10f5eda6891ae0cf014579d390688e3c8c61c1f129fad4",
"0x0aa84e5e9ef7a11f723ab771ed701bb550449fd466fc952c3ac3c9c24a51f3fd",
"0x8f205193bf927b39dce52eadfbb0a10e6bedafcdc35175985935a7092d074d32",
"0x5d98dc3a4c1d95009dd544ac16de5e4d3561e906c71712fb46681c57c6eb9652",
"0x855e2a7db6025bb9fcae1ee51622decf1a91f21cc1efe2c48794a42d879c0bc0",
"0x4abbb71a5e081c1f59a295eeef96520d19553c01274f0c202618a9e79cc30905"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
