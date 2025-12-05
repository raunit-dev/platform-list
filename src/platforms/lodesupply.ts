import { ContractRaw, NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "lodesupply",
  name: "LodeSupply",
  description: "Optimized ORE version",
  tags: ["tool"],
  links: {
    website: "https://ore.supply/",
    twitter: "https://x.com/lode_supply",
  },
};

const v3Contract: ContractRaw = {
  name: "Mining",
  address: "main99FJE8twaLPzw9nr3GqnSTVg8h4nyiMEDutnx64",
  networkId: NetworkId.solana,
};

const v3Service: ServiceRaw = {
  id: `${platform.id}-v3`,
  name: "V3",
  platformId: platform.id,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [v3Service];
