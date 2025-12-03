import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "neutral",
  name: "Neutral",
  description: "Hedge fund strategies for everyone.",
  defiLlamaId: "neutral-trade",
  links: {
    website: "https://www.app.neutral.trade/",
    discord: "https://discord.gg/neutraltrade",
    telegram: "https://t.me/neutraltrade/",
    twitter: "https://twitter.com/TradeNeutral",
    medium: "https://neutraltrade.medium.com/",
    documentation: "https://docs.neutral.trade/",
  },
  tags: ["dapp"],
};
const contract: ContractRaw = {
  name: 'Bundle',
  address: 'BUNDDh4P5XviMm1f3gCvnq2qKx6TGosAGnoUK12e7cXU',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: platform.id,
    name: 'Strategies',
    platformId: platform.id,
    contractsRaw: [contract],
  },
];
