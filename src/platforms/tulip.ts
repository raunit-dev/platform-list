import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "tulip",
  name: "Tulip",
  description:
    "Tulip Protocol is a yield aggregator that offered auto-compounding vaults, leveraged yield farming, and lending services.",
  defiLlamaId: "tulip-protocol",
  isDeprecated: true,
  tags: ["dapp"],
  links: {
    website: "https://tulip.garden/",
    discord: "https://discord.gg/tulipgarden",
    telegram: "https://t.me/TulipProtocol",
    twitter: "https://x.com/TulipProtocol",
    github: "https://github.com/sol-farm",
    medium: "https://medium.com/tulipprotocol",
    documentation: "https://tulip-protocol.gitbook.io/tulip-protocol",
  },
  tokens: ["TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs"],
};

const leverageContract = {
  name: "Leverage",
  address: "Bt2WPMmbwHPk36i4CRucNDyLcmoGdC7xEdrVuxgJaNE6",
  networkId: NetworkId.solana,
};

const v2Contract = {
  name: "V2",
  address: "TLPv2tuSVvn3fSk8RgW3yPddkp5oFivzZV3rA9hQxtX",
  networkId: NetworkId.solana,
};

const lendingContract = {
  name: "Lending",
  address: "4bcFeLv4nydFrsZqV5CgwCVrPhkQKsXtzfy2KyMz7ozM",
  networkId: NetworkId.solana,
};

const stakeContract = {
  name: "Stake",
  address: "stkTLPiBsQBUxDhXgxxsTRtxZ38TLqsqhoMvKMSt8Th",
  networkId: NetworkId.solana,
};

export const leverageService: ServiceRaw = {
  id: `${platform.id}-leverage`,
  name: "Solfarm Leverage",
  platformId: platform.id,
  contractsRaw: [leverageContract],
  description:
    "Leveraged yield farming enabling amplified LP positions through borrowed capital with automated rebalancing.",
};

export const v2Service: ServiceRaw = {
  id: `${platform.id}-v2`,
  name: "V2",
  platformId: platform.id,
  contractsRaw: [v2Contract],
  description:
    "Auto-compounding vaults automatically reinvesting farming rewards to maximize yield without manual intervention.",
};

export const lendingService: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [lendingContract],
  description:
    "Lending pools for depositing assets to earn interest or borrowing for leveraged farming strategies.",
};

export const stakeService: ServiceRaw = {
  id: `${platform.id}-stake`,
  name: "Stake",
  platformId: platform.id,
  contractsRaw: [stakeContract],
  description:
    "TULIP token staking for earning protocol fee share and governance voting rights.",
};

export const services: ServiceRaw[] = [
  leverageService,
  v2Service,
  lendingService,
  stakeService,
];
