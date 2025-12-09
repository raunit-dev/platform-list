import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "marginfi",
  name: "Marginfi",
  description:
    "Marginfi is a decentralized lending and borrowing protocol offering isolated risk pools, cross-margin positions, and integrated yield strategies.",
  defiLlamaId: "parent#marginfi",
  links: {
    website: "https://www.marginfi.com/",
    telegram: "https://t.me/mrgnteam",
    twitter: "https://twitter.com/marginfi",
    github: "https://github.com/mrgnlabs/",
    documentation: "https://docs.marginfi.com/",
  },
  tokens: ["LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp"],
  tags: ["dapp"],
};

const contract = {
  name: "Lending",
  address: "MFv2hWf31Z9kbCa1snEPYctwafyhdvnV7FZnsebVacA",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "marginfi-lending",
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
