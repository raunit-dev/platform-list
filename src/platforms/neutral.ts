import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from "@sonarwatch/portfolio-core";
import { ServiceDefinition } from "../ServiceDefinition";
import { matchAnyInstructionWithPrograms } from "../utils/parseTransaction/matchAnyInstructionWithPrograms";

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

const contract = {
  name: "Bundle",
  address: "BUNDDh4P5XviMm1f3gCvnq2qKx6TGosAGnoUK12e7cXU",
  platformId: platform.id,
};

const neutral1VaultsContract: Contract = {
  name: "Neutral Vaults 1",
  address: "9Fcn3Fd4d5ocrb12xCUtEvezxcjFEAyHBPfrZDiPt9Qj",
  platformId: platform.id,
};

const neutral2VaultsContract: Contract = {
  name: "Neutral Vaults 2",
  address: "EuSLjg23BrtwYAk1t4TFe5ArYSXCVXLBqrHRBfWQiTeJ",
  platformId: platform.id,
};

const neutral3VaultsContract: Contract = {
  name: "Neutral Vaults 3",
  address: "BVddkVtFJLCihbVrtLo8e3iEd9NftuLunaznAxFFW8vf",
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: platform.id,
    name: "Strategies",
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [contract],
  },
  {
    id: `neutral-vaults`,
    name: "Vaults",
    platformId: platform.id,
    networkId: NetworkId.solana,
    matchTransaction: (tx) =>
      matchAnyInstructionWithPrograms(tx, [
        neutral1VaultsContract.address,
        neutral2VaultsContract.address,
        neutral3VaultsContract.address,
      ]),
  },
];
export default services;
