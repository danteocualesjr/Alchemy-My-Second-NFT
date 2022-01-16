const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
console.log(JSON.stringify(contract.abi));

const contractAddress = "0x69fedD2cC68be88574B5C0dcc6b39a9fcC7e082c";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);