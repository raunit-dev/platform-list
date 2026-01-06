import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "pumpfun",
  name: "Pumpfun",
  description:
    "Pump.fun is a memecoin launchpad that enables anyone to create and trade tokens with bonding curve mechanics and automatic liquidity migration to Raydium.",
  defiLlamaId: "pumpfun",
  tags: ["memecoin", "launchpad", "dapp"],
  links: {
    website: "https://pump.fun/board",
    telegram: "https://t.me/pumpfunsupport",
    twitter: "https://x.com/pumpfun",
  },
  tokens: ["pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn"],
};

const contract = {
  name: "Launchpad",
  address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-launchpad`,
  name: "Launchpad",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
