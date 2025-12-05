import { ContractRaw, NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "blueshift",
  name: "Blueshift",
  description:
    "Learn how to write your own on-chain programs in the Solana ecosystem.",
  links: {
    website: "https://blueshift.gg/",
    twitter: "https://x.com/blueshift",
  },
  tags: ["dapp"],
};

const contract: ContractRaw = {
  name: "Learn",
  address: "shftxrF75jt6u1nXCkkiarjwz4ENqm1tnummZZuBrDp",
  networkId: NetworkId.solana,
};

const service: ServiceRaw = {
  id: `${platform.id}-learn`,
  name: "Learn",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [];
