import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "tuktuk",
  name: "TukTuk",
  description: "TukTuk is a task scheduling platform for on-chain automation.",
  links: {
    website: "https://www.tuktuk.fun",
    documentation: "https://www.tuktuk.fun/docs",
    github: "https://github.com/helium/tuktuk",
  },
  tags: ["tool", "infrastructure"],
  addedAt: 1764244800000,
};

const contract = {
  name: "Schedule",
  address: "tuktukUrfhXT6ZT77QTU8RQtvgL967uRuVagWF57zVA",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-schedule`,
  name: "Schedule",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
