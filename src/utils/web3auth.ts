import { Web3Auth } from "@web3auth/modal";

let web3auth;

if (window !== undefined) {
  //Initialize within your constructor
  web3auth = new Web3Auth({
    clientId:
      "BLnYrwNLJ03ZJBCCY3EqNGcp-b2Zm57ErhRWQGEnvbN5vIBM9ckWqSt0YatHI7EO5OSV2NVedFN4sDj4l4ahMMI", // Get your Client ID from Web3Auth Dashboard
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x13881", // Use 0x13881 for Mumbai Testnet
      rpcTarget: "https://rpc-mumbai.maticvigil.com",
    },
  });
}

export default web3auth;
