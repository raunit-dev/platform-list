import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "exponent",
  name: "Exponent",
  description:
    "Exponent is a yield exchange allowing users to choose between fixed or leveraged DeFi yields.",
  defiLlamaId: "exponent",
  links: {
    website: "https://www.exponent.finance",
    telegram: "https://t.me/exponentcitizens",
    twitter: "https://x.com/exponentfinance",
    github: "https://github.com/exponent-finance",
    documentation: "https://docs.exponent.finance/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Core",
  address: "ExponentnaRg3CQbW6dqQNZKXp7gtZ9DGMp1cwC4HAS7",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "exponent-core",
  name: "Core",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
