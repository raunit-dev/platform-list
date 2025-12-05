import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "domin8",
  name: "Domin8",
  links: {
    website: "https://www.domin8.fun/",
    twitter: "https://x.com/domin8Arena",
  },
  tags: ["gaming", "dapp"],
};

const contract = {
  name: "Game",
  address: "7bHYHZVu7kWRU4xf7DWypCvefWvuDqW1CqVfsuwdGiR7",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "domin8",
  name: "Game",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
