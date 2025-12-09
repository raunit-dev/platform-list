import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "hubble",
  name: "Hubble",
  description:
    "Hubble Protocol was a DeFi platform that enabled users to borrow USDH stablecoin against crypto collateral with low interest rates.",
  tags: ["dapp"],
  isDeprecated: true,
  links: {
    website: "https://app.hubbleprotocol.io/",
    twitter: "https://x.com/hubbleprotocol",
    discord: "https://discord.gg/MGujjftKTY",
    github: "https://github.com/hubbleprotocol/",
    documentation: "https://docs.hubbleprotocol.io/",
  },
  tokens: [
    "USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX",
    "HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6",
  ],
};

const contract = {
  name: "Lending",
  address: "HubbLeXBb7qyLHt3x7gvYaRrxQmmgExb7fCJgDqFuB6T",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
