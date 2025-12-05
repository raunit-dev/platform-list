import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "flexlend",
  name: "Lulo",
  description:
    "Lulo is a decentralized lending aggregator, which automatically optimizes users deposits by migrating their deposits to the lending pool with the best yield, while allowing for personalized risk settings",
  defiLlamaId: "lulo",
  links: {
    website: "https://www.lulo.fi",
    discord: "https://discord.com/invite/lulo",
    telegram: "https://t.me/uselulo",
    twitter: "https://twitter.com/uselulo",
    github: "https://github.com/lulo-labs",
    documentation: "https://docs.lulo.fi/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Router",
  address: "FL3X2pRsQ9zHENpZSKDRREtccwJuei8yg9fwDu9UN69Q",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "flexlend-router",
  name: "Router",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
