import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "byreal",
  name: "Byreal",
  description:
    "Byreal is a hybrid DEX by Bybit combining concentrated liquidity (CLMM) with Request-for-Quote (RFQ) routing for low-slippage, MEV-protected trades.",
  tags: ["dapp"],
  links: {
    website: "https://www.byreal.io/",
    telegram: "https://t.me/Byreal_Community",
    twitter: "https://x.com/byreal_io",
    documentation: "https://docs.byreal.io/products/getting-started",
  },
};

const clmmContract = {
  name: "CLMMM",
  address: "REALQqNEomY6cQGZJUGwywTBD2UmDT32rZcNnfxQ5N2",
  networkId: NetworkId.solana,
};

const resetContract = {
  name: "Reset",
  address: "REALdpFGDDsiD9tvxYsXBTDpgH1gGQEqJ8YSLdYQWGD",
  networkId: NetworkId.solana,
};

const routerContract = {
  name: "Router",
  address: "REALp6iMBDTctQqpmhBo4PumwJGcybbnDpxtax3ara3",
  networkId: NetworkId.solana,
};

const rfqContract = {
  name: "RFQ",
  address: "REALFP9S4VmrAixmeYa68FrPKn4NVD2QFxxMfz9arhz",
  networkId: NetworkId.solana,
};

export const clmmService: ServiceRaw = {
  id: "byreal-clmm",
  name: "CLMM",
  platformId: platform.id,
  contractsRaw: [clmmContract],
};

export const resetService: ServiceRaw = {
  id: "byreal-reset",
  name: "Reset Launchpad",
  platformId: platform.id,
  contractsRaw: [resetContract],
};

export const routerService: ServiceRaw = {
  id: "byreal-router",
  name: "Router",
  platformId: platform.id,
  contractsRaw: [routerContract],
};

export const rfqService: ServiceRaw = {
  id: "byreal-rfq",
  name: "RFQ",
  platformId: platform.id,
  contractsRaw: [rfqContract],
};

export const services: ServiceRaw[] = [
  clmmService,
  resetService,
  routerService,
  rfqService,
];
