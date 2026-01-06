import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "frax",
  name: "Frax Staked ETH",
  description:
    "Frax Finance is a DeFi protocol that issues decentralized stablecoins including FRAX (frxUSD), FPI (inflation-pegged), and frxETH (liquid staked ETH).",
  defiLlamaId: "frax-ether",
  links: {
    website: "https://frax.finance/",
    discord: "https://discord.gg/fraxfinance",
    twitter: "https://x.com/fraxfinance",
    github: "https://github.com/FraxFinance",
    documentation: "https://docs.frax.finance/",
  },
  tags: ["stablecoin"],
};

export const services: ServiceRaw[] = [];
