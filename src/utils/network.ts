export enum NetworkName {
  Localhost = "Localhost",
  Mainnet = "Mainnet",
  Testnet = "Testnet",
}

export interface SubNetwork {
  url: string;
  name: string;
  reefscanUrl: string;
  verificationApiUrl: string;
  genesisHash?: string;
}

type Networks = {
  [key in NetworkName]: SubNetwork;
};

const networks: Networks = {
  Localhost: {
    name: "Localhost",
    url: "ws://127.0.0.1:9944",
    reefscanUrl: "http://localhost:8000",
    verificationApiUrl: "http://localhost:8001",
  },
  Testnet: {
    name: "Testnet",
    url: "wss://rpc-testnet.reefscan.com/ws",
    reefscanUrl: "https://testnet.reefscan.info",
    verificationApiUrl: "https://api-testnet.reefscan.info",
    genesisHash:
      "0xb414a8602b2251fa538d38a9322391500bd0324bc7ac6048845d57c37dd83fe6",
  },
  Mainnet: {
    name: "Mainnet",
    url: "wss://rpc.reefscan.com/ws",
    reefscanUrl: "https://reefscan.info",
    verificationApiUrl: "https://api.reefscan.info",
    genesisHash:
      "0x7834781d38e4798d548e34ec947d19deea29df148a7bf32484b7b24dacf8d4b7",
  },
};

export const getNetworkSpec = (name: NetworkName): SubNetwork => ({
  ...networks[name],
});

