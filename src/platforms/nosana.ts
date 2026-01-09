import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "nosana",
  name: "Nosana",
  description:
    "Nosana is a decentralized GPU compute marketplace for AI inference workloads, connecting GPU providers with AI developers.",
  links: {
    website: "https://app.nosana.io/",
    discord: "http://discord.gg/nosana-ai",
    telegram: "http://t.me/NosanaCompute",
    twitter: "https://x.com/nosana_ai",
    github: "https://github.com/nosana-ci",
    documentation: "https://docs.nosana.com/",
  },
  tags: ["tool", "depin", "dapp", "ai"],
};
const contract: ContractRaw = {
  name: "Staking",
  address: "nosScmHY2uR24Zh751PmGj9ww9QRNHewh9H59AfrTJE",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://app.nosana.io/stake",
  description:
    "NOS token staking program allowing users to lock tokens and earn rewards while supporting the decentralized GPU compute network.",
};

export const services: ServiceRaw[] = [stakingService];
