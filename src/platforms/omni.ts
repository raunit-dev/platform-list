import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "omni",
  name: "Omni Bridge",
  links: {
    documentation:
      "https://docs.near.org/chain-abstraction/omnibridge/overview",
    website: "https://docs.near.org/chain-abstraction/omnibridge/overview",
  },
  tags: ["dapp"],
};
const bridge: ContractRaw = {
  name: `Bridge`,
  address: 'dahPEoZGXfyV58JqqH85okdHmpN8U2q8owgPUXSCPxe',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}-bridge`,
    name: 'bridge',
    platformId: platform.id,
    contractsRaw: [bridge],
  },
];
