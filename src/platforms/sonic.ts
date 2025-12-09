import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "sonic",
  name: "Sonic",
  description:
    "Sonic is an atomic SVM chain built for sovereign game economies, utilizing the HyperGrid framework for high-throughput on-chain gaming.",
  links: {
    website: "https://www.sonic.game/",
    discord: "https://discord.com/invite/joinmirrorworld",
    twitter: "https://x.com/SonicSVM",
    github: "https://github.com/mirrorworld-universe",
    documentation: "https://docs.sonic.game/",
  },
  tokens: [
    "SonicxvLud67EceaEzCLRnMTBqzYUUYNr93DBkBdDES",
    "sonickAJFiVLcYXx25X9vpF293udaWqDMUCiGtk7dg2",
  ],
  tags: ["gaming"],
};

const contract = {
  name: "Staking",
  address: "g3yMgSB3Q7gNjMfSoCm1PiJihqHdNJeUuPHvRyf45qY",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
