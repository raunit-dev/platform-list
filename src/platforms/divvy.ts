import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "divvy",
  name: "Divvy",
  description:
    "Divvy is a sports betting platform offering frictionless wagering with no signups or deposits required.",
  defiLlamaId: "divvy.bet",
  links: {
    website: "https://app.divvy.bet/",
    discord: "https://discord.com/invite/divvybet",
    twitter: "https://twitter.com/DivvyBet",
    documentation:
      "https://divvy.bet/wp-content/uploads/2022/12/Divvy_Knowledge_Hub_06.pdf",
  },
  tokens: ["8fdi18UQNGg8mFEzjf79GUkzTg9YHSeojzCcarVxCX2y"],
  tags: ["gaming", "dapp"],
};

const contract = {
  name: "Divvy",
  address: "dvyFwAPniptQNb1ey4eM12L8iLHrzdiDsPPDndd6xAR",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "divvy-betting",
  name: "Divvy",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
