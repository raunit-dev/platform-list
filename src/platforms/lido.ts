import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "lido",
  name: "Lido",
  description:
    "Lido was a liquid staking protocol issuing stSOL, now deprecated with users migrated to native staking.",
  links: {
    website: "https://lido.fi/",
    twitter: "https://x.com/lidofinance",
    github: "https://github.com/lidofinance",
  },
  tags: ["dapp", "lst"],
  tokens: ["7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "CrX7kMhLC3cSsXJdT7JDgqrRVWGnUpX3gfEfxxU2NVLi",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
