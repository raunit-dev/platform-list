import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "openloop",
  name: "OpenLoop",
  description:
    "OpenLoop is a DePIN network enabling users to earn rewards by running Sentry Nodes and contributing bandwidth.",
  links: {
    twitter: "https://x.com/openloop_so",
    website: "https://openloop.so/",
    discord: "https://discord.gg/75qBRaUczN",
  },
  tags: ["depin"],
};

const contract = {
  name: "Sentry Node",
  address: "2KJeTEHuZrkBTonJyTzuA5oKY3q6moEef2haNbY6evVZ",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-sentry-node`,
  name: "Sentry Node",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
