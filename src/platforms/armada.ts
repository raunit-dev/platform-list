import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "armada",
  name: "Armada",
  description:
    "Armada is a no-code token staking and liquidity management platform offering professionally managed, non-custodial strategies.",
  defiLlamaId: "armada-staking",
  tags: ["dapp"],
  isDeprecated: true,
  links: {
    website: "https://armada-alliance.com/",
    twitter: "https://x.com/armadafi",
    github: "https://github.com/mithraiclabs",
  },
};

const contract = {
  name: "Staking",
  address: "STAKEGztX7S1MUHxcQHieZhELCntb9Ys9BgUbeEtMu1",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Permissionless Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
