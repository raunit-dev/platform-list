import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "stabble",
  name: "stabble",
  description: "Solana's first frictionless liquidity and trading layer",
  defiLlamaId: "stabble",
  tags: ["dapp", "amm", "defi"],
  links: {
    website: "https://app.stabble.org/",
    discord: "https://discord.com/invite/SfkybtttdC",
    telegram: "https://t.me/+XWwNwDja8Oo4M2Y8",
    twitter: "https://x.com/stabbleorg",
    github: "https://github.com/stabbleorg",
    documentation: "https://docs.stabble.org/",
  },
  tokens: ["STBuyENwJ1GP4yNZCjwavn92wYLEY3t5S1kVS5kwyS1"],
};

const weghtedPoolContract = {
  name: "Weighted Pools",
  address: "swapFpHZwjELNnjvThjajtiVmkz3yPQEHjLtka2fwHW",
  networkId: NetworkId.solana,
};

const stablePoolContract = {
  name: "Stable Pools",
  address: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "LP Staking",
  address: "rev31KMq4qzt1y1iw926p694MHVVWT57caQrsHLFA4x",
  networkId: NetworkId.solana,
};

export const stablePoolsService: ServiceRaw = {
  id: `${platform.id}-liquidity-pools-stable`,
  name: "Stable Pools",
  platformId: platform.id,
  contractsRaw: [stablePoolContract],
  link: "https://app.stabble.org/pools",
  description:
    "Optimized AMM pools for stablecoins and pegged assets with low slippage and minimal impermanent loss through stable swap curves.",
};

export const weightedPoolsService: ServiceRaw = {
  id: `${platform.id}-liquidity-pools`,
  name: "Weighted Pools",
  platformId: platform.id,
  contractsRaw: [weghtedPoolContract],
  link: "https://app.stabble.org/pools",
  description:
    "Balancer-style weighted pools supporting custom asset ratios for diversified liquidity provision beyond standard 50/50 splits.",
};

export const lpStakingService: ServiceRaw = {
  id: `${platform.id}-lp-staking`,
  name: "LP Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  description:
    "LP token staking program rewarding liquidity providers with additional STB token incentives on top of trading fees.",
};

export const services: ServiceRaw[] = [
  stablePoolsService,
  weightedPoolsService,
  lpStakingService,
];
