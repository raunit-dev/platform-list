import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "ensofi",
  name: "EnsoFi",
  description:
    "Cross-chain DeFi Hub. Lend, Borrow, LSTs, Earn & more with stable returns.",
  links: {
    website: "https://app.ensofi.xyz",
    discord: "https://discord.com/invite/ensofi",
    telegram: "https://t.me/ensofiapp_bot/ensofi?startapp=mainnet",
    twitter: "https://x.com/Ensofi_xyz",
    github: "https://github.com/Ensofi-xyz",
    documentation: "https://ensofi.gitbook.io/ensofi",
  },
  tags: ["dapp"],
};

const lendingContract = {
  name: "Lending Fixed Terms",
  address: "ensoQXKf4MvNuEC3M9xmcqUqgucFNd5UzAonDdUtgqn",
  networkId: NetworkId.solana,
};

const lendingFlexContract = {
  name: "Lending Flexible Terms",
  address: "enseM1J4dGgwEw3qDyuVBi7YsjgwqvKzuX3ZLaboLGv",
  networkId: NetworkId.solana,
};

const liquidityContract = {
  name: "Liquidity",
  address: "ensSuXMeaUhRC7Re3ukaxLcX2E4qmd2LZxbxsK9XcWz",
  networkId: NetworkId.solana,
};

export const lendingService: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Fixed Lending",
  platformId: platform.id,
  contractsRaw: [lendingContract],
  link: "https://app.ensofi.xyz/fixed-lending",
  description:
    "Peer-to-peer fixed-rate lending market where lenders create custom offers with specified rates and durations for predictable yields.",
};

export const lendingFlexService: ServiceRaw = {
  id: `${platform.id}-lending-flex`,
  name: "Flexible Lending",
  platformId: platform.id,
  contractsRaw: [lendingFlexContract],
  link: "https://app.ensofi.xyz/flex-lending",
  description:
    "Flexible-term lending pools allowing borrowers and lenders to enter and exit positions with variable rates based on utilization.",
};

export const liquidityService: ServiceRaw = {
  id: `${platform.id}-liquidity`,
  name: "Liquidity",
  platformId: platform.id,
  contractsRaw: [liquidityContract],
  description:
    "Cross-chain liquidity infrastructure enabling borrowers to access funds and use collateral across multiple blockchains.",
};

export const services: ServiceRaw[] = [
  lendingService,
  lendingFlexService,
  liquidityService,
];
