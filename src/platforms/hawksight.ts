import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "hawksight",
  name: "HawkFi",
  description:
    "HawkFi is an analytics and automation platform for liquidity providers, offering yield optimization strategies for concentrated liquidity positions.",
  defiLlamaId: "hawkfi",
  links: {
    website: "https://www.hawkfi.ag/",
    discord: "https://discord.gg/hawkfi",
    telegram: "https://t.me/hawkfi",
    twitter: "https://x.com/HawkFi_",
    documentation: "https://hawkfi.gitbook.io/whitepaper",
  },
  tags: ["dapp", "trading", "defi", "tool"],
};

const mainContract = {
  name: "Main",
  address: "FqGg2Y1FNxMiGd51Q6UETixQWkF5fB92MysbYogRJb3P",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [mainService];
