import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "jupiter-launchpad",
  name: "Jupiter Launchpad",
  description: "Ultimate decentralised distribution stack",
  links: {
    website: "https://lfg.jup.ag/",
    twitter: "https://twitter.com/JupiterExchange",
  },
  tags: ["tool"],
};

const lfgContract = {
  name: "LFG",
  address: "DiSLRwcSFvtwvMWSs7ubBMvYRaYNYupa76ZSuYLe6D7j",
  networkId: NetworkId.solana,
};

const dtfContract = {
  name: "DTF",
  address: "presSVxnf9UU8jMxhgSMqaRwNiT36qeBdNeTRKjTdbj",
  networkId: NetworkId.solana,
};

const lfgService: ServiceRaw = {
  id: `${platform.id}-lfg`,
  name: "LFG",
  platformId: platform.id,
  contractsRaw: [lfgContract],
};

const dtfService: ServiceRaw = {
  id: `${platform.id}-dtf`,
  name: "DTF",
  platformId: platform.id,
  contractsRaw: [dtfContract],
};

export const services: ServiceRaw[] = [lfgService, dtfService];
