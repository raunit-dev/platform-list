import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "atrix",
  name: "Atrix",
  defiLlamaId: "atrix",
  tags: ["dapp"],
  links: {
    website: "https://app.atrix.finance/liquidity",
    discord: "https://discord.com/invite/nfyqSEzUsp",
    twitter: "https://x.com/atrixprotocol",
  },
  description:
    "Atrix was a Serum-based AMM offering permissionless liquidity pools and yield farming.",
  isDeprecated: true,
};

const farmContract = {
  name: "Staking",
  address: "BLDDrex4ZSWBgPYaaH6CQCzkJXWfzCiiur9cSFJT8t3x",
  networkId: NetworkId.solana,
};

const poolContract = {
  name: "Staking",
  address: "HvwYjjzPbXWpykgVZhqvvfeeaSraQVnTiQibofaFw9M7",
  networkId: NetworkId.solana,
};

export const farmService: ServiceRaw = {
  id: `${platform.id}-farm`,
  name: "Farms",
  platformId: platform.id,
  contractsRaw: [farmContract],
};

export const poolService: ServiceRaw = {
  id: `${platform.id}-pool`,
  name: "Pools",
  platformId: platform.id,
  contractsRaw: [poolContract],
};

export const services: ServiceRaw[] = [farmService, poolService];
