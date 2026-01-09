import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "genesysgo",
  name: "Genesysgo",
  description:
    "The first & only decentralized data storage network powered exclusively by mobile devices. Scalable, secure, trustless.",
  links: {
    website: "https://www.shdwdrive.com/",
    discord: "https://discord.com/invite/shdwdrive",
    twitter: "https://x.com/genesysgo",
    github: "https://github.com/GenesysGo",
    documentation: "https://docs.shdwdrive.com/",
  },
  tokens: ["SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y"],
  tags: ["tool", "depin", "infrastructure"],
};

const stakingContract = {
  name: "Staking",
  address: "AvqeyEDqW9jaBi7yrRA6AxJtLbMzRY9NX75HuPTMoS4i",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [stakingService];
