import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "orca",
  name: "Orca",
  description:
    "Orca is an AMM and concentrated liquidity DEX offering token swaps, Whirlpools for capital-efficient liquidity provision, and yield farming.",
  defiLlamaId: "orca",
  links: {
    website: "https://www.orca.so/",
    discord: "https://discord.orca.so/",
    twitter: "https://x.com/orca_so",
    github: "https://github.com/orca-so",
    medium: "https://orca-so.medium.com/",
    documentation: "https://docs.orca.so/",
  },
  tokens: [
    "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
    "xorcaYqbXUNz3474ubUMJAdu2xgPsew3rUCe5ughT3N",
  ],
  tags: ["dapp", "dex", "amm", "defi"],
};
const pools: ContractRaw = {
  name: `Orca Pools`,
  address: "9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP",
  networkId: NetworkId.solana,
};
const aquaFarms: ContractRaw = {
  name: `Orca Aqua Farms`,
  address: "82yxjeMsvaURa4MbZZ7WZZHfobirZYkH1zF8fmeGtyaQ",
  networkId: NetworkId.solana,
};
const whirlpool: ContractRaw = {
  name: `Orca Whirlpool`,
  address: "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc",
  networkId: NetworkId.solana,
};
const staking: ContractRaw = {
  name: `Orca Staking`,
  address: "StaKE6XNKVVhG8Qu9hDJBqCW3eRe7MDGLz17nJZetLT",
  networkId: NetworkId.solana,
};

export const poolsService: ServiceRaw = {
  id: `${platform.id}-pools`,
  name: "Pools",
  platformId: platform.id,
  contractsRaw: [pools],
  link: "https://www.orca.so/pools",
  description:
    "Standard AMM liquidity pools using the constant product model, allowing users to provide liquidity across the full price range and earn trading fees from swaps.",
};

export const farmsService: ServiceRaw = {
  id: `${platform.id}-farms`,
  name: "Aqua Farms",
  platformId: platform.id,
  contractsRaw: [aquaFarms],
  description:
    "Yield farming program that rewards liquidity providers with additional token incentives on top of trading fees for participating in selected pools.",
};

export const whirlpoolsService: ServiceRaw = {
  id: `${platform.id}-whirlpools`,
  name: "Whirlpools",
  platformId: platform.id,
  contractsRaw: [whirlpool],
  link: "https://www.orca.so/pools",
  description:
    "Concentrated liquidity pools allowing liquidity providers to allocate capital within custom price ranges for improved capital efficiency and higher fee earnings.",
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [staking],
  description:
    "Token staking program allowing users to lock their governance tokens to participate in protocol governance and earn staking rewards.",
};

export const services: ServiceRaw[] = [
  poolsService,
  farmsService,
  whirlpoolsService,
  stakingService,
];
