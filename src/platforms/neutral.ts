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
    twitter: "https://x.com/TradeNeutral",
    medium: "https://neutraltrade.medium.com/",
    documentation: "https://docs.neutral.trade/",
  },
  tags: ["dapp"],
};
const contract: ContractRaw = {
  name: "Bundle",
  address: "BUNDDh4P5XviMm1f3gCvnq2qKx6TGosAGnoUK12e7cXU",
  networkId: NetworkId.solana,
};

const neutral1VaultsContract: ContractRaw = {
  name: "Neutral Vaults",
  address: "9Fcn3Fd4d5ocrb12xCUtEvezxcjFEAyHBPfrZDiPt9Qj",
  networkId: NetworkId.solana,
};
const neutral2VaultsContract: ContractRaw = {
  name: "Neutral Vaults",
  address: "EuSLjg23BrtwYAk1t4TFe5ArYSXCVXLBqrHRBfWQiTeJ",
  networkId: NetworkId.solana,
};
const neutral3VaultsContract: ContractRaw = {
  name: "Neutral Vaults",
  address: "BVddkVtFJLCihbVrtLo8e3iEd9NftuLunaznAxFFW8vf",
  networkId: NetworkId.solana,
};

export const strategiesService: ServiceRaw = {
  id: `${platform.id}-strategies`,
  name: "Strategies",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://www.app.neutral.trade/",
  description:
    "Marketplace of battle-tested quantitative trading strategies including basis trading, funding rate arbitrage, and delta-neutral approaches.",
};

export const vaultsService: ServiceRaw = {
  id: `${platform.id}-vaults`,
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [
    neutral1VaultsContract,
    neutral2VaultsContract,
    neutral3VaultsContract,
  ],
  description:
    "Non-custodial JLP-powered delta-neutral vaults delivering double-digit yields for USDC, SOL, ETH, and wBTC via institutional-grade strategies.",
};

export const services: ServiceRaw[] = [strategiesService, vaultsService];
