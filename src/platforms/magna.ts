import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "magna",
  name: "Magna",
  description:
    "Magna is a token management platform for cap table management, vesting automation, airdrops, and custody solutions across multiple chains including Solana.",
  defiLlamaId: "adrastea",
  tags: ["tool", "dapp"],
  links: {
    website: "https://www.magna.so/",
    twitter: "https://x.com/magna_digital/photo",
  },
};

const airdropContract = {
  name: "Vesting Airdrop",
  address: "3zK38YBP6u3BpLUpaa6QhRHh4VXdv3J8cmD24fFpuyqy",
  networkId: NetworkId.solana,
};

const maintContract = {
  name: "Core",
  address: "magnaSHyv8zzKJJmr8NSz5JXmtdGDTTFPEADmvNAwbj",
  networkId: NetworkId.solana,
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Vesting Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const service: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Asset Management",
  platformId: platform.id,
  contractsRaw: [maintContract],
};

export const services: ServiceRaw[] = [airdropService, service];
