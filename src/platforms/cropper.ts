import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "cropper",
  name: "Cropper",
  defiLlamaId: "cropper-clmm",
  links: {
    website: "https://cropper.finance/",
    twitter: "https://twitter.com/CropperFinance",
    telegram: "https://t.me/CropperFinance",
    github: "https://github.com/CropperFinance",
    medium: "https://cropperfinance.medium.com/",
    documentation: "https://docs.cropper.finance/cropperfinance",
  },
  tokens: ["DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz"],
  description:
    "Cropper was a decentralized exchange offering AMM pools and concentrated liquidity (CLMM) for token trading.",
  tags: ["dapp"],
  isDeprecated: true,
};

const stakingContract = {
  name: "Staking",
  address: "HYzrD877vEcBgd6ySKPpa3pcMbqYEmwEF1GFQmvuswcC",
  networkId: NetworkId.solana,
};

const clmmContract = {
  name: "CLMM",
  address: "H8W3ctz92svYg6mkn1UtGfu2aQr2fnUFHM1RhScEtQDt",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const clmmService: ServiceRaw = {
  id: `${platform.id}-liquidity`,
  name: "Liquidity",
  platformId: platform.id,
  contractsRaw: [clmmContract],
};

export const services: ServiceRaw[] = [stakingService, clmmService];
