import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "hxro",
  name: "Hxro",
  description:
    "Hxro Network is a derivatives infrastructure layer providing protocols for perpetuals, options, and parimutuel betting applications.",
  defiLlamaId: "hxro-network",
  tags: ["dapp"],
  links: {
    website: "https://app.hxro.finance/",
    discord: "https://discord.com/invite/8rWajs2Dqu",
    twitter: "https://twitter.com/HxroNetwork",
    github: "https://github.com/Hxro-Network",
    documentation: "https://docs.hxro.network/",
  },
  tokens: ["HxhWkVpk5NS4Ltg5nij2G671CKXFRKPK8vy271Ub4uEK"],
};

const contract = {
  name: "Staking",
  address: "2jmux3fWV5zHirkEZCoSMEgTgdYZqkE9Qx2oQnxoHRgA",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
