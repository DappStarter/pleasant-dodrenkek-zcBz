require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain mistake good nasty fortune story'; 
let testAccounts = [
"0x52ac8ffe9df906e51bbe9a01fdf2ebee781d9b0d1ff2c8113fdce13c97f9be36",
"0xc308c7137bd06dbbf5654bbc3c0d053232981b479864bf1ae17a0644f878f3c5",
"0x93053326a07d0c50dda01e153c971845ee8385f553c405b04e717900ad04c41a",
"0x91a7b5548886855ddb000dd5190885be9a61479d2ce8b6c4276721b997ca388e",
"0x61cc40f0f6530d1ed092f00611e9e067952e99e25cb779dfd5e84791c8b5bfba",
"0xe8bb6d30fa99cc21e9647d4b750f061a5e4de3b2b12f301ab184daffd9b8f378",
"0xf874aecbea17a24daab1557ca0b058e2cfc03c92107153546186fed389d7598b",
"0x2b8a5dde15235982d0b1b06a031cb84b84849764ab120bb43d6ea78284c97eab",
"0xabdca023c7c76ff12b236794dc9ae41c0163699df5940c4bc05c3db8b137f5a3",
"0x40fb42d24309e2ce7fb64ffe5b555c407da530a9a2f4f5f7336c802baa93a5c9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

