import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "oro",
  name: "Oro",
  description:
    "Regulated tokenized gold protocol with yield-bearing tokens backed by physical gold",
  defiLlamaId: "oro-finance",
  links: {
    website: "https://app.oro.finance/",
    twitter: "https://x.com/orogoldapp",
  },
  tags: ["dapp", "rwa"],
  tokens: ["GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A"],
};
const staking: ContractRaw = {
  name: `Staking`,
  address: "stakeZZUzk2LgiiLqufNNyDQuUsn8UTzvCWBkWdYaRH",
  networkId: NetworkId.solana,
};
const core: ContractRaw = {
  name: `Core`,
  address: "iNtiXEFgDNrc6FUt4cFALDe3D8RF3sVnNuKSHwxZRop",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [staking],
  description:
    "Token staking for earning yield rewards and participating in protocol governance.",
};

export const coreService: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  contractsRaw: [core],
  description:
    "Core protocol infrastructure managing yield strategies and asset allocation.",
};

export const services: ServiceRaw[] = [stakingService, coreService];
