import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "kamino",
  name: "Kamino",
  description:
    "Kamino is a DeFi protocol offering lending, borrowing, automated liquidity vaults, and leverage products.",
  defiLlamaId: "parent#kamino-finance",
  links: {
    website: "https://kamino.finance/",
    discord: "https://discord.com/invite/kaminofinance",
    twitter: "https://x.com/KaminoFinance",
    github: "https://github.com/Kamino-Finance",
    documentation: "https://docs.kamino.finance/",
  },
  tokens: ["KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS"],
  tags: ["dapp"],
};

export const lendContract = {
  name: "Kamino Lend",
  address: "KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD",
  networkId: NetworkId.solana,
};

const poolsContract = {
  name: "Liquidity",
  address: "6LtLpnUFNByNXLyCoK9wA2MykKAmQNZKBdY8s47dehDc",
  networkId: NetworkId.solana,
};

const farmContract = {
  name: "Kamino Farm",
  address: "FarmsPZpWu9i7Kky8tPN37rs2TpmMrAZrC7S7vJa91Hr",
  networkId: NetworkId.solana,
};

export const limitOrderContract = {
  name: "Kamino Limit Order",
  address: "LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF",
  networkId: NetworkId.solana,
};

export const vaultContract = {
  name: "Kamino Vault",
  address: "KvauGMspG5k6rtzrqqn7WNn3oZdyKqLKwK2XWQ8FLjd",
  networkId: NetworkId.solana,
};

const leverageOnVaultContract = {
  name: "Leverage",
  address: "CRhtqXk98ATqo1R8gLg7qcpEMuvoPzqD5GNicPPqLMD",
  networkId: NetworkId.solana,
};

const scopePriceContract = {
  name: "Scope Price",
  address: "HFn8GnPADiny6XqUoWE8uRPPxb29ikn4yTuPa9MF2fWJ",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "KdisqEcXbXKaTrBFqeDLhMmBvymLTwj9GmhDcdJyGat",
  networkId: NetworkId.solana,
};

export const scopePriceService: ServiceRaw = {
  id: `${platform.id}-scope-price`,
  name: "Scope Price",
  platformId: platform.id,
  contractsRaw: [scopePriceContract],
};

export const lendService: ServiceRaw = {
  id: `${platform.id}-lend`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [lendContract],
};

export const multiplyService: ServiceRaw = {
  id: `${platform.id}-multiply`,
  name: "Multiply",
  platformId: platform.id,
  contractsRaw: [],
};

export const limitOrderService: ServiceRaw = {
  id: `${platform.id}-limit-order`,
  name: "Limit Order",
  platformId: platform.id,
  contractsRaw: [limitOrderContract],
};

export const swapService: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  contractsRaw: [],
};

export const liquidityService: ServiceRaw = {
  id: `${platform.id}-liquidity`,
  name: "Liquidity",
  platformId: platform.id,
  contractsRaw: [poolsContract, vaultContract],
};

const farmService: ServiceRaw = {
  id: `${platform.id}-farm`,
  name: "Farm",
  platformId: platform.id,
  contractsRaw: [farmContract],
};

export const vaultLeverageService: ServiceRaw = {
  id: `${platform.id}-leverage`,
  name: "Leverage",
  platformId: platform.id,
  contractsRaw: [leverageOnVaultContract],
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  scopePriceService,
  lendService,
  multiplyService,
  limitOrderService,
  swapService,
  liquidityService,
  farmService,
  vaultLeverageService,
  airdropService,
];
