import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "thevault",
  name: "The Vault",
  description: "Liquid staking protocol for Solana",
  defiLlamaId: "the-vault",
  links: {
    website: "https://thevault.finance/",
    discord: "https://discord.gg/aQC53CGgQY",
    twitter: "https://x.com/thevaultfinance",
    github: "https://github.com/SolanaVault",
    documentation: "https://docs.thevault.finance/",
  },
  tokens: ["vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7"],
  tags: ["dapp", "lst"],
};
const unstakePoolContract: ContractRaw = {
  name: "Unstake Pool",
  address: "2rU1oCHtQ7WJUvy15tKtFvxdYNNSc3id7AzUcjeFSddo",
  networkId: NetworkId.solana,
};

export const unstakePoolService: ServiceRaw = {
  id: `${platform.id}-unstake-pool`,
  name: "Unstake Pool",
  platformId: platform.id,
  contractsRaw: [unstakePoolContract],
};

export const services: ServiceRaw[] = [unstakePoolService];
