import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "hylo",
  name: "Hylo",
  description:
    "Hylo is a stablecoin protocol issuing a dollar-pegged stablecoin backed by SOL and leveraged SOL positions.",
  links: {
    website: "https://hylo.so/",
    twitter: "https://x.com/hylo_so",
    telegram: "https://t.me/hylo_announcements",
    github: "https://github.com/hylo-so",
  },
  tags: ["dapp"],
  tokens: [
    "HnnGv3HrSqjRpgdFmx7vQGjntNEoex1SU4e9Lxcxuihz",
    "5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E",
    "4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs",
  ],
};

const exchangeContract = {
  name: "Exchange",
  address: "HYEXCHtHkBagdStcJCp3xbbb9B7sdMdWXFNj6mdsG4hn",
  networkId: NetworkId.solana,
};

const stabilityPoolContract = {
  name: "Stability Pool",
  address: "HysTabVUfmQBFcmzu1ctRd1Y1fxd66RBpboy1bmtDSQQ",
  networkId: NetworkId.solana,
};

export const exchangeService: ServiceRaw = {
  id: `${platform.id}-exchange`,
  name: "Exchange",
  platformId: platform.id,
  contractsRaw: [exchangeContract],
};

export const stabilityPoolService: ServiceRaw = {
  id: `${platform.id}-stability-pool`,
  name: "Stability Pool",
  platformId: platform.id,
  contractsRaw: [stabilityPoolContract],
};

export const services: ServiceRaw[] = [exchangeService, stabilityPoolService];
