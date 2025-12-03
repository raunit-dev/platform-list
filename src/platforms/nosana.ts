import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "nosana",
  name: "Nosana",
  description:
    "Nosana is your go-to GPU marketplace for AI inference. Save up to 6x on compute costs and scale your AI workloads effortlessly.",
  links: {
    website: "https://app.nosana.io/",
    discord: "http://discord.gg/nosana-ai",
    telegram: "http://t.me/NosanaCompute",
    twitter: "https://x.com/nosana_ai",
    github: "https://github.com/nosana-ci",
    documentation: "https://docs.nosana.com/",
  },
  tags: ["tool", "depin", "dapp"],
};
const contract: ContractRaw = {
  name: 'Staking',
  address: 'nosScmHY2uR24Zh751PmGj9ww9QRNHewh9H59AfrTJE',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}-staking`,
    name: 'Staking',
    platformId: platform.id,
    contractsRaw: [contract],
  },
];
